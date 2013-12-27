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
        }
    }
}

$endpoint = new Endpoint();
$endpoint->resolve();

?>