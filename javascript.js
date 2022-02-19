var letterFilter = /^[A-Za-z]+$/;
var numberFilter = /^[0-9]+$/;
var emailFilter =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

meowUs = () => {
  // 1st Prototype - Works!!! BUt need to get ID from HTML
  // var meow = document.getElementById("meow");

  meow.play() + alert("Thank you for meowing us! We will meow back ASAP!");
};

firstNameCheck = () => {
  var nameInput = document.querySelector("#fName").value;
  var fName = document.querySelector("#fName");

  if (nameInput == "") {
    alert("Please enter a name");
    fName.setAttribute("class", "invalid");
  } else if (nameInput.match(numberFilter)) {
    alert("This is a number. Not a name.");
    fName.setAttribute("class", "invalid");
  } else if (!nameInput.match(letterFilter)) {
    alert("You have a number in your first name?!");
    fName.setAttribute("class", "invalid");
  } else {
    fName.setAttribute("class", "valid");
  }
};

lastNameCheck = () => {
  var lNameInput = document.querySelector("#lName").value;
  var lName = document.querySelector("#lName");

  if (lNameInput == "") {
    alert("Please enter a name");
    lName.setAttribute("class", "invalid");
  } else if (lNameInput.match(numberFilter)) {
    alert("This is a number. Not a name.");
    lName.setAttribute("class", "invalid");
  } else if (!lNameInput.match(letterFilter)) {
    alert("You have a number in your last name?!");
    lName.setAttribute("class", "invalid");
  } else {
    lName.setAttribute("class", "valid");
  }
};

cNumberCheck = () => {
  var numberValue = document.querySelector("#fName").value;
  var cNumber = document.querySelector("#cNumber");

  if (numberValue == "") {
    alert(
      "Come on now. How can we contact you if we don't have your contact number."
    );
    cNumber.setAttribute("class", "invalid");
  } else if (numberValue.match(letterFilter)) {
    alert("There are alphabets in your contact number?!");
    cNumber.setAttribute("class", "invalid");
  } else {
    cNumber.setAttribute("class", "valid");
  }
};

// Check email for @ and .
emailVerification = () => {
  var emailInput = document.querySelector("#email").value;
  var emailLabel = document.querySelector("#email");

  if (!emailInput.match(emailFilter)) {
    alert("Check carefully if your email has @ or .");
    emailLabel.setAttribute("class", "invalid");
  } else {
    emailLabel.setAttribute("class", "valid");
  }
};

ageCheck = () => {
  var ageValue = document.querySelector("#age").value;
  var ageHighlight = document.querySelector("#age");

  if (isNaN(ageValue)) {
    alert("This isn't an age.");
    ageHighlight.setAttribute("class", "invalid");
  } else if (ageValue == "") {
    alert("Please enter your age.");
    ageHighlight.setAttribute("class", "invalid");
  } else if (ageValue >= 100) {
    alert("Are you really that old?");
    ageHighlight.setAttribute("class", "valid");
  } else if (ageValue > 38) {
    alert(
      "The oldest living cat, Creme Puff, is 38 years old. You have broken the record for oldest cat! If you are a cat...."
    );
    ageHighlight.setAttribute("class", "valid");
  } else {
    ageHighlight.setAttribute("class", "valid");
  }
};

// CSS Related

var rellax = new Rellax(".rellax");
