<?php
session_start();
define('dir', dirname(__FILE__));
header("Content-Type: text/html; charset=utf-8");
$url = explode("/install.php", strtolower($_SERVER['PHP_SELF']));
$url = reset($url);
if (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443) $protocol = "https://"; else $protocol = "http://";
$url = $protocol . $_SERVER['HTTP_HOST'] . $url;
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Установка IWEB</title>
    <link rel="stylesheet" href="<?php echo $url; ?>/system/template/css/bootstrap.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background: #1a2023;
            color: #aeb9bc;
            font-family: Tahoma, Arial, Helvetica, sans-serif;
        }

        .container input[type=text] {
            padding-bottom: 5px;
            background: #353e41;
            border: 1px solid #161a1c;
            color: white;
        }

        .container input[type=text]:focus {
            background: #343d40;
            border: 1px solid #161a1c;
            color: white;
        }

        .container select {
            padding-bottom: 5px;
            background: #353e41;
            border: 1px solid #161a1c;
            color: white;
        }

        .container select:focus {
            background: #343d40;
            border: 1px solid #161a1c;
            color: white;
        }

        .content {
            background: #262e31;
        }
    </style>
</head>
<body>

<div class="container content">
    <?php
    if (isset($_POST['save'])) {
        $confWrite = "<?php\nnamespace system\data;\nif (!defined('IWEB')) {die(\"Error!\");}\nclass config\n{\n";

        foreach ($_POST['config'] as $key => $value) {
            if ($key != "username" && $key != "password") {
                if ($value == "true" or $value == "false")
                    $confWrite .= "\tstatic $$key = $value;\n";
                else
                    $confWrite .= "\tstatic $$key = \"$value\";\n";
            }
        }

        $confWrite .= "\t" . 'static $server = array(
        "logservice" => array(
            "dir" => "logservice",
            "program" => "logservice",
            "config" => "logservice.conf",
            "type" => 0
        ),
        "uniquenamed" => array(
            "dir" => "uniquenamed",
            "program" => "uniquenamed",
            "config" => "gamesys.conf",
            "type" => 0
        ),
        "auth" => array(
            "dir" => "auth/build/",
            "program" => "authd.sh",
            "config" => "start",
            "pid_name" => array("auth" => "auth", "authd" => "authd", "gauthd" => "gauthd"),
            "type" => 1,

        ),
        "gamedbd" => array(
            "dir" => "gamedbd",
            "program" => "gamedbd",
            "config" => "gamesys.conf",
            "type" => 0
        ),
        "gacd" => array(
            "dir" => "gacd",
            "program" => "gacd",
            "config" => "gamesys.conf",
            "type" => 0
        ),
        "gfactiond" => array(
            "dir" => "gfactiond",
            "program" => "gfactiond",
            "config" => "gamesys.conf",
            "type" => 0
        ),
        "gdeliveryd" => array(
            "dir" => "gdeliveryd",
            "program" => "gdeliveryd",
            "config" => "gamesys.conf",
            "type" => 0
        ),
        "glinkd" => array(
            "dir" => "glinkd",
            "program" => "glinkd",
            "config" => "gamesys.conf 1",
            "type" => 0
        ),
        "gs" => array(
            "dir" => "gamed",
            "program" => "gs",
            "config" => "gs01",
            "type" => 0
        )
    );

    static $serverStop = array(
        "glinkd",
        "logservice",
        "java",
        "gacd",
        "gs",
        "gfactiond",
        "gdeliveryd",
        "uniquenamed",
        "gamedbd",
    );

}';
            //$_SESSION['user'] = $_POST['config']['username'];
            echo "<br/><h5><b>Завершение установки</b></h5><br/>";
            $mysqliTest = new mysqli($_POST['config']['db_host'], $_POST['config']['db_user'], $_POST['config']['db_password']);
            if ($mysqliTest) {
                if (!$mysqliTest->query("USE " . $_POST['config']['db_table'])) {

                    if ($mysqliTest->query("CREATE DATABASE " . $_POST['config']['db_table'])) {
                        echo "База данных " . $_POST['config']['db_table'] . " создана<br>";

                        $mysqli = new mysqli($_POST['config']['db_host'], $_POST['config']['db_user'], $_POST['config']['db_password'], $_POST['config']['db_table']);

                        $mysqli->set_charset("utf8");
                        $mysqli->query("CREATE TABLE `groups` (
  `id_group` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `xml_edit` int(1) DEFAULT NULL,
  `visual_edit` int(1) DEFAULT NULL,
  `gm_manager` int(1) DEFAULT NULL,
  `kick_role` int(1) DEFAULT NULL,
  `ban` int(1) DEFAULT NULL,
  `add_gold` int(1) DEFAULT NULL,
  `level_up` int(1) DEFAULT NULL,
  `rename_role` int(1) DEFAULT NULL,
  `teleport` int(1) DEFAULT NULL,
  `null_exp_sp` int(1) DEFAULT NULL,
  `del_role` int(1) DEFAULT NULL,
  `server_manager` int(1) DEFAULT NULL,
  `send_msg` int(1) DEFAULT NULL,
  `send_mail` int(1) DEFAULT NULL,
  `settings` int(1) DEFAULT NULL,
  `logs` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

                        $mysqli->query("INSERT INTO `groups` (`id_group`, `title`, `xml_edit`, `visual_edit`, `gm_manager`, `kick_role`, `ban`, `add_gold`, `level_up`, `rename_role`, `teleport`, `null_exp_sp`, `del_role`, `server_manager`, `send_msg`, `send_mail`, `settings`, `logs`) VALUES
(1, 'Главный администратор', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);");

                        $mysqli->query("ALTER TABLE `groups`
  ADD PRIMARY KEY (`id_group`);");

                        $mysqli->query("CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `itemID` int(11) NOT NULL,
  `itemName` text NOT NULL,
  `itemIcon` text NOT NULL,
  `itemList` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

                        $mysqli->query("ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);");
                    }

                     $mysqli->query("CREATE TABLE `items_icons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `icon` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

                     $mysqli->query("ALTER TABLE `items_icons`
  ADD PRIMARY KEY (`id`);");

                     $mysqli->query("CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `ip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `date` int(11) NOT NULL,
  `user` varchar(255) CHARACTER SET utf8 NOT NULL,
  `action` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

                     $mysqli->query("ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);");

                     $mysqli->query("CREATE TABLE `mail` (
  `idMail` int(11) NOT NULL,
  `titleItem` text NOT NULL,
  `messageItem` text NOT NULL,
  `idItem` int(11) NOT NULL,
  `countItem` int(11) NOT NULL,
  `maxCountItem` int(11) NOT NULL,
  `octetItem` text NOT NULL,
  `prototypeItem` int(11) NOT NULL,
  `timeItem` int(11) NOT NULL,
  `maskItem` int(11) NOT NULL,
  `moneyItem` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

                     $mysqli->query("ALTER TABLE `mail`
  ADD PRIMARY KEY (`idMail`);");

                     $mysqli->query("CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
");

                     $mysqli->query("INSERT INTO `users` (`id`, `name`, `password`, `group_id`) VALUES
(1, '".$_POST['config']['username']."', '".md5($_POST['config']['password'])."', 1);
");

                     $mysqli->query("ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);");



                    $fw = fopen(dir . "/system/data/config.php", "w");
                    if (fwrite($fw, $confWrite)) {
                    echo "Настройки успешно записаны, теперь вы можите приступить к работе с панелью! <br>
               <b>Обязательно удалите файл install.php</b>
<br><center><a href='$url'>Перейти на главную страницу панели</a></center>";

                } else {
                    echo "<span style='color: red;'>*Не удалось записать файл конфига!</span><br>";
                }
                fclose($fw);

                } else {
                    echo "<span style='color: red;'>*База данных которую вы хотите использовать уже занята!</span><br>";
                }
            } else {
                echo "<span style='color: red;'>*Не удалось установить соединение с базой данных!</span><br>";
            }
            $mysqliTest->close();



    } else {

        if (is_writable(dir . "/system/data")) { ?>
            <H3>Установка IWEB</H3>
            <form method="post" action="">
            <h5>Доступ к Iweb</h5>
            Имя пользователя: <input class="form-control form-control-sm" type="text" name="config[username]">
            <small class="form-text text-muted">Имя пользователя для доступа в панель</small>
            Пароль: <input class="form-control form-control-sm" type="text" name="config[password]">
            <small class="form-text text-muted">Пароль для доступа в панель</small>

            Доступ по IP: <select class="form-control form-control-sm" type="text" name="config[access]">
                <option value="true">Включить</option>
                <option value="false" selected>Выключить</option>
            </select>
            <small class="form-text text-muted">Можете включить доступ по IP, что бы полность защитить панель</small>

            Список IP: <input class="form-control form-control-sm" type="text" name="config[accessIP]">
            <small class="form-text text-muted">Можно указать как диапозон, пример: 192.168.0.0/24, так и обычный
                IP: 192.168.0.12. Несколько IP указывать через ;
            </small>

            <hr>
            <h5>Параметрый системы</h5>

            Адрес сайта: <input class="form-control form-control-sm" type="text" name="config[site_adr]"
                                value="<?php echo $url; ?>">
            <small class="form-text text-muted">Адрес определяется автоматически</small>

            Название: <input class="form-control form-control-sm" type="text" name="config[site_title]"
                             value="IWEB">

            Виджет чата: <select class="form-control form-control-sm" name="config[widgetChat]" id="">
                <option value="on">Показывать</option>
                <option value="off">Не показывать</option>
            </select>
            <small class="form-text text-muted">На всех страницах панели будет выводиться окошко с игровым чатом</small>

            Журнал действий: <select class="form-control form-control-sm" name="config[logActions]" id="">
                <option value="true">Включить</option>
                <option value="false">Выключить</option>
            </select>
            <small class="form-text text-muted">Вести журнал действий пользователей в панели управления</small>

            <hr>
            <h5>База даннах</h5>
            Адрес: <input class="form-control form-control-sm" type="text" name="config[db_host]" value="localhost">
            Имя пользователя: <input class="form-control form-control-sm" type="text" name="config[db_user]"
                                     value="root">
            Пароль: <input class="form-control form-control-sm" type="text" name="config[db_password]">
            Таблица: <input class="form-control form-control-sm" type="text" name="config[db_table]" value="iweb">
            Кодировка: <input class="form-control form-control-sm" type="text" name="config[db_charset]" value="utf8">

            <hr>
            <h5>Игровая почта</h5>
            Название письма: <input class="form-control form-control-sm" type="text" name="config[titleMail]"
                                    value="Подарок от GM">
            Текс письма: <input class="form-control form-control-sm" type="text" name="config[messageMail]"
                                value="Текст сообщения">

            <hr>
            <h5>Настройки сервера</h5>
            Версия сервера: <select class="form-control form-control-sm" name="config[version]">
                <!--                <option value="101">1.5.1(101)</option>-->
                <option value="145">1.5.3(145)</option>
            </select>
            Порт gamedbd: <input class="form-control form-control-sm" type="text" name="config[dbPort]" value="29400">
            Порт GDeliveryd: <input class="form-control form-control-sm" type="text" name="config[gdeliverydPort]"
                                    value="29100">
            Порт GProvider: <input class="form-control form-control-sm" type="text" name="config[GProviderPort]"
                                   value="29300">
            Порт glink: <input class="form-control form-control-sm" type="text" name="config[linkPort]" value="29000">
            <small class="form-text text-muted">Порт по которому проверяется статус севера на главной странице</small>

            Папка сервера: <input class="form-control form-control-sm" type="text" name="config[serverPath]"
                                  value="/home">

            Имя процесса Auth: <select class="form-control form-control-sm" type="text" name="config[serverTypeAuth]">
                <option value="auth">auth</option>
                <option value="authd">authd</option>
                <option value="gauthd">gauthd</option>
            </select>
            <small class="form-text text-muted">Укажите имя процесса для опредиления статуса(Включен\Выключен)
            </small>
            Файл чата сервера: <input class="form-control form-control-sm" type="text" name="config[chatFile]"
                                      value="/home/logs/world2.chat">
            <hr>
            <h5>Дуступ к серверу</h5>
            IP сервер: <input class="form-control form-control-sm" type="text" name="config[server_hostname]">
            IWEB порт: <input class="form-control form-control-sm" type="text" name="config[server_port]" value="20168">
            IWEB ключ: <input class="form-control form-control-sm" type="text" name="config[server_key]"
                              value="F65g36D56ge437fXH54gv56e4VE">
            <small class="form-text text-muted">Этот ключ будет требовать сервер IWEB`a, его нужно указать в конфиге
                сервера!
            </small>
            <br>
            <center><input class="btn btn-success col-sm-4" type="submit" name="save" value="Сохранить параметры">
            </center>
            <br>
        <?php } else { ?>
            <div style="padding: 20px">
                <div class="alert alert-warning" role="alert">
                    <b>Доступ к записи запрещен</b>
                    <p>Установите права <b>777</b> для записи на папку <?php echo dir . "/system/data" ?></p>
                </div>
            </div>
        <?php } ?>
        </form>

        <?php
    } ?>
</div>
<script href="<?php echo $url; ?>/system/template/js/bootstrap.min.js"></script>

</body>
</html>
