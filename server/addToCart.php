<?php
$price = $_GET['price'];
$name = $_GET['name'];

$name = $name.'%';

setcookie($name, $price, time() + (86400 * 30), "/");

header("Location: ../index.php?added=1");

 ?>
