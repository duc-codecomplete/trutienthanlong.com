<?php

namespace system\models;

use system\libs\database;

class settingsModel
{
    //work
    static function getLogs()
    {
        if ($get = database::query("SELECT * FROM logs ORDER BY id DESC LIMIT 15")) {
            $log = array();
            $rows_num = database::num($get);
            if ($rows_num > 0) {
                for ($i = 0; $rows_num > $i; $i++) {
                    $log[$i] = database::assoc($get);
                }
                return $log;
            }
        }
        return false;
    }


}