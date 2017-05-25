<?php
require 'database.php';
session_start();

if(isset($_GET['card'])){
    $card = $_GET['card'];
    $email = $_SESSION['email'];

    $database = new database();
    $id = $database->addorder($email,$card);

    foreach($_COOKIE as $key => $value){
      if(strpos($key,'%') !== false){
        $temp = $database->addorderbook($id,$key);
      }
    }

    if($id){
      echo $id;
    }
}
