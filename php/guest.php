<?php

require 'connect.php';

class Guest {
    private $name;
    private $status;
    private $familyId;
    private $code;

    public function __construct($firstName, $lastName, $familyId, $rsvp) {
        $this->name = $firstName . " " . $lastName;
        $this->rsvp = $rsvp;
        $this->familyId = $familyId;
    }

    public function display() {
        echo $this->firstName;
        echo $this->lastName;
        echo $this->rsvp;
        echo $this->familyId;
        echo $this->code;
        echo '<br/>';
    }

    public function set_code($code) {
        $this->code = $code;
    }

    public function add() {
        $sql = "INSERT INTO guest (name, rsvp_id, food_id, family_id, code) VALUES (\"" . $this->name . "\", " . $this->rsvp . ", 4, " . $this->familyId . ", \"" . $this->code . "\")";
        $result = mysql_query($sql);

        if (!$result) {
            die('Invalid query: ' . mysql_error());
        }
    }
}

?>