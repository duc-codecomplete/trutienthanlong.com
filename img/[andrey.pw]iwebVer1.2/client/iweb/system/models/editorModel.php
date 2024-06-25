<?php

namespace system\models;

use system\data\character\character;
use system\data\config;
use system\data\lang;
use system\libs\database;
use system\libs\GRole;
use system\libs\socket;
use system\libs\stream;
use system\libs\struct\GRoleData;
use system\libs\struct\roleLevelUp;
use system\libs\system;

if (!defined('IWEB')) {
    die("Error!");
}

class editorModel
{
    static $visual;

    static function selectProp($arr, $value)
    {
        $result = "";
        foreach ($arr as $key => $val) {
            if ($value == $key) $active = " selected"; else $active = "";
            $result .= "<option value='{$key}' {$active}>$val</option>";
        }
        return $result;
    }

    //work
    static function levelUp($id, $level)
    {
        $role = GRole::readCharacter($id, false);
        if ($role) {
            if (is_numeric($id) && !empty($id)) {
                if ($level >= 1) {
                    $levelUP = new roleLevelUp();

                    $role['role']['status']['pp']['value'] = $level * 5;
                    $role['role']['status']['property']['vitality']['value'] = 5;
                    $role['role']['status']['property']['energy']['value'] = 5;
                    $role['role']['status']['property']['strength']['value'] = 5;
                    $role['role']['status']['property']['agility']['value'] = 5;

                    $levelUP->levelProperty($role['role']['base']['cls']['value'], $level, $role['role']['status']['property']);
                    $role['role']['status']['level']['value'] = $level;
                    $role['role']['status']['exp']['value'] = 0;
                    if ($role['role']['status']['hp']['value'] < $role['role']['status']['property']['max_hp']['value']) $role['role']['status']['property']['hp']['value'] = $role['role']['status']['property']['max_hp']['value'];
                    if ($role['role']['status']['mp']['value'] < $role['role']['status']['property']['max_mp']['value']) $role['role']['status']['property']['mp']['value'] = $role['role']['status']['property']['max_mp']['value'];

                    if(GRole::writeCharacter($id, $role, false))
                        system::log("Изменен уровень персонажа " . $id);
                } else
                    system::jms("info", "Уровень меньше 1 или не указан");
            } else
                system::jms("info", lang::$notValidCharID);
        } else
            system::jms("danger", "Ошибка получение персонажа");
    }

    //work
    static function teleportGD($roleID)
    {
        if (!empty($roleID) && is_numeric($roleID)) {
            if ($role = GRole::readCharacter($roleID, true)) {
                $role['role']['status']['posx']['value'] = 1284.897;
                $role['role']['status']['posy']['value'] = 219.618;
                $role['role']['status']['posz']['value'] = 1130.428;
                $role['role']['status']['worldtag']['value'] = 1;
                if(GRole::writeCharacter($roleID, $role, true))
                    system::log("Переименование телепортирован в $roleID ГД");
            } else
                system::jms("danger", "Ошибка получение персонажа");
        } else
            system::jms("danger", lang::$notValidCharID);
    }

    //work
    static function nullSpEp($roleID)
    {
        if (!empty($roleID) && is_numeric($roleID)) {
            if ($role = GRole::readCharacter($roleID, true)) {
                $role['role']['status']['sp']['value'] = 0;
                $role['role']['status']['exp']['value'] = 0;
                if(GRole::writeCharacter($roleID, $role, true))
                    system::log("Обнуление духа и опыта " . $roleID);
            } else
                system::jms("danger", "Ошибка получение персонажа");
        } else
            system::jms("danger", lang::$notValidCharID);
    }

    //work
    static function addGold($roleID, $count)
    {
        if (!empty($roleID) && is_numeric($roleID)) {
            stream::writeInt32($roleID);
            stream::writeInt32($count);
            stream::pack(character::$pack['DebugAddCash']);
            if (socket::sendPacket(6, socket::packInt( config::$dbPort).stream::$writeData) != "server:0") {
                system::jms("success", "Золото отправлено");
                system::log("Отправлено золото $count на аккаунт " . $roleID);
            } else {
                system::jms("danger", "Золото не отправлено, возможно сервер выключен");
            }
        } else
            system::jms("danger", lang::$notValidCharID);
    }

    //work
    static function deleteRole($id)
    {
        if (!empty($id) && is_numeric($id)) {
            stream::writeInt32($id, true, -1);
            stream::writeByte(0);
            stream::pack(character::$pack['DeleteRole']);
            if (socket::sendPacket(6, socket::packInt( config::$dbPort).stream::$writeData) != "server:0") {
                system::jms("success", "Персонаж удален");
                system::log("Удаление персонажа " . $id);
            } else
                system::jms("danger", "Не удалось удалить персонажа");
        } else
            system::jms("danger", lang::$notValidCharID);
    }

    //work
    static function renameRole($id, $oldName, $newName)
    {
        if (!empty($id) && is_numeric($id)) {
            stream::writeInt32($id, true, -1);
            stream::writeString($oldName);
            stream::writeString($newName);
            stream::pack(character::$pack['RenameRole']);
            ;
            if (socket::sendPacket(6, socket::packInt( config::$dbPort).stream::$writeData) != "server:0") {
                system::jms("success", "Персонаж переименован");
                system::log("Переименование персонажа $id с $oldName на $newName");
            } else
                system::jms("danger", "Не удалось переименовать персонажа");
        } else
            system::jms("danger", lang::$notValidCharID);
    }

    //work
    static function charsList($id)
    {
        if (!empty($id) && is_numeric($id)) {
            $list = GRoleData::getListRoles($id);
            $roleList = "<table>";
            if ($list['count']['value'] > 0) {
                foreach ($list['roles'] as $role) {
                    $roleList .= "<tr>  <td>" . $role['id']['value'] . "&nbsp;&blacktriangleright;&nbsp;</td> <td><b> " . $role['name']['value'] . "&nbsp;&nbsp;&nbsp; </b> </td>
<td><a class=\"badge badge-primary\" href='" . config::$site_adr . "/?controller=editor&page=xml&id=" . $role['id']['value'] . "'>XML</a> 
<a class=\"badge badge-success\" href='" . config::$site_adr . "/?controller=editor&id=" . $role['id']['value'] . "'>Редактор</a> 
<a class=\"badge badge-warning\" href='" . config::$site_adr . "/?controller=server&page=mail&id=" . $role['id']['value'] . "'>Почта</a>
<a class=\"badge badge-info\" href='javascript:void(0)' data-toggle=\"modal\" data-target=\"#ban\" onclick='ban(" . $role['id']['value'] . ", 3)'>Бан чата</a>
<a class=\"badge badge-light\" href='javascript:void(0)' data-toggle=\"modal\" data-target=\"#ban\" onclick='ban(" . $role['id']['value'] . ", 4)'>Бан перса</a>
<a class=\"badge badge-danger\" href='javascript:void(0)' onclick='goDelChar(" . $role['id']['value'] . ")'>Удалить</a></td></tr>";
                }
                $roleList .= "</table>";
                echo $roleList;
            } else
                echo "<p class=\"alert alert-info\">Персонажи не найдены или не удалось получить данных от сервера</p>";
        } else
            system::jms("danger", lang::$notValidCharID);
    }

    static function getItemFromElement($id)
    {
        if ($item1 = database::squery("SELECT * FROM items WHERE itemID='$id'")) {
            $iconNameArr = explode("/", $item1['itemIcon']);
            $item['name'] = $item1['itemName'];
            $item['list'] = $item1['itemList'];
            $item['icon'] = end($iconNameArr);
        } else {
            $item['name'] = "Неизвестно";
            $item['list'] = 999;
            $item['icon'] = "unknown.dds";
        }
        return $item;
    }

    static function ban($id, $time, $type, $reason)
    {

        stream::writeInt32(-1);
        stream::writeInt32(0);
        stream::writeInt32($id);
        stream::writeInt32($time);
        stream::writeString($reason);
        switch ($type) {
            case 1:
                $msg = "Аккаунт $id заблокирован на $time";
                stream::pack(character::$pack['accForbid']); // бан акка
                break;
            case 2:
                $msg = "Чат на аккаунт $id заблокирован на $time";
                stream::pack(character::$pack['chatAccForbid']); // бан чата акка
                break;
            case 3:
                $msg = "Чат на персонаже $id заблокирован на $time";
                stream::pack(character::$pack['chatCharForbid']); // бан чата персонажа
                break;
            case 4:
                $msg = "Персонаж $id заблокирован на $time";
                stream::pack(character::$pack['forbid']); // бан персонажа
                break;
            default:
                $msg = "Не верный тип бана";
                break;
        }
        if ( socket::sendPacket(4, socket::packInt(config::$gdeliverydPort).stream::$writeData)) {
            system::log($msg);
            system::jms("success", $msg);
        } else
            system::jms("danger", "Ошибка блокировки персонажа/аккаунта");
    }

}