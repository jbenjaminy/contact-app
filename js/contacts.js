
'use strict';
$(document).ready(function() {

//FUNCTIONS

    //Adding a contact
    function addContact() {
        console.log("hi")
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

    //On Click function populates the empty contacts and adds to contact array
    $('form').submit(function(event) {
        event.preventDefault();
        $('.contact-list').empty();
        addContact(); 
        for (var i = 0; i < contacts.length; i++) {
            $('.contact-list').append("<li><a href='#display-area' class='contact-display' onClick='contactDisplay(" + i + ");'>" + contacts[i].first + " " + contacts[i].last + "</a></li>");
        }
        $('.form-control').val(null);
    });

});

//Click function to select contacts from contact list and display in the contact info session
function contactDisplay(i) {
        $("#display-contact").empty();
        $("#display-contact").append("<li>" + contacts[i].first + " " + contacts[i].last + "</li>");
        $("#display-contact").append("<li>" + contacts[i].phone + "</li>");
        $("#display-contact").append("<li>" + contacts[i].street + "</li>");
        $("#display-contact").append("<li>" + contacts[i].city + "," + " " + contacts[i].state + "</li>");
        $("#display-contact").append("<li>" + contacts[i].zip + "</li>");
}

// Variables
var contacts = []
var fields = ["first", "last", "phone", "street", "city", "state", "zip"]
var totalFields = 7
var emptyContact = {
    first: "",
    last: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: ""
}








