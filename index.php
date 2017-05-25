<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  
  
  <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Open+Sans:600'>

      <link rel="stylesheet" href="css/login.css">

  
</head>

<body>
  <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Register</label>
		<div class="login-form">
			<Form method="POST" action="server/login.php">
				<div class="sign-in-htm">
					<div class="group">
						<label for="user" class="label">Email</label>
						<input id="user" name="email" type="email" class="input">
					</div>
					<div class="group">
						<label for="pass" class="label">Password</label>
						<input id="pass" name="password" type="password" class="input" data-type="password">
					</div>
					<!--<div class="group">
						<input id="check" type="checkbox" class="check" checked>
						<label for="check"><span class="icon"></span> Keep me Signed in</label>
					</div>-->
					<div class="group">
						<input type="submit" name="login" class="button" value="Sign In">
					</div>
					<div class="hr"></div>
					<div class="foot-lnk">
						<?php
							if(isset($_GET['loginerr'])){
								echo "<span>User name and password do not match !!!</span>";
							}else if(isset($_GET["errdatabase"])){
								echo "<span>Database busy please try after sometime !!!</span>";
							}else if($_GET["errpw"]){
								echo "<span>Password do not match please try again !!!</span>";
							}
						?>
					</div>
				</div>
			</Form>			
			<Form method="POST" action="server/register.php">
				<div class="sign-up-htm">
					<div class="group">
						<label for="user" class="label">Username</label>
						<input id="user" name="username" type="text" class="input">
					</div>
					<div class="group">
						<label for="pass" class="label">Password</label>
						<input id="pass" name="password" type="password" class="input" data-type="password">
					</div>
					<div class="group">
						<label for="pass" class="label">Repeat Password</label>
						<input id="pass" name="password2" type="password" class="input" data-type="password">
					</div>
					<div class="group">
						<label for="pass" class="label">Email Address</label>
						<input id="pass" name="email" type="email" class="input">
					</div>
					<div class="group">
						<input type="submit" name="register" class="button" value="Register">
					</div>
					<div class="hr"></div>
					<div class="foot-lnk">
						<a href="tab-1"><label for="tab-1">Already Member?</label></a>
					</div>
				</div>
			</Form>
		
		</div>
	</div>
</div>
  
  
</body>
</html>
