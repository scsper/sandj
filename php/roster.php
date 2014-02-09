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

    public function count_attendence() {
        $NO = 0;
        $YES = 1;
        $NO_ANSWER = 2;
        $NO_NAME = 3;

        $totalYes = 0;
        $totalNo = 0;
        $totalUnknown = 0;

        for($i = 0; $i < count($this->guests); $i++) {
            $rsvp = $this->guests[$i]->get_rsvp();
            if($rsvp == $NO) {
                $totalNo++;
            } else if ($rsvp == $YES) {
                $totalYes++;
            } else {
                $totalUnknown++;
            }
        }


        echo "<p>Yes: " . $totalYes . "</p>";
        echo "<p>No: " . $totalNo . "</p>";
        echo "<p>Unknown: " . $totalUnknown . "</p>";
        echo "<p>Total: " . count($this->guests) . "</p>";
        echo "<p>-----------------------------</p>";

    }

    public function count_food() {
        $NOT_SELECTED = 4;
        $BEEF = 0;
        $CHICKEN = 1;
        $FISH = 2;
        $VEGETARIAN = 3;

        $totalBeef = 0;
        $totalChicken = 0;
        $totalFish = 0;
        $totalVegetarian = 0;
        $totalUnknown = 0;
        $totalDeclined = 0;

        for($i = 0; $i < count($this->guests); $i++) {
            $food = $this->guests[$i]->get_food();
            $rsvp = $this->guests[$i]->get_rsvp();

            if($rsvp == 0) {
                $totalDeclined++;
                continue;
            }

            if($food == $BEEF) {
                $totalBeef++;
            } else if ($food == $CHICKEN) {
                $totalChicken++;
            } else if ($food == $FISH) {
                $totalFish++;
            } else if ($food == $VEGETARIAN) {
                $totalVegetarian++;
            } else {
                $totalUnknown++;
            }
        }

        echo "<p>Beef: " . $totalBeef . "</p>";
        echo "<p>Chicken: " . $totalChicken . "</p>";
        echo "<p>Fish: " . $totalFish . "</p>";
        echo "<p>Veggie: " . $totalVegetarian . "</p>";
        echo "<p>Unknown: " . $totalUnknown . "</p>";
        echo "<p>Declined: " . $totalDeclined . "</p>";
        echo "<p>Total: " . count($this->guests) . "</p>";
        echo "<p>-----------------------------</p>";
    }
}

$roster = new Roster();
$roster->retrieve();
$roster->count_attendence();
$roster->count_food();
$roster->display_guests();

?>