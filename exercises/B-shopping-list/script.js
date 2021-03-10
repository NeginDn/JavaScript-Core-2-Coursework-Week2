function shoppingList(arrayOfEachElements) {
  //Puts element with content id inside of the contentElem
  let contentElem = document.getElementById("content");
  //Creates an unordered list: `<ul>`
  let ulElem = document.createElement("ul");
  //Goes through every eachElements in the array
  for (eachElement of shopping) {
    //Creates `<li>` tag for each eachElement in the array:
    let liElem = document.createElement("li");
    //Puts each item in liElem
    liElem.innerHTML = eachElement;
    //Puts liElem inside of the contentElem
    ulElem.appendChild(liElem);
  }
  //Prints the text on top of the list
  contentElem.innerHTML = "List of eachElements you need to buy:";
  //Puts ulElem inside of the contentElem
  contentElem.appendChild(ulElem);
}
let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
