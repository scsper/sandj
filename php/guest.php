<?php
class Guest {
    public $firstName;
    public $lastName;
    public $email;
    public $status;
    public $familyId;

    function __construct($firstName, $lastName, $email, $status, $familyId) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->status = $status;
        $this->familyId = $familyId;
    }
}

?>