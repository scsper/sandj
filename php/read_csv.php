<?php

function readCSV() {
    $row = 1;
    $filename = "../assets/guestlist.csv";

    if (($handle = fopen($filename, "r")) !== FALSE) {
        while (($data = fgetcsv($handle)) !== FALSE) {
            $num = count($data);
            echo "<p> $num fields in line $row: <br /></p>\n";
            $row++;
            for ($c=0; $c < $num; $c++) {
                echo $data[$c] . "<br />\n";
            }
        }
        fclose($handle);
    }
}

readCSV();

?>