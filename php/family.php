<?php

require 'guest.php';

class Family {
    private $members;

    public function __construct($code) {
        $this->members = array();
        $id = $this->get_family_id($code);
        $this->get_family_members($id);
    }

    public function members() {
        return $this->members();
    }

    public function display() {
        $html = '<form id="submit-rsvp" name="submit-form" class="rsvp-form pure-form" method="post">
                <fieldset><legend class="centered"> RSVP </legend>';

        for($i = 0; $i < count($this->members); $i++) {
            $html .= $this->members[$i]->display();
        }

        $html .= '<input type="hidden" name="type" value="submission">
                <input class="pure-button notice" name="submit" type="submit" text="Save">
              </fieldset>

            </form>';

        return $html;
    }

    public function get_family_members($familyId) {
        $sql = sprintf("SELECT id FROM guest WHERE family_id=%d", mysql_real_escape_string($familyId));
        $result = mysql_query($sql);

        if (!$result) {
            $message  = 'family->get_family_members(): Invalid query: ' . mysql_error() . "\n";
            $message .= 'Whole query: ' . $query;
            die($message);
        }

        while ($row = mysql_fetch_assoc($result)) {
            $id = $row['id'];
            $guest = new Guest();
            $guest->retrieve($id);
            array_push($this->members, $guest);
        }
    }

    private function get_family_id($code) {
        $sql = sprintf("SELECT family_id FROM guest WHERE code='%s'", mysql_real_escape_string($code));
        $result = mysql_query($sql);

        if (!$result) {
            die('family->get_family_id(): Invalid query: ' . mysql_error());
        }

        while ($row = mysql_fetch_assoc($result)) {
            $familyId = $row['family_id'];
        }

        return $familyId;
    }
}

?>