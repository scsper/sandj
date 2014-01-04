// variable to hold request
var request;

function bind() {
    bind_retrieval();
    bind_submit();
}

// bind to the submit event of our form
function bind_retrieval() {
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

            bind();
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

function bind_submit() {
    $("#submit-rsvp").submit(function(event){
        // abort any pending request
        if (request) {
            request.abort();
        }

        var $form = $(this);
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serializeArray();
        var submitData = {};

        // let's disable the inputs for the duration of the ajax request
        $inputs.prop("disabled", true);

        // parse serializedData
        for(var i = 0; i < serializedData.length; i++) {
            var name = serializedData[i].name;
            var value = serializedData[i].value;

            if(name === "type") {
                submitData.type = value;
                continue;
            }

            if(!submitData[name]) {
                submitData[name] = [];
            }

            submitData[name].push(value);
        }

        // fire off the request to /form.php
        request = $.ajax({
            url: "/php/endpoint.php",
            type: "post",
            data: submitData,
            dataType: "text"
        });

        request.done(function (response, textStatus, jqXHR){
            console.log(response);
            console.log("Hooray, it worked!");

            bind();
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