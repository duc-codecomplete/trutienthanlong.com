<?php

$DBHost = "localhost";  // localhost or your IP
$DBUser = "root";  // Логин базы
$DBPassword = "123456";  // Пароль базы
$DBName = "pw";  // Имя базы
$gold = "99999900"; //количество серебра

$Link = MySQL_Connect($DBHost, $DBUser, $DBPassword) or die ("Can't connect to MySQL");
MySQL_Select_Db($DBName, $Link) or die ("Database ".$DBName." do not exists.");

$mysqlresult=MySQL_Query("select * from `point` where `zoneid`=1");
$myrow=mysql_fetch_array($mysqlresult);
do
{
$account=$myrow['uid'];
MySQL_Query("call usecash($account,1,0,1,0,$gold,1,@[USER=11152]Error[/USER])") or die ("usecash failed!");
}
while($myrow=mysql_fetch_array($mysqlresult));

?>