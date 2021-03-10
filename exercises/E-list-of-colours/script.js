function listOfColours(colours) {
  //Puts element with content id inside of the contentElem
  let contentElem = document.getElementById("content");
  //Creates an dropDown menue with the "select" tag
  let selectElem = document.createElement("select");
  //Creates pElem with `<p>` tag in it
  let pElem = document.createElement("p");

  //Goes through every colour in the array
  for (let eachColour of colours) {
    //Creates `<option>` tag for every colour in the array as options of dropDown menu:
    let optionElem = document.createElement("option");
    //Puts each colour in optionElem as text
    optionElem.innerText = eachColour;
    //Puts optionElem inside of the selectElem
    selectElem.appendChild(optionElem);
    //Calls colourChange function with every change
    selectElem.addEventListener("change", colourChange);
  }

  function colourChange(event) {
    // changes the pElement text to the message bellow and selected colour name
    pElem.innerText = `You have selected: ${event.target.value}`;
    // changes the background colour of the tect to the chosen colour
    pElem.style.backgroundColor = event.target.value;
  }

  //Puts selectElem inside of the contentElem
  contentElem.appendChild(selectElem);
  //Puts pElem inside of the contentElem
  contentElem.appendChild(pElem);
}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
