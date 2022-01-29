var letterFilter = /^[A-Za-z]+$/;
var numberFilter = /^[0-9]+$/;
var emailFilter =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function meowUs() {
  // 1st Prototype - Works!!! BUt need to get ID from HTML
  // var meow = document.getElementById("meow");

  return (
    meow.play() + alert("Thank you for meowing us! We will meow back ASAP!")
  );
}

function firstNameCheck() {
  var nameInput = document.getElementById("fName").value;
  var fNameHighlight = document.querySelector("#fName");

  if (nameInput == "") {
    alert("Please enter a name");
    fNameHighlight.setAttribute("class", "invalid");
  } else if (nameInput.match(numberFilter)) {
    alert("This is a number. Not a name.");
    fNameHighlight.setAttribute("class", "invalid");
  } else if (!nameInput.match(letterFilter)) {
    alert("There is a number in your name?!");
    fNameHighlight.setAttribute("class", "invalid");
  } else {
    fNameHighlight.setAttribute("class", "valid");
  }
}

function lastNameCheck() {
  var nameInput = document.getElementById("lName").value;
  var lNameHighlight = document.querySelector("#lName");

  if (nameInput == "") {
    alert("Please enter a name");
    lNameHighlight.setAttribute("class", "invalid");
  } else if (nameInput.match(numberFilter)) {
    alert("This is a number. Not a name.");
    lNameHighlight.setAttribute("class", "invalid");
  } else if (!nameInput.match(letterFilter)) {
    alert("There is a number in your name?!");
    lNameHighlight.setAttribute("class", "invalid");
  } else {
    lNameHighlight.setAttribute("class", "valid");
  }
}

// Check email for @
function emailVerification() {
  var emailInput = document.getElementById("email").value;
  var emailLabel = document.querySelector("#email");

  if (!emailInput.match(emailFilter)) {
    alert("Check carefully if your email has @ or .");
    emailLabel.setAttribute("class", "invalid");
  } else {
    emailLabel.setAttribute("class", "valid");
  }
}

// Code for age commenting
// function ageCheck() {
//   var ageValue = document.getElementById("number-label").value;

//   if (isNaN(ageValue)) {
//     alert("This isn't an age.");
//     numberLabel.setAttribute("class", "invalid");
//   } else if (ageValue == "") {
//     alert("Please enter your cat age.");
//     numberLabel.setAttribute("class", "invalid");
//   } else if (ageValue > 38) {
//     alert(
//       "The oldest living cat, Creme Puff, is 38 years old. You have broken the record for oldest cat! "
//     );
//     numberLabel.setAttribute("class", "valid");
//   } else {
//     numberLabel.setAttribute("class", "valid");
//   }
// }
