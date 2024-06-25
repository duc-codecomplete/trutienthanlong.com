<?php

namespace system\models;

use system\data\character\character;
use system\data\config;
use system\libs\database;
use system\libs\func;
use system\libs\GRole;
use system\libs\socket;
use system\libs\stream;
use system\libs\struct\GMRoleData;
use system\libs\system;

if (!defined('IWEB')) {
    die("Error!");
}

class serverModel
{

    public static $auth;
    public static $gacd;
    public static $gamedb;
    public static $gdeliveryd;
    public static $gfactiond;
    public static $glinkd1;
    public static $logservice;
    public static $uniquenamed;
    public static $gs;

    static function sendChatMessage($msg, $chanel)
    {
        //  if (!empty($msg)) {
        stream::writeByte($chanel);
        stream::writeByte(0);
        stream::writeInt32(0);
        stream::writeString($msg);
        stream::writeOctets("");
        stream::pack(0x78);

        socket::sendPacket(3, socket::packInt(29300) . stream::$writeData);

//        socket::connect();
//        $pack = pack("i", 3);
//        $pack .= pack("i", strlen(config::$server_key));
//        $pack .= config::$server_key;
//        $pack .= pack("i", 29300);
//        $pack .= stream::$writeData;
//        socket::send($pack);
//        $getRecv = socket::recv();
//        system::debug($getRecv);
//        socket::close();

        // stream::send("data|29300");
//        $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
//
//        if (@socket_connect($socket, "127.0.0.1", 8888)) {
//            socket_set_block($socket);
//            //if ($firstRead) socket_recv($socket, self::$readData, 131072, 0);
//            //socket_send($socket, , 131072, 0);
//            socket_send($socket, "data|29300".stream::$writeData, 131072, 0);
//            //  if ($read) socket_recv($socket, self::$readData, 131072, 0);
//            socket_set_nonblock($socket);
//            socket_close($socket);
//            stream::$writeData = "";
//        }
        //socket::recv();
        //stream::$writeData = "";

//            if (stream::Send(config::$serverIP, )) {
//                system::jms("success", "Сообщение отправленр");
//                system::log("Отправлено сообщение в чат");
//            } else
//                system::jms("danger", "Ошибка отправки сообщения");
        //} else
        //   system::jms("info", "Пустое сообщение не отправлено");


    }

    static function statusServer()
    {
        $datas = socket::sendPacket(57, socket::packString("/proc/meminfo"));

        $dataMemFile = explode("\n", $datas);
        $data = array();
        foreach ($dataMemFile as $line) {
            if (!empty($line)) {
                list($key, $val) = explode(":", str_replace(" kB", "", $line));
                $data[$key] = intval((int)trim($val) / 1024);
            }
        }
        return $data;
    }

    static function mail($data, $online = false)
    {
        if (!empty($data['idChar']) && is_numeric($data['idChar'])) {
            stream::writeInt32(344);
            stream::writeInt32(32);
            stream::writeByte(3);
            stream::writeInt32($data['idChar']);
            stream::writeString($data['titleItem']);
            stream::writeString($data['messageItem']);
            stream::writeInt32($data['idItem']);
            stream::writeInt32(0);
            stream::writeInt32($data['countItem']);
            stream::writeInt32($data['maxCountItem']);
            stream::writeOctets($data['octetItem']);
            stream::writeInt32($data['prototypeItem']);
            stream::writeInt32($data['timeItem']);
            stream::writeInt32(0);
            stream::writeInt32(0);
            stream::writeInt32($data['maskItem']);
            stream::writeInt32($data['moneyItem']);
            stream::pack(character::$pack['sendMail']);
            if (socket::sendPacket(3, socket::packInt(config::$gdeliverydPort) . stream::$writeData) != "server:0") {
                if (!$online) {
                    system::jms("success", "Почта отпралена на персонажа " . $data['idChar']);
                    system::log("Отправлена почта на " . $data['idChar'] . ", предмет: " . $data['idItem'] . " в кол-ве: " . $data['countItem']);
                }// else return true;
                if (database::query("SELECT * FROM mail WHERE idItem='" . database::safesql($data['idItem']) . "'")) {
                    if (database::num() == 0) {
                        $insertKey = "";
                        $insertValue = "";
                        foreach ($data as $key => $value) {
                            if ($key != "idChar") {
                                $insertKey .= "$key,";
                                $insertValue .= "'" . database::safesql($value) . "',";
                            }
                        }
                        database::query("INSERT INTO mail (" . rtrim($insertKey, ",") . ") VALUES (" . rtrim($insertValue, ",") . ")");
                    } else {
                        $update = "";
                        foreach ($data as $key => $value) {
                            if ($key != "idChar") {
                                $update .= $key . "='" . database::safesql($value) . "',";
                            }
                        }
                        database::query("UPDATE mail SET " . rtrim($update, ",") . " WHERE idItem='" . database::safesql($data['idItem']) . "'");
                    }
                } else {
                    system::jms("info", "Почта отправлена но возникла проблема при записи истории в базу данных");
                }
            } else {
                system::jms("danger", "Ошибка отправки почты");
            }
        } else {
            system::jms("info", "Укажите ID персонажа для отправки почты");
        }
    }

