<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

// Database connection
$host = "localhost";
$username = "root"; // Change if needed
$password = ""; // Change if needed
$database = "DMART";

$conn = new mysqli($host, $username, $password, $database);

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["signup"])) 
{
    $u_name = $_POST["name"];
    $u_mail=$_POST['email'];
    $password = $_POST["pwd"];
    $flag=FALSE;
    $sql = "SELECT email FROM logged";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) 
    {
        $m=$row["email"];
        if ($u_mail==$m)
        {
            echo '<script type="text/javascript"> alert("User with this mail already exists !")
            window.location.href = "index.html";</script>';
            $flag=TRUE;
            break;
        }
    } 
    if ($flag==FALSE)
    {
        echo '<script> console.log("Reached") </script>' ;
        $stmt = $conn->prepare("INSERT INTO logged (Username,email, Password) VALUES (?,?,?)");
        // Insert data using prepared statement
        
        $stmt->bind_param("sss",$u_name,$u_mail, $password);
        if ($stmt->execute()) 
        {
            echo '<script type="text/javascript">
            alert("Registration successful! Data saved to database.");
            window.location.href = "index.html"; // Redirect back to form
            </script>';
        } else 
        {
            echo '<p style="color:red;">Error: " . $stmt->error . "</p>';
        }
        $stmt->close();
    }

}
if ($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["login"]))
{
   
    $u_mail=$_POST['email'];
    $password = $_POST["pwd"];
    $flag=FALSE;
    $sql = "SELECT email, Password FROM logged where email='$u_mail' and Password='$password'";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) 
    {
        $m=$row["email"];
        $p=$row["Password"];
        if ($u_mail==$m && $password==$p)
        {
            echo '<script type="text/javascript"> alert("Logged In"); window.location.href="index.html"</script>';

            $flag=TRUE;
            $_SESSION["mail"] = $u_mail;
            $_SESSION["pd"] = $password;
            break;
        } 
    }
    if ($flag==FALSE)
    {
        echo '<script type="text/javascript"> alert("Invalid Credentials"); window.location.href="index.html"</script>';

    }
}
$conn->close();

