<?php
//Powered by Virtus && Bel [NextGen.Dev]

$config = array //Данные для подключения
(
        'host'    =>    'localhost', //Адрес хостинга
        'user'    =>    'root', // MySQL Login
        'pass'    =>    'passwd', //MySQL Password
        'name'    =>    'pw', //MySQL DataBase
        'link'        =>    '127.0.0.1', //Glinkd IP
        'port'        =>    '29000', //Glinkd Port
);

$command = array //Комманды для работы с MySQL
(
        "SELECT count(*) FROM point WHERE zoneid='1'",
        "SELECT * FROM users"
);
	
    $link = mysqli_connect($config['host'], $config['user'], $config['pass']); //Подключаем скрипт к MySQL
	
    mysqli_select_db($link, $config['name']); //Выбираем базу в MySQL
			
            $fp = fsockopen($config['link'], $config['port'], $err, $err, 1); //Инициируем подключение к glinkd
	
    if(!$fp) //Проверяем если glinkd Онлайн
        $servstatus = '<font color="red">Offline.</font>';
    else
        $servstatus = '<font color="green">Online.</font>';
		
	
    $online = mysqli_query($link, $command[0]);
    $on = mysqli_fetch_row($online);					//Запрашиваем количество онлайна из MySQL 
    $on[0] = $on[0];
	
    $Query = mysqli_query($link, $command[1]);			// Запрашиваем количество зарегестрированных аккаунтов
    $acc_count = mysqli_num_rows($Query);

echo <<<html
<center>
<b>Сервер: $servstatus<br/>
Кол-во в сети: $on[0]<br/>
Аккаунтов на сервере: $acc_count<br/>
html;
mysqli_close();
?>