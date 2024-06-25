<?
include("packet_class.php");
$MysqlConnect = array(
	"host" => "127.0.0.1",		//Хост мускуль базы
	"user" => "root",			//Юзер мускуль базы
	"pass" => "password",		//Пароль мускуль базы
	"base" => "pw"				//База pw
);

mysql_connect($MysqlConnect['host'], $MysqlConnect['user'], $MysqlConnect['pass']) or die(mysql_error());
mysql_select_db($MysqlConnect['base']) or die(mysql_error());
mysql_set_charset("UTF-8");

$Query = mysql_query("SELECT ID from users WHERE ID=32");
		while ($Acc = mysql_fetch_array($Query)) {
			$DBGetConsumeInfos = new WritePacket();
				$DBGetConsumeInfos->WriteUInt32(0x80000000);
				$DBGetConsumeInfos->WriteUInt32($Acc[ID]);
				$DBGetConsumeInfos->WriteUInt32(0);
				$DBGetConsumeInfos->WriteUInt32(0);
				$DBGetConsumeInfos->Pack(3002);
			 
				if (!$DBGetConsumeInfos -> Send("localhost", 29400))
					return -1;
				
				//echo bin2hex($DBGetConsumeInfos->response)."<br><br>";
				
				
			$DBGetConsumeInfos_Re = new ReadPacket($DBGetConsumeInfos);
				$DBGetConsumeInfos_Re -> ReadPacketInfo();
				$DBGetConsumeInfos_Re -> ReadUInt32(); 
				$ret = $DBGetConsumeInfos_Re -> ReadUInt32();
				if($ret != 0) 
				{
					echo "Error code:".$ret."<br>";
					continue;
				}

				$DBGetConsumeInfos_Re -> ReadUInt32();			//role id
				(1 - $DBGetConsumeInfos_Re -> ReadUInt32());	//char count or number
				$DBGetConsumeInfos_Re -> ReadUInt32();			//cash - it's a trap
				$DBGetConsumeInfos_Re -> ReadUInt32();			//money

			$AddCash = $DBGetConsumeInfos_Re -> ReadUInt32() + $DBGetConsumeInfos_Re -> ReadUInt32(); 
			$UsedCash = $DBGetConsumeInfos_Re -> ReadUInt32() + $DBGetConsumeInfos_Re -> ReadUInt32(); 
			$CurrentCash = $AddCash - $UsedCash;

				$DebugAddCash = new WritePacket();
				$DebugAddCash -> WriteUInt32($Acc[ID]);
				$DebugAddCash -> WriteUInt32(-$CurrentCash);	//paranioc coding activated
				$DebugAddCash -> Pack(0x209);

				if (!$DebugAddCash -> Send("localhost", 29400, false))
					return;
			echo $Acc[ID]." - ok<br>";
	}
?>