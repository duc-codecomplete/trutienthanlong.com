<?php

namespace system\controllers;

use system\data\config;
use system\libs\database;
use system\libs\system;
use system\models\settingsModel;

if (!defined('IWEB')) {
    die("Error!");
}

class settingsContrl
{

    //work
    static function index()
    {
        system::$site_title = "Настройки";
        if (system::$user['settings']) {

            $items = database::query("SELECT * FROM items");
            $icons = database::query("SELECT * FROM items_icons");

            if (file_exists(dir . "/system/data/elements.data"))
                $statusElement = "<span style='color: green'>найдет</span>";
            else $statusElement = "<span style='color: red'>не найдет</span>";

            if (file_exists(dir . "/system/data/iconlist_ivtrm.png"))
                $statusPngIcons = "<span style='color: green'>найдет</span>";
            else $statusPngIcons = "<span style='color: red'>не найдет</span>";

            if (file_exists(dir . "/system/data/iconlist_ivtrm.txt"))
                $statusTxtIcons = "<span style='color: green'>найдет</span>";
            else $statusTxtIcons = "<span style='color: red'>не найдет</span>";

            system::load("settings");
            system::set("{items_count}", database::num($items));
            system::set("{icons_count}", database::num($icons));
            system::set("{status_element}", $statusElement);
            system::set("{status_png_icons}", $statusPngIcons);
            system::set("{status_txt_icons}", $statusTxtIcons);
            system::show("content");
            system::clear();
        } else system::info("Нет доступа", "У вас нет доступа к этой функции");
    }

    //work
    static function logs()
    {
        if (system::$user['logs'] == true) {
            $logs = "";
            if ($getLogs = settingsModel::getLogs()) {
                foreach ($getLogs as $key => $log) {
                    $logs .= "<tr>";
                    $logs .= "<td>" . date("d.m.y / H:i", $log['date']) . "</td>";
                    $logs .= "<td>{$log['ip']}</td>";
                    $logs .= "<td>{$log['user']}</td>";
                    $logs .= "<td>{$log['action']}</td>";
                    $logs .= "</tr>";
                }
            }

            system::load('logs');
            system::set("{logs}", $logs);
            system::show('content');
            system::clear();
        } else system::info("Нет доступа", "У вас нет доступа к этой функции");

    }

}