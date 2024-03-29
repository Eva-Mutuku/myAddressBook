// Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullname = function () {
  return this.firstName + "" + this.lastName;
}

//User Interface Logic
$(document).ready = () => {
  $("from#new-contact").submit = () => {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullname() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-Name").text(newContact.lastName);
    });

  }
}