<!DOCTYPE html>
<html>
	<head>
		<title>Final Project</title>
		<link rel="stylesheet" type="text/css" href="Final_Project.css">
	</head>
	<body background= "GoldenBG.gif">
		<?php
			$orderName = $_POST["nam"];
			$orderType = $_POST["type"];
			$orderDate = $_POST["day"];
			$db = new SQLite3('final');
			if($orderType==="view"){
				echo "<h2>Orders under the name ".$orderName." for ".$orderDate."</h2>";
				$st=$db->prepare('SELECT * from orders where ordername=:od');
				$st->bindValue(':od',$orderName);
				$array = $st->execute();
				while ($result = $array -> fetchArray()){
					if($result['ordername']===$orderName && $result['d']===$orderDate){
						echo "<b>Name: </b>".$result['name'].", <b>Order: </b>".$result['specs']."<br>";
					}
				}

			}
			elseif ($orderType==="place") {
				header('Location: https://www.tjhsst.edu/~2016djain/Final_Form.html');
			}
		?><br>
	</body>
</html>