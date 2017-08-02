<?php
session_start();
if (!isset($_SESSION['userid'])) {
	header("Location: login.php");
}
?>
<!doctype html>
<html lang="en">
  <head>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    <meta charset="utf-8">   
     
    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
    <link rel="stylesheet" href="css/styles.css">

    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.min.js"></script>    
    
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>

    <!-- Angular Material Library -->
    <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>

    <script src="js/angular-credit-cards.js"></script>
    <script src="js/app/blackGoose.module.js"></script>
    <script src="js/app/blackGoose.config.js"></script>
    <script src="js/app/product.service.js"></script>
    <script src="js/app/cart.service.js"></script>
    <script src="js/app/header.component.js"></script>
    <script src="js/app/sidebar.component.js"></script>
    <script src="js/app/product.component.js"></script>
    <script src="js/app/foodList.component.js"></script>
    <script src="js/app/cart.component.js"></script>
    <script src="js/app/validate.component.js"></script>
    <script src="js/app/orderSuccess.component.js"></script>

  </head>
  <body ng-app="blackGoose" ng-cloak>
    <div id="wrapper">
      <header id="header"></header>
      
      <div id="content" layout="row" layout-margin layout-align="center">
        <sidebar flex="nogrow" layout="column" layout-margin></sidebar>
        <div ng-view flex="grow" layout="row"></div>
      </div>  
      <footer>
        <span>&copy copyrights @ Black Goose Bistro</span>
      </footer>
    </div>      
    <script>
      localStorage.clear()
    </script>
  </body>
</html>
