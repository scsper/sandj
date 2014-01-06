<?php

require 'connect.php';

class Guest {
    private $name;
    private $status;
    private $familyId;
    private $code;
    private $foodId;
    private $id;

    public function __construct() {
        // default constructor because you can't have multiple constructors in php
        // instead, each invoker of the class will have to call some sort of member function
    }

    public function display() {
        $html = '
        <label style="color: black;">' . $this->name . '</label>
        <select name="rsvp[]">
          <option value = "0">Are you coming?</option>
          <option value = "1">Yes</option>
          <option value = "2">No</option>
        </select>

        <select name="food[]">
          <option value = "0">What are you eating?</option>
          <option value = "1">Chicken</option>
          <option value = "2">Fish</option>
          <option value = "3">Beef</option>
        </select>

        <input type="hidden" name="id[]" value="' . $this->id . '">
        <br/>';

        return $html;
    }

    public function display_update_success() {
        echo 'database updated!';
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
            $this->id = $guest['id'];
        }
    }

    public function add() {
        $sql = "INSERT INTO guest (name, rsvp_id, food_id, family_id, code) VALUES (\"" . $this->name . "\", " . $this->rsvp . ", 4, " . $this->familyId . ", \"" . $this->code . "\")";
        $result = mysql_query($sql);

        if (!$result) {
            die('Guest->add(): Invalid query: ' . mysql_error());
        }
    }

    public function update($id, $rsvp, $food) {
        $sql = "UPDATE guest SET rsvp_id=" . $rsvp . ", food_id=" . $food . " WHERE id=" . $id;
        $result = mysql_query($sql);

        if (!$result) {
            die('Guest->update(): Invalid query: ' . mysql_error());
        }
    }
}

?>