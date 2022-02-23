var letterFilter = /^[A-Za-z]+$/;
var numberFilter = /^[0-9]+$/;
var emailFilter =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Animation for hero banner
let darkSky = document.querySelector("#darkSky");
let stars = document.querySelector("#stars");
let moon = document.querySelector("#whiteMoon");
let meteor = document.querySelector("#meteor");
let backMountains = document.querySelector("#backMountains");
let bottomCloud = document.querySelector("#bottomCloud");

window.addEventListener("scroll", () => {
  let yPosition = window.scrollY;

  stars.style.left = yPosition * 0.05 + "px";
  stars.style.top = yPosition * 0.25 + "px";

  meteor.style.left = yPosition * 1 + "px";
  meteor.style.top = yPosition * 1 + "px";

  //   blackMoon.style.marginTop = yPosition * 0.6 + "px";
  moon.style.marginTop = yPosition * 1.25 + "px";
  bottomCloud.style.top = yPosition * 0.25 + "px";
  backMountains.style.top = yPosition * 0.1 + "px";
});

// Press Submit and it meows
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

////// Testing

window.onscroll = function () {
  scrollAnimation();
};

const scrollAnimation = () => {
  const classCont = document.querySelector(".textContainer");
  // const test = document.querySelector(".testing");

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    classCont.classList.add("visible");
    classCont.style.display = "block";
  } else {
    classCont.style.display = "none";
  }
};
