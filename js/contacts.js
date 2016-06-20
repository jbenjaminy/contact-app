
'use strict';
$(document).ready(function() {

// VARIABLES
var contacts = []
var emptyContact = {
    first: "",
    last: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: ""
}

// FUNCTIONS
    // POPULATES EMPTY CONTACT AND ADDS TO CONTACTS ARRAY
    function addContact() {
        var newContact = Object.create(emptyContact);
        newContact.first = $("#first-name").val();
        newContact.last = $("#last-name").val();
        newContact.phone = $("#phone-number").val();
        newContact.street = $("#street").val();
        newContact.city = $("#city").val();
        newContact.state = $("#state").val();
        newContact.zip = $("#zipcode").val();
        contacts.push(newContact);
        console.log(newContact);
        return newContact;
    }

    // SELECT CONTACTS FROM CONTACT LIST AND DISPLAY IN CONTACT INFO SECTION
    function contactDisplay(i) {
        $("#display-contact").empty();
        $("#display-contact").append("<li>" + contacts[i].first + " " + contacts[i].last + "</li>");
        $("#display-contact").append("<li>" + contacts[i].phone + "</li>");
        $("#display-contact").append("<li>" + contacts[i].street + "</li>");
        $("#display-contact").append("<li>" + contacts[i].city + "," + " " + contacts[i].state + "</li>");
        $("#display-contact").append("<li>" + contacts[i].zip + "</li>");
    }

    // ON CLICK FUNCTION, RUNS ADDCONTACT FUNCTION AND PRINTS TO CONTACT LIST
    $('form').submit(function(event) {
        event.preventDefault();
        $('.contact-list').empty();
        addContact(); 
        for (var i = 0; i < contacts.length; i++) {
            $('.contact-list').append("<li><a href='#display-area' class='contact-display'>" + contacts[i].first + " " + contacts[i].last + "</a></li>");
        }
        $('.form-control').val(null);
    });

    $('#contacts-list').on('click', '.contact-display', function(event) {
        console.log($(this));
        console.log("hey");
    });

});

// onClick='contactDisplay(" + i + ");'









