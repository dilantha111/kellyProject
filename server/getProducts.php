<?php
require 'database.php';

function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}

$database = new database();
$data = array();
$result = $database->getProducts(implode(' ',explode('_',$_GET['cat'])));
$i = 0;
while($row = $result->fetch_assoc()){
    $data[] = $row;
}
$myObj = json_encode(utf8ize($data));
echo $myObj;