<?php

require 'connect.php';

class Guest {
    private $name;
    private $status;
    private $familyId;
    private $code;
    private $foodId;

    public function __construct() {
        // default constructor because you can't have multiple constructors in php
        // instead, each invoker of the class will have to call some sort of member function
    }

    public function display() {
        echo $this->name;
        echo $this->rsvp;
        echo $this->familyId;
        echo $this->foodId;
        echo '<br/>';
    }

    public function set_all($firstName, $lastName, $familyId, $rsvp, $code) {
        $this->name = $firstName . " " . $lastName;
        $this->rsvp = $rsvp;
        $this->code = $code;
        $this->familyId = $familyId;
        $this->foodId = null;
    }

    public function retrieve($id) {
        $sql = sprintf("SELECT * FROM guest WHERE id=%d", mysql_real_escape_string($id));
        $result = mysql_query($sql);

        if (!$result) {
            die('Guest->retrieve(): Invalid query: ' . mysql_error());
        }

        while ($guest = mysql_fetch_assoc($result)) {
            $this->name = $guest['name'];
            $this->rsvp = $guest['rsvp_id'];
            $this->familyId = $guest['family_id'];
            $this->foodId = $guest['food_id'];
        }
    }

    public function add() {
        $sql = "INSERT INTO guest (name, rsvp_id, food_id, family_id, code) VALUES (\"" . $this->name . "\", " . $this->rsvp . ", 4, " . $this->familyId . ", \"" . $this->code . "\")";
        $result = mysql_query($sql);

        if (!$result) {
            die('Guest->add(): Invalid query: ' . mysql_error());
        }
    }
}

?>