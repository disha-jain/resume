<!DOCTYPE html>
<html>
	<head>
		<title>Lab 07</title>
		<meta charset="utf-8">
	    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="Lab_06_Stylesheet.css">
	</head>
	<body>
		<?php
			$file = file_get_contents("Lab_07.txt");
			$arr;
			$date = date("m/d/Y");
			$time = date( "h:i:s a");
			$num;
			$last;
			if (strlen($file)==0) {
				$num = 1;
			echo "Welcome! You are visitor number <b>1</b>. This page has never been visited before.<br>";
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
		?><br>
	</body>
</html>