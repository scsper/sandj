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
            $family->display();
        } else if($this->type == "submission") {
            $rsvp = $_POST['rsvp'];
            $food = $_POST['food'];
            $id = $_POST['id'];
            echo "Inside submission.\n";
            echo $rsvp . ", " . $food . ", " . $id;

            for($i = 0; $i < count($id); $i++) {
                echo "Id: " . $id[$i] . " Rsvp: " . $rsvp[$i] . " Food: " . $food[$i] . "\n";
            }
        } else {
            echo "ERROR: Invalid type";
        }
    }
}

$endpoint = new Endpoint();
$endpoint->resolve();

?>