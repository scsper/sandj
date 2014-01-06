<?php

require 'family.php';

class Endpoint {
    private $type;

    public function __construct() {
        $this->type = $_POST['type'];
    }

    public function resolve() {
        if($this->type == "retrieval") {
            $code = $_POST['code'];
            $family = new Family($code);
            $html = $family->display();
            echo $html;
        } else if($this->type == "submission") {
            $rsvp = $_POST['rsvp'];
            $food = $_POST['food'];
            $id = $_POST['id'];
            $family = $_POST['family'];

            for($i = 0; $i < count($id); $i++) {
                $guest = new Guest();
                $guest->update($id[$i], $rsvp[$i], $food[$i]);
                $guest->display_update_success();
            }
        } else {
            echo "ERROR: Invalid type";
        }
    }
}

$endpoint = new Endpoint();
$endpoint->resolve();

?>