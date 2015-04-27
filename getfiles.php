<?php

$dir = "files";

$result = [];

$files = scandir($dir);

foreach($files as $file){
	$result[] = "$dir/$file";
}

$resultJson = json_encode($result);

echo ($resultJson);