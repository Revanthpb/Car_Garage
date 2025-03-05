<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Default username for XAMPP/WAMP/MAMP
$password = ""; // Default password is empty
$dbname = "car_garage";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$service = $_POST['service'];
$date = $_POST['date'];
$time = $_POST['time'];

// Insert data into the database
$sql = "INSERT INTO bookings (name, email, phone, service, date, time)
        VALUES ('$name', '$email', '$phone', '$service', '$date', '$time')";

if ($conn->query($sql) === TRUE) {
    header("Location: success.html");
} else {
    header("Location: error.html");
}

// Close connection
$conn->close();
?>