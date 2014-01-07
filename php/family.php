<?php

require 'guest.php';

class Family {
    private $members;

    public function __construct($code) {
        $this->members = array();
        $id = $this->get_family_id($code);
        if($id) {
            $this->get_family_members($id);
            $this->invalidId = false;
        } else {
            $this->invalidId = true;
        }
    }

    public function members() {
        return $this->members();
    }

    public function display() {
        if($this->invalidId) {
            return $this->display_error();
        }

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

    public function display_error() {
        $error = "<h4 style='color:red;'>We're sorry, but that code does not exist in our database</h2>";
        $html = '<form id="retrieve-guests" name="rsvp-form" class="rsvp-form pure-form" onsubmit="rsvpsubmit(); return false;" method="get">
                <fieldset>
                    <legend class = "centered"> RSVP </legend>' . $error . '
                        <input id="name" name="name" class="pure-input-1-6" type="text" placeholder="Your Name" required>
                        <input id="code" name="code" class="pure-input-1-6" type="text" placeholder="Your Code" required>
                        <input type="hidden" name="type" value="retrieval">
                        <input class="pure-button notice" name="submit" type="submit" text="RSVP">
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