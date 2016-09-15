<!DOCTYPE html>
<html>
	<head>
		<title>Lab 09</title>
		<meta charset="utf-8">
	    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="Lab_09_Stylesheet.css">
	</head>
	<body>
		<?php
			$dog=$_POST["dogs"];
			$date = date("m/d/Y h:i:s a").$dog;
			$key=md5($date);
			$str = file_get_contents('start.tex');
			$change = str_replace('dog', $dog, $str);
			file_put_contents('dog.tex', $change);			
			$webaddress = "download_helper.php?key=$key";
			echo "<a href = ".$webaddress.">Download your PDF here!</a><br>";
			$db = new SQLite3("links");
			$stmt = $db -> prepare('INSERT OR REPLACE INTO doglinks (dog, md) VALUES (:dog, :md);');
			$stmt->bindValue(':dog', $dog);
			$stmt->bindValue(':md', $key);
			$stmt->execute();
		?><br>
	</body>
</html>