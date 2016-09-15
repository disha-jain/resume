<!DOCTYPE html>
<head>
	<title></title>
</head>
<body>
	<?php
		$db = new SQLite3("foo");
		$stmt = $db->prepare("SELECT * FROM tabl;");
		$result = $stmt->execute();
		while ($row = $result->fetchArray()) {
			print_r($row).PHP_EOL;
			echo $row['f1'].PHP_EOL;
		}
	?>
</body>