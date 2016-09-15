
		<?php
			$db = new SQLite3("links");
			$stmt = $db->prepare('SELECT * from doglinks;');
			$array = $stmt->execute();
			$key = "-1";
			$dog = "-1";
			if(!(is_null($array))){
				while ($result = $array -> fetchArray()){
					$key = $result['md'];
					$dog = $result['dog'];
				}
			}
			if($key != "-1" && $key === $_GET['key']){
				shell_exec('pdflatex dog.tex');
				$file = 'dog.pdf';
				$stmt = $db -> prepare('DELETE from dogLinks where dog=:d;');
				$stmt -> bindValue(':d', $dog);
				$stmt -> execute();
				if (file_exists($file)) {
					header('Content-Description: File Transfer');
					header('Content-Type: application/octet-stream');
					header('Content-Disposition: attachment; filename='.basename($file));
					header('Expires: 0');
					header('Cache-Control: must-revalidate');
					header('Pragma: public');
					header('Content-Length: ' . filesize($file));
					readfile($file);
					exit;
				}
			}
			else if($key === "-1"){
				echo "<p>You have already accessed this pdf, sorry!</p>";
			}
		?>