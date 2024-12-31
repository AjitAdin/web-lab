<!DOCTYPE html>
<html>
<head>
    <title>STUDENT SORTED RECORDS</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "STUDENTDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch data from the STUDENT table before sorting
// $sql = "SELECT * FROM STUDENT";
$sql = "SELECT * FROM STUDENT ORDER BY RAND()"; // Randomize results for BEFORE SORTING

$result = mysqli_query($conn, $sql);
echo "<br>";
echo "<center><h1>BEFORE SORTING</h1></center>";
echo "<table border='1' align='center'>";
echo "<tr>";
echo "<th>USN</th><th>NAME</th><th>CITY</th></tr>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row["USN"] . "</td>";
        echo "<td>" . $row["NAME"] . "</td>";
        echo "<td>" . $row["CITY"] . "</td></tr>";
    }
} else {
    echo "<tr>";
    echo "<td colspan='3'>Table Is Empty</td>";
    echo "</tr>";
}
echo "</table>";

// Fetch data from the STUDENT table after sorting by USN
$sql = "SELECT * FROM STUDENT ORDER BY USN";
$result = mysqli_query($conn, $sql);
echo "<br>";
echo "<center><h1>AFTER SORTING</h1></center>";
echo "<table border='1' align='center'>";
echo "<tr>";
echo "<th>USN</th><th>NAME</th><th>CITY</th></tr>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row["USN"] . "</td>";
        echo "<td>" . $row["NAME"] . "</td>";
        echo "<td>" . $row["CITY"] . "</td></tr>";
    }
} else {
    echo "<tr>";
    echo "<td colspan='3'>Table Is Empty</td>";
    echo "</tr>";
}
echo "</table>";

// Close connection
mysqli_close($conn);
?>
</body>
</html>