    static function sendMailAllOnline($data)
    {
        $online = array();
        stream::writeInt32(0);
        stream::writeInt32(0);
        stream::writeInt32(0);
        stream::writeOctets("");
        stream::pack(character::$pack['GMRoleOnline']);
        stream::$readData = socket::sendPacket(5, socket::packInt(config::$gdeliverydPort) . stream::$writeData);
        if (stream::$readData != "server:0") {
            stream::readCUint32();
            stream::$length = stream::readCUint32();
            $online = GRole::readData(character::$functions['GMRoleOnline']);
        }
        if ($online['count']['value'] > 0) {
            foreach ($online['users'] as $user) {
                $data['idChar'] = $user['roleid']['value'];
                stream::$writeData = "";
                self::mail($data, true);
            }
            system::log("Отправлена почта всем кто в сети");
            system::jms("success", "Почта отправлена " . $online['count']['value'] . " персонаж(у/ам)");
        }

    }

    static function getItemsMail($id = "")
    {
        $items = "";
        if (isset($id) && is_numeric($id)) {
            database::query("SELECT * FROM mail WHERE idItem='{$id}'");
            $items = json_encode(database::assoc());
        } else {
            $history = database::query("SELECT * FROM mail");
            echo "<input type='hidden'>";

            for ($i = 0; $i < database::num($history); $i++) {
                $item = database::assoc($history);
                $elItem = editorModel::getItemFromElement($item['idItem']);
                $iconName = config::$site_adr . "/index.php?function=icon&name=" . $elItem['icon'];
                $items .= "<option value='" . $item['idItem'] . "' data-content='<img src=\"{$iconName}\"> {$item['idItem']} {$elItem['name']}'></option>";
            }

        }
        return $items;
    }

    static function checkStatusServer()
    {
        $proc = array();
        foreach (config::$server as $key => $server) {
            $program = (!isset($server['pid_name'])) ? $server['program'] : $server['pid_name'][config::$serverTypeAuth];

            $getRecv = socket::sendPacket(2, socket::packString($program), 1024 * 100);

            if ($getRecv != "off") {
                $getProcess = explode("\n", trim($getRecv));
                //$getProcess = array_diff($getProcess, array(''));
                foreach ($getProcess as $value) {
                    $proc[$key]['process'][] = str_getcsv(preg_replace("/\s{2,}/", ' ', $value), " ", "", "\n");
                }
            }
            if ($getRecv != "off") {
                $proc[$key]['count'] = count($proc[$key]['process']);
                $proc[$key]['status'] = "<span style='color: green'>Включен</span>";
            } else {
                $proc[$key]['count'] = 0;
                $proc[$key]['status'] = "<span style='color:red;'>Выключен</span>";
            }
            //break;
        }
        return $proc;
    }

    static function getStartedLocation()
    {
        $Started = "";
        $getRecv = socket::sendPacket(2, socket::packString("gs"), 2048 * 10);
        if ($getRecv != "off") {
            $getProcess = explode("\n", trim($getRecv));
            $arr = func::listLocations(true);

            foreach ($getProcess as $process) {
                $get = str_getcsv(preg_replace("/\s{2,}/", ' ', $process), " ", "", "\n");
                // system::debug($get);
                //  $getEnd = end($get);
                $Started .= "<tr id='loc-{$get[1]}'>
    <td><label style='width: 100%' class='custom-control custom-checkbox'>
  <input type='checkbox' name='checkbox[{$get[1]}]' data-pid='{$get[1]}' id='location' class='location custom-control-input' value='{$get[11]}'>
  <span class='custom-control-indicator'></span>
  <span class='custom-control-description'>" . $arr[$get[11]] . "</span>
</label></td>
    <td>" . $get[2] . "%</td>
    <td>" . $get[3] . "%</td>
     <td><button onclick='killLocation({$get[1]})' class='btn btn-danger btn-sm'><i class='fas fa-power-off'></i></button></td></tr>";
            }
        }
        return $Started;

    }

    static function startLocation($data)
    {
        $server = config::$server['gs'];
       // system::debug($data['oneQuery']);
        if ($data['oneQuery'] == "true") {
            $firstLocation = $data['locations'][0];
            $count = count($data['locations']);
            $locations = array_slice($data['locations'], 1);
            $goStart = "";
            foreach ($locations as $location){
                $goStart .= "$location ";
            }
            $startServerOneQuery = "cd {dir}; ./{program} $firstLocation gs.conf gmserver.conf gsalias.conf $goStart> {log_dir}/Locations_{$count}_iweb.log &";
            $startServerOneQuery = preg_replace("{{dir}}", config::$serverPath . "/" . $server['dir'], $startServerOneQuery);
            $startServerOneQuery = preg_replace("{{program}}", $server['program'], $startServerOneQuery);
            $startServerOneQuery = preg_replace("{{log_dir}}", config::$serverPath . "/logs", $startServerOneQuery);
            socket::sendPacket(0, socket::packString($server['program'] . " " . $firstLocation) . socket::packString($startServerOneQuery));
        } else {
            foreach ($data['locations'] as $item) {
                $startServer = "cd {dir}; ./{program} {config} > {log_dir}/{$item}_iweb.log &";
                $startServer = preg_replace("{{config}}", $item, $startServer);
                $startServer = preg_replace("{{dir}}", config::$serverPath . "/" . $server['dir'], $startServer);
                $startServer = preg_replace("{{program}}", $server['program'], $startServer);
                $startServer = preg_replace("{{log_dir}}", config::$serverPath . "/logs", $startServer);
                socket::sendPacket(0, socket::packString($server['program'] . " " . $item) . socket::packString($startServer));
            }
        }
    }

    static function killPid($pid)
    {
        if (is_array($pid)) {
            foreach ($pid as $item) {
                socket::sendPacket(7, socket::packInt($item));
            }
        } else
            socket::sendPacket(7, socket::packInt($pid));
    }

    static function startServer()
    {
        foreach (config::$server as $key => $server) {
            if ($key == "auth")
                $serverPIDName = $server['pid_name'][config::$serverTypeAuth];
            else
                $serverPIDName = $server['program'];

            $startServer = "cd {dir}; ./{program} {config} > {log_dir}/{program}_iweb.log &";

            $startServer = preg_replace("{{dir}}", config::$serverPath . "/" . $server['dir'], $startServer);
            $startServer = preg_replace("{{program}}", $server['program'], $startServer);
            $startServer = preg_replace("{{config}}", $server['config'], $startServer);
            $startServer = preg_replace("{{log_dir}}", config::$serverPath . "/logs", $startServer);

           socket::sendPacket(0, socket::packString($serverPIDName) . socket::packString($startServer));

        }


        // system::debug($startServer);


    }

    static function stopServer()
    {
        // set_time_limit(10);
        foreach (config::$serverStop as $stop) {
            socket::sendPacket(1, socket::packString($stop));
        }
//        socket::connect();
//        socket::send("clear_drop_caches");
//        socket::close();

//        if (empty(ssh::$error)) {
//            system::jms("success", "Отправлена команда на выключение сервера");
//            system::log("Остановка сервера");
//        } else
//            system::jms("danger", ssh::$error);
    }

    static function restartServer()
    {
        self::stopServer();
        self::startServer();
    }

}