<?php

namespace system\controllers;

use system\data\character\character;
use system\data\lang;
use system\libs\ArrayToXml;
use system\data\config;
use system\libs\func;
use system\libs\GRole;
use system\libs\stream;
use system\libs\struct\octetFly;
use system\libs\struct\octetWeapon;
use system\libs\struct\roleSkill;
use system\libs\struct\roleSkills;
use system\libs\system;
use system\libs\xml;
use system\models\editorModel;

if (!defined('IWEB')) {
    die("Error!");
}

class editorContrl
{

    static function checkSharpening($id, $sharpening)
    {
        foreach ($sharpening['ids'] as $i => $val) {
            if (in_array($id, $val)) return true;
        }
        return false;
    }

    static function index()
    {
        system::info("Визуальный редактор", "Визуальный редактор отключен в данной версии");
    }

    static function xml()
    {
        system::$site_title = "XML Редактор";
        if (system::$user['xml_edit']) {
            $id = (is_numeric($_GET['id'])) ? $_GET['id'] : 1024;
            if ($role = GRole::readCharacter($id, true)) {
                if (stream::$error > 0) {
                    system::info("Чтение персонажа", "Возникло: " . stream::$error . " ошибок при чтении персонажа, редактирование не возможно!", "info");
                } else {
                    system::load("xml");
                    system::set("{id}", $id);
                    system::set("{xml}", xml::encode($role['role']));
                    system::show('content');
                    system::clear();
                }
            } else
                system::info("Ошибка персонажа", "Не удалось получить данные о персонаже, возможно его не существует или сервер выключен");
        } else system::info("Нет доступа", "У вас нет доступа к этой функции");

    }

    static function chars()
    {
        system::$site_title = "Менеджер персонажей";
        system::load("chars");
        system::set("{save_gamedbg}", "cd " . config::$serverPath . "/" . config::$server['gamedbd']['dir'] . "; ./" . config::$server['gamedbd']['program'] . " " . config::$server['gamedbd']['config'] . " exportclsconfig");
        system::show('content');
        system::clear();
    }

}