<!DOCTYPE html>
<html>
	<head>
		<title>Lab 08</title>
		<meta charset="utf-8">
	    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="Lab_06_Stylesheet.css">
	</head>
	<body>
		<h1>Lab 08: Visit Information with Databases</h1>
		<?php
			$date = date("m/d/Y");
			$time = date( "h:i:s a");
			$date = $date;
			$db = new SQLite3('visits');
			$ip = "";
			if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    			$ip = $_SERVER['HTTP_CLIENT_IP'];
			} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
			} else {
    			$ip = $_SERVER['REMOTE_ADDR'];
    		}
			
			$st = $db->prepare('INSERT OR REPLACE INTO visit (date, time, num, ip) VALUES (:dat,:tim, COALESCE ( (SELECT num FROM visit WHERE ip = :i) + 1, 1), :i);');
			$st->bindValue(':dat',$date);
			$st->bindValue(':tim',$time);
			$st->bindValue(':i',$ip);
			$st->execute();
			$stmt = $db->prepare('SELECT * from visit;');
			$result = $stmt->execute();
			while ($row = $result->fetchArray())
			{
    			echo "<b>".$row['ip']."</b><br>Last visited on ".$row['date']." at ".$row['time']."<br>Has visited ".$row['num']." time(s)<br><br>";
			}

/*				INSERT INTO subjects VALUES ("science");
				INSERT INTO subjects VALUES ("art");

			$num;
			$last;
			if (strlen($file)==0) {
				$num = 1;
			}
			else{
				$arr = json_decode($file, true);
				$num = $arr['times'];
				$last = $arr['last'];
				$lastt = $arr['time'];
				$num++;
				echo "Welcome! You are vistor number <b>".$num.".</b> The last time this page was visited was on <b>".$last."</b> at <b>".$lastt."."."</b>";
			}
			$arr = array('times' => $num, 'last' => $date, 'time' => $time);
			file_put_contents("Lab_07.txt", json_encode($arr, true));
			echo "Welcome! You are visitor number <b>1</b>. This page has never been visited before.<br>";
*/		?><br>
	</body>
</html>