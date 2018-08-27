$(document).ready(function () {

    //creating object with custom messages for each language
    var formMessages = {
        EN: { username: "Please choose a username", firstname: "Please type your firstname", lastname: "Please type your lastname", address: "Please type your address", email: "Please type your email", repeat_email: "Please repeat your email" },
        DA: { username: "Vælg venligst et brugernavn", firstname: "Angiv venligst dit fornavn", lastname: "Angiv venligst dit efternavn", address: "Angiv venligst din adresse", email: "Angiv venligst din email", repeat_email: "Gentag venligst din email" },
        JP: { firstname: "名前", lastname: "名前" },
    }

    //get the chosen language
    var chosenLanguage = $("#chosen_language").val();

    //add validation to the form
    $("#signup_form").validate({
        errorClass: "invalid",
        rules: {
            username: "required",
            firstname: "required",
            lastname: "required",
            address: "required",
            email: "required",
            repeat_email: "required"
        },
        messages: {
            username: formMessages[chosenLanguage].username,
            firstname: formMessages[chosenLanguage].firstname,
            lastname: formMessages[chosenLanguage].lastname,
            address: formMessages[chosenLanguage].address,
            email: formMessages[chosenLanguage].email,
            repeat_email: formMessages[chosenLanguage].repeat_email
        },
    });

    $(".flag-icon").click(function (e) {
        //get the chosen language
        let language = $(this).data("lang");

        //get list of inputs, iterate through them and assign a rule with a custom message
        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== "hidden") {
                var inputKey = inputs[i].id
                $("#" + inputKey).rules("add", {
                    messages: {
                        required: formMessages[language][inputKey]
                    }
                });
            }
        }
        //check if click on flag icon should trigger validation messages
        changeLang();
    });

    function changeLang() {
        //get list of all error messages
        var errorMessages = $(".invalid");
        if (errorMessages.length !== 0) {
            $('#signup_form').valid();
        } else {
            return;
        }
    }
});

