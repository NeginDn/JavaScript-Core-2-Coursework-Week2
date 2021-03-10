//Why can't we define these inside of the function?

//Puts element with content id inside of the contentElem
let contentElem = document.getElementById("content");
//Creates pElem with `<p>` tag in it
let pElem = document.createElement("p");
//Creates an dropDown menu with the "select" tag
let selectElem = document.createElement("select");

function highlightWords(paragraph, colours) {
  //Goes through every colour in the array
  for (let eachColour of colours) {
    //Creates `<option>` tag for every colour in the array as options of dropDown menu:
    let optionElem = document.createElement("option");
    //Puts each colour in optionElem as text
    optionElem.innerText = eachColour;
    //Puts optionElem inside of the selectElem
    selectElem.appendChild(optionElem);
  }
  //makes an array contains each word inside of the paragraph as elements
  let paragraphArray = paragraph.split(" ");
  //Goes through every word in the array
  for (let eachWord of paragraphArray) {
    //Creates an dropDown menu with the "select" tag
    let spanElem = document.createElement("span");
    //Puts each word in spanElem as text
    spanElem.innerText = `${eachWord} `;
    //Calls highlightWord function with every click
    spanElem.addEventListener("click", highlightWord);
    //Puts spanElem inside of the pElem
    pElem.appendChild(spanElem);
  }
  //Puts selectElem inside of the contentElem
  contentElem.appendChild(selectElem);
  //Puts pElem inside of the contentElem
  contentElem.appendChild(pElem);
}

//Checks if the the dropDown menu is not equal to none, if not change the background of text to the chosen colour. Otherwise change it to null(no colour)
function highlightWord(event) {
  if (selectElem.value !== "none") {
    event.target.style.backgroundColor = selectElem.value;
  } else {
    event.target.style.backgroundColor = "";
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);

// - Create a `<p>` element.
// - Create a `<select>` element.
// - Iterate over the options array and create an `<option>` element in the `<select>` for each element.
// - You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here.
// - Iterate over the array of words.
// - For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
// - Each `<span>` should have an eventListener that will listen for clicks.
// - When clicked, we need to check the value of the `<select>` element using the `.value` property.
// - We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
// - All of your HTML should go inside the `<div>` with the id **"content"**.
