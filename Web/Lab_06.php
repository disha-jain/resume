<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript" src="./Lab_06.js"></script>
	    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="Lab_06_Stylesheet.css"/>
		<title>Lab 06</title>
	</head>
	<body>
		<?php
			$first = $_POST["first"];
			$last = $_POST["last"];
			$number = $_POST["number"];
			$between = (int)$_POST["number"] - 2;
			$contains = $_POST["contains"];
			echo "<b>Your condtions were:</b><br>";
			print('First Letter: '.$first);
			echo "<br>";
			print('Last Letter: '.$last);
			echo "<br>";
			print('Number of letters: '.$number);
			echo "<br>";
			print('Contains these letters: '.$contains);
			echo "<br><br>";
			$file = file_get_contents("enable1.txt");
			$pattern = '/\b'.$first.'(?=.*['.$contains.']).{'.$between.'}'.$last.'\b/';
			preg_match_all($pattern, $file, $matches);
			if(sizeof($matches[0]) <= 25) {
				echo "<b>The results are:</b><br>";
				foreach ($matches[0] as $value) {
					echo $value."<br>";
				}
			}
			elseif (sizeof($matches[0] > 25)) {
			echo "<b>The first 25 results are:</b><br>";
			for ($i=0; $i < 25; $i++) { 
					echo $matches[0][$i]."<br>";
				}
			}
		?><br>
	</body>
</html>