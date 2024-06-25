<?php
mb_internal_encoding("UTF-8");
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

session_start();

define("dir", dirname(__FILE__));
define('IWEB', true);

require_once dir . "/system/init.php";

//\system\libs\system::debug(\system\libs\database::query("USE iweb"));

\system\libs\system::run();
