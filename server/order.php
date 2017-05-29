<?php
require 'database.php';
session_start();

$data = $_GET["data"];
$data = json_decode($data);

$email = $_SESSION['email'];
$card = $data->cardNo;
$totalPrice = $data->totalPrice;
$details = json_encode($data->details); 

$database = new database();

echo $database->addOrder($email,$card,$totalPrice,$details);