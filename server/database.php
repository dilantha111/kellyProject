<?php
class database{
  private $servername = "localhost";
  private $username = "root";
  private $password = "";
  private $database = "blackgoosebistro";

  private function connect(){
    return new mysqli($this->servername,$this->username,$this->password,$this->database);
  }

  public function registerUser($username,$email,$password){
    $conn = self::connect();
    if($conn->connect_error){
      return FALSE;
    }else{
      $query = "insert into users(username,email,password) values('$username','$email','$password')";
      if($conn->query($query)){
        return $conn->insert_id;
      }else{
        return FALSE;
      }
    }
  }

  public function addorder($email,$card){
    $conn = self::connect();
    if($conn->connect_error){
      return FALSE;
    }else{
      $query = "insert into orders(email,card) values('$email','$card')";
      if($conn->query($query)){
        return $conn->insert_id;
      }else{
        return FALSE;
      }
    }
  }

  public function addorderbook($id,$name){
    $conn = self::connect();
    if($conn->connect_error){
      return FALSE;
    }else{
      $query = "insert into orderbooks(orderid,bookname) values('$id','$name')";
      if($conn->query($query)){
        return $conn->insert_id;
      }else{
        return FALSE;
      }
    }
  }

  public function login($email,$password){
    $conn = self::connect();
    if ($conn->connect_error) {
      return FALSE;
    }else{
      $query = "select * from users where email='$email' and password='$password'";
      $result = $conn->query($query);

      if($result->num_rows > 0){
        $data = array();
        $row = $result->fetch_assoc();
        $data['userid'] = $row["id"];
        $data['username'] = $row["username"];
        $data['email'] = $row["email"];
        return $data;
      }else{
        return FALSE;
      }
    }

  }

  public function getProducts($cat){
    $conn = self::connect();
    if($conn->connect_error){
      return FALSE;
    }else{
      $query = "select * from foods where category='$cat'";
      $result = $conn->query($query);
      return $result;
    }
  }


}
