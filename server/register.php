<?php
session_start();
require 'database.php';

if(isset($_POST['register'])){
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $passwordcon = $_POST['password2'];

  if ($password != $passwordcon) {
    header("Location: ../index.php?errpw=1");
  }else{
    $password = md5($password); // encrypting the password
    $database = new database();
    $userid = $database->registerUser($username,$email,$password);

    if($userid){
      $_SESSION['userid'] = $userid;
      $_SESSION['username'] = $username;
      $_SESSION['email'] = $email;
      header("Location: ../home.php");
    }else{
      header("Location: ../index.php?errdatabase=1");
    }
  }

}


 ?>
