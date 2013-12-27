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
        for($i = 0; $i < count($this->members); $i++) {
            $this->members[$i]->display();
        }
    }

    public function get_family_members($id) {
        $sql = "SELECT id FROM guest WHERE family_id=" . $id;
        $result = mysql_query($sql);

        if (!$result) {
            die('family->get_family_members(): Invalid query: ' . mysql_error());
        }

        $ids = mysql_fetch_array($result);

        for($i = 0; $i < count($ids); $i++) {
            $id = $ids[$i];
            $guest = new Guest();
            $guest->retrieve($id);
            array_push($this->members, $guest);
        }
    }

    private function get_family_id($code) {
        $sql = "SELECT family_id FROM guest WHERE code='" . $code . "'";
        $result = mysql_query($sql);

        if (!$result) {
            die('family->get_family_id(): Invalid query: ' . mysql_error());
        }

        $id = mysql_fetch_array($result);
        return $id[0];
    }
}

?>