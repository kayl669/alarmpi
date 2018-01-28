<?php
header("Access-Control-Allow-Origin: *");

$apiPage = file_get_contents("http://www.lunopia.com/api");
preg_match('/apiKeyField"\s+value="([^"]+?)"/', $apiPage, $matches, PREG_OFFSET_CAPTURE, 3);

$key = $matches[1][0];
echo file_get_contents("http://www.lunopia.com/call?what=events&timeZone=Europe%2FParis&which=current&key=$key");
?>
