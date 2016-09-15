<?php
	echo "GET value named ONE = " . $_GET["one"];

	$file = file_get_contents("enable1.txt");

	//echo $file;

	$subject = "abcdefabcdefg";
	$pattern = '/def./';
	preg_match_all($pattern, $file, $matches);
?>