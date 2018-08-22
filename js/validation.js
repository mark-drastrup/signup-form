$(document).ready(function () {
    var formMessages = {
        EN: { firstname: "Please fill out your firstname", lastname: "Please fill out your lastname" },
        DA: { username: "Test", firstname: "Angiv venligst dit fornavn", lastname: "Angiv venligst dit efternavn", adress: "Test", email: "Test", repeat_email: "Test" },
        JP: { firstname: "名前", lastname: "名前" },
    }

    var chosenLanguage = $("#chosen_language").val();

    $(".flag-icon").click(function (e) {
        let language = $(this).data("lang");
        $("#chosen_language").val(language);
        chosenLanguage = language;
    });

    $("#signup_form").validate({
        debug: true,
        rules: {
            username: "required",
            firstname: "required",
            lastname: "required",
            address: "required",
            email: "required",
            repeat_email: "required"
        },
        /*messages: {
            firstname: formMessages[chosenLanguage].firstname,
            lastname: formMessages[chosenLanguage].lastname,
        },*/
    });

    $(".flag-icon").click(function (e) {
        //get the chosen language
        let language = $(this).data("lang");

        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== "hidden") {
                var demo = inputs[i].id
                $("#" + demo).rules("add", {
                    messages: {
                        required: formMessages[language].demo
                    }
                });
            }
        }

        /*$("#firstname").rules("add", {
            messages: {
                required: formMessages[language].firstname
            }
        });
        $("#lastname").rules("add", {
            messages: {
                required: formMessages[language].lastname
            }
        });*/
    });

});

/*messages: {
    firstname: "Please fill out your firstname",
    lastname: "Please fill out your lastname",
},
errorElement: "div",
errorLabelContainer: ".has_error"*/
