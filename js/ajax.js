// variable to hold request
var request;

// bind to the submit event of our form
function bind() {
    $("#retrieve-guests").submit(function(event){
        // abort any pending request
        if (request) {
            request.abort();
        }

        var $form = $(this);
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();

        // let's disable the inputs for the duration of the ajax request
        $inputs.prop("disabled", true);

        // fire off the request to /form.php
        request = $.ajax({
            url: "/php/endpoint.php",
            type: "post",
            data: serializedData,
            dataType: "text"
        });

        request.done(function (response, textStatus, jqXHR){
            console.log(response);
            console.log("Hooray, it worked!");
        });

        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });

        request.always(function () {
            $inputs.prop("disabled", false); // reenable the inputs
        });

        event.preventDefault();  // prevent default posting of form
    });
}


bind();