<?php

require 'guest.php';


class Roster {
    public function __construct() {
        $this->guests = array();
    }

    public function display_guests() {
        echo '<table class="pure-table-striped pure-table pure-table-horizontal">';
        echo '<tr>';
        echo '<th>Name</th>';
        echo '<th>Code</th>';
        echo '<th>Food</th>';
        echo '<th>Status</th>';
        echo '</tr>';


        for($i = 0; $i < count($this->guests); $i++) {
            echo $this->guests[$i]->display_update();
        }


        echo "</table>";
    }

    public function retrieve() {
        $sql = "SELECT * FROM guest";
        $result = mysql_query($sql);

        if (!$result) {
            die('Guest->update(): Invalid query: ' . mysql_error());
        }

         while ($row = mysql_fetch_assoc($result)) {
            $id = $row['id'];
            $guest = new Guest();
            $guest->retrieve($id);
            array_push($this->guests, $guest);
        }
    }
}

$roster = new Roster();
$roster->retrieve();
$roster->display_guests();

?>