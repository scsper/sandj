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

            $guestHtml = "";

            $yes = false;
            $no = false;

            for($i = 0; $i < count($id); $i++) {
                $guest = new Guest();
                $guestHtml .= $guest->update($id[$i], $rsvp[$i], $food[$i]);

                if($rsvp[$i]) {
                    $yes = true;
                } else {
                    $no = true;
                }
            }

            $baseHtml = '<table class="centered pure-table pure-table-striped centered-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>RSVP</th>
                  <th>Food</th>
                </tr>
              </thead>
              <tbody>';

            if($yes && $no) {
                $message = "<h2>See you there!</h2>";
            } else if ($yes) {
                $message = "<h2>We're happy you're coming!</h2>";
            } else if ($no) {
                $message = "<h2>We'll miss you.</h2>";
            }

            $closeHtml = '</tbody>
            </table><small class="small-spacing">Click <a class="small-link">here</a> if you need to make changes.';

            echo $message . $baseHtml . $guestHtml  . $closeHtml;

        } else {
            echo "ERROR: Invalid type";
        }
    }
}

$endpoint = new Endpoint();
$endpoint->resolve();

?>