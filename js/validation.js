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
    });
});


