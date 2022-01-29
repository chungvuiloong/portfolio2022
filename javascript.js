function meowUs() {
  // 1st Prototype - Works!!! BUt need to get ID from HTML
  // var meow = document.getElementById("meow");

  return (
    meow.play() + alert("Thank you for meowing us! We will meow back ASAP!")
  );
}

// My previous code
function nameCheck() {
  var nameInput = document.getElementById("name").value;
  var letterFilter = /^[A-Za-z]+$/;
  var numberFilter = /^[0-9]+$/;

  var nameLabel = document.querySelector("#fName");

  if (nameInput == "") {
    alert("Please enter a name");
    nameLabel.setAttribute("class", "invalid");
  } else if (nameInput.match(numberFilter)) {
    alert("This is a number. Not a name.");
    nameLabel.setAttribute("class", "invalid");
  } else if (!nameInput.match(letterFilter)) {
    alert("There is a number in your name?!");
    nameLabel.setAttribute("class", "invalid");
  } else {
    nameLabel.setAttribute("class", "valid");
  }
}

// My previous code
function emailVerification() {
  var emailInput = document.getElementById("email").value;
  var emailFilter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailLabel = document.querySelector("#email");

  if (!emailInput.match(emailFilter)) {
    alert("Please enter your email!");
    emailLabel.setAttribute("class", "invalid");
  } else {
    emailLabel.setAttribute("class", "valid");
  }
}
