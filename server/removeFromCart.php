<?php
if(isset($_GET['name'])){
  $name = $_GET['name'];
  setcookie($name, "value", 1,"/");
  echo "1";
}
