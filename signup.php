<!DOCTYPE html>
<html>
<head>
    <title>REGISTRATION</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <center>
        <div id="main">
            <h1>REGISTRATION</h1>
            <form method="POST">
                <input type="text" name="user_name" class="text" autocomplete="off" 
                required placeholder="New username"><br>
                <hr><br>
                <input type="password" name="password" class="text" 
                required placeholder="New password"><br>
                <hr><br>
                <input type="Submit" name="submit" id="sub">
            </form>
        </div>
    </center>
</body>
</html>
<?php
include 'db.php';
if(isset($_POST['submit'])){
$user_name=mysqli_real_escape_string($con,$_POST['user_name']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$query="insert into user(user_name,password)values('".$user_name."','".md5($password)."')";
$result=mysqli_query($con,$query);
if($result){
header ('location:login.php');
//   echo "<script>alert('Signup successfully, Login Now');</script>";
}
else{
     echo "Failed to Signup". mysqli_error($con);
}}
?>
