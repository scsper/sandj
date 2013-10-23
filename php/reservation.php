<?php
    include 'connect.php';
    $query = "SELECT * FROM user";
    $result = mysql_query($query);


    if ($result) {
        while($row = mysql_fetch_array($result)) {
            $first_name = $row["first_name"];
            $last_name = $row["last_name"];
            $rsvp = $row["rsvp"];
            $confirmation = $row["confirmation"];

            echo "Name: $first_name $last_name<br>";
            echo "Code: $confirmation<br>";
            echo "RSVP: $rsvp<br>";

        }
    }

?>