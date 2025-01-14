// # DOM Manipulation

// ## Part 1

// Open `index.html` in your browser. Notice there are 3 buttons: blue, orange and green.
// Edit the file `./js/main.js` and add the following functionality:

// Clicking on the buttons should change the "theme" of the website:

// - When clicking **blue** it should change:

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

// - When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`

// - When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

// Here's an example of how the website should look for the blue button:

// ![Blue button example](images/blue_clicked.png)

//Part 1
//Why doesn't this work?
// let jumbotronElem = document.getElementsByClassName("jumbotron");

let jumbotronElem = document.querySelector(".jumbotron");

let donateButtonElem = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerButtonElem = document.querySelector(".btn.btn-secondary.btn-lrg");

donateButtonElem.classList.add("donate-btn");
volunteerButtonElem.classList.add("volunteer-btn");


let blueButtonElem = document.getElementById("blueBtn");
let orangeButtonElem = document.getElementById("orangeBtn");
let greenButtonElem = document.getElementById("greenBtn");

function blueButtonClick() {
  jumbotronElem.style.backgroundColor = "#588fbd";
  donateButtonElem.style.backgroundColor = `#ffa500`;
  volunteerButtonElem.style.backgroundColor = "black";
  volunteerButtonElem.style.color = "white";
}

function greenButtonClick() {
  jumbotronElem.style.backgroundColor = `#87ca8a`;
  donateButtonElem.style.backgroundColor = `#black`;
  volunteerButtonElem.style.backgroundColor = `#8c9c08`;
}

function orangeButtonClick() {
  jumbotronElem.style.backgroundColor = `#f0ad4e`;
  donateButtonElem.style.backgroundColor = `#5751fd`;
  volunteerButtonElem.style.backgroundColor = `#31b0d5`;
  volunteerButtonElem.style.color = "white";
}

blueButtonElem.addEventListener("click", blueButtonClick);
greenButtonElem.addEventListener("click", greenButtonClick);
orangeButtonElem.addEventListener("click", orangeButtonClick);

//Part 2

let emailInputElem = document.getElementById("exampleInputEmail1");
let nameInputElem = document.getElementById("example-text-input");
let describeElem = document.getElementById("exampleTextarea");

let submitButtonElem = document.querySelector("form button");

submitButtonElem.addEventListener("click", submitForm);

function submitForm(event) {
  if (
    emailInputElem.value.length !== 0 &&
    emailInputElem.value.includes("@") === true &&
    nameInputElem.value.length !== 0 &&
    describeElem.value.length !== 0
  ) {
    window.alert("Thank you for filling out the form!");
    emailInputElem.value = "";
    emailInputElem.style.background = "white";
    nameInputElem.value = "";
    nameInputElem.style.background = "white";
    describeElem.value = "";
    describeElem.style.background = "white";

    correct - input;
  }
  if (
    emailInputElem.value.length === 0 ||
    emailInputElem.value.includes("@") === false
  ) {
    emailInputElem.style.background = "red";
  }
  if (nameInputElem.value.length === 0) {
    nameInputElem.style.background = "red";
  }
  if (describeElem.value.length === 0) {
    describeElem.style.background = "red";
  }
  event.preventDefault();
}

