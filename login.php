<!DOCTYPE html>
<html>
<head>
    <title>LOGIN</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <center>
        <div id="main">
            <h1>SIMPLE LOGIN</h1>
            <form method="POST">
                <input type="text" name="user_name" class="text" autocomplete="off" 
                required placeholder="username"><br>
                <hr><br>
                <input type="password" name="password" class="text" 
                required placeholder="password"><br>
                <hr><br>
                <input type="Submit" name="submit" id="sub">
                <div class="new">
                <h2><a href="signup.php">New user?</a></h2></div>
            </form>
        </div>
    </center>
</body>
</html>
<?php
include 'db.php';
 if (isset($_POST['submit'])) {
    $un = $_POST['user_name'];  
    $password = md5($_POST['password']);  
        $query= "select *from user where user_name = '$un' and password='$password'";
        $result = mysqli_query($con, $query); 
      if(mysqli_num_rows($result)>0){
          while($row = mysqli_fetch_array($result)){
            header ('location:index.html');}}}
    // else{
    //         echo("<script>alert('Invalid username/password')</script>"); }
?>