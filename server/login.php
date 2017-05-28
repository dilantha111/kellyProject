<?php
require 'database.php';

session_start();

if (isset($_POST['login'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $password = md5($password); // encrypting the password
  $database = new database();
  $result = $database->login($email,$password);

  if ($result) {
    $_SESSION['userid'] = $result["userid"];
    $_SESSION['username'] = $result["username"];
    $_SESSION['email'] = $result["email"];
    header("Location: ../index.php");
  } else {
    header("Location: ../login.php?loginerr=1");
  }

}
