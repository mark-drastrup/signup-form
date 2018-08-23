var LanguageList = {
  "JP": "日本語",
  "EN": "English",
  "DA": "Danish"
};

//languages Objects
var WORDS_JP = {
  "username_label": "名前",
  "firstname_label": "名前",
  "lastname_label": "名前",
  "address_label": "名前",
  "email_label": "名前",
  "repeat_email_label": "名前",
};

var WORDS_EN = {
  "username_label": "Username",
  "firstname_label": "Firstname",
  "lastname_label": "Lastname",
  "address_label": "Address",
  "email_label": "Email",
  "repeat_email_label": "Repeat email",
};

var WORDS_DA = {
  "username_label": "Brugernavn",
  "firstname_label": "Fornavn",
  "lastname_label": "Efternavn",
  "address_label": "Adresse",
  "email_label": "Email",
  "repeat_email_label": "Gentag email",
};


window.onload = initialize;

function initialize() {

  var $dropdown = $("#country_select");
  $.each(LanguageList, function (key, value) {
    $dropdown.
      append($("<option/>").
        val(key).
        text(value));
  });

  loadsLanguage("JP");
}

function loadsLanguage(lang) {
  //fills all the span tags with class=lang pattern
  $('span[class^="lang"]').each(function () {
    var LangVar = (this.className).replace('lang_', '');
    var Text = window["WORDS_" + lang][LangVar];
    $(this).text(Text);
  });
}

//change language onChange
$(".flag-icon").click(function (e) {
  let language = $(this).data("lang");
  loadsLanguage(language);
  $("#chosen_language").val(language);
});
