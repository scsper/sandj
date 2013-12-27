<?php

require 'guest.php';
require 'connect.php';

function get_guests() {
    $row = 1;
    $filename = "../assets/guestlist.csv";
    $guests = array();

    if (($handle = fopen($filename, "r")) !== FALSE) {
        while (($data = fgetcsv($handle)) !== FALSE) {
            $num = count($data);
            // echo "<p> $num fields in line $row: <br /></p>\n";
            $row++;

            $guest = new Guest($data[0], $data[1], $data[2], $data[3]);
            $guest->set_code(get_unique_code());
            array_push($guests, $guest);
        }
        fclose($handle);
    }

    return $guests;
}

function get_unique_code() {
    $code = md5(uniqid(rand(), true));
    $code = substr($code, -6);
    return $code;
}

/* Uncomment lines to add guests back into the database */

// function add_to_db($guests) {
//     for($i = 0; $i < count($guests); $i++) {
//         $guests[$i]->add();
//     }
// }

// $guests = get_guests();
// add_to_db($guests);
// echo 'guests added to db';

?>