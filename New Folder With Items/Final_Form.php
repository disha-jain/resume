<!DOCTYPE html>
<html>
	<head>
		<title>Final Project</title>
		<link rel="stylesheet" type="text/css" href="Final_Project.css">
	</head>
	<body background= "GoldenBG.gif">
		<?php
			$orderName = $_POST["oname"];
			$yourName = $_POST["yname"];
			$order = $_POST["order"];
			$orderDate = $_POST["day"];
			$db = new SQLite3('final');
			$st=$db->prepare('INSERT into orders (ordername, name, specs, d, t) values (:od, :yn, :o, :d, :t);');
			$st->bindValue(':od',$orderName);
			$st->bindValue(':yn',$yourName);
			$st->bindValue(':o',$order);
			$st->bindValue(':d',$orderDate);
			$st->bindValue(':t',date("l, m/d/y h:i:sa"));
			$st->execute();
			echo "Order placed!<br>You, ".$yourName.", ordered ".$order.", as a part of ".$orderName."'s order for ".$orderDate;
		?><br>
	</body>
</html>