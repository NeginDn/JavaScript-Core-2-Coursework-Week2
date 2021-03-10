function todoList(todos) {
  //Puts element with content id inside of the contentElem
  let contentElem = document.getElementById("content");
  //Creates an unordered list: `<ul>`
  let ulElem = document.createElement("ul");
  //Puts the message bellow in bold inside of the ulElem
  ulElem.innerHTML = "<strong>Things to do: </strong>";

  //Goes through each object in the array
  for (let task of todos) {
    //Creates `<li>` tag for each item in the array and put the content of each "todo" objects of the "todos" array in it:
    let liElem = document.createElement("li");
    //Puts value of the todo keys inside of the liElem
    liElem.innerText = task["todo"];
    //Puts liElem inside of the ulElem
    ulElem.appendChild(liElem);

    //Checks if each liElem has a line through or not. If yes, it removes them otherwise put one if there is not any
    function lineTrough() {
      if (liElem.style.textDecoration === "line-through") {
        liElem.style.textDecoration = "none";
      } else {
        liElem.style.textDecoration = "line-through";
      }
    }
    //Calls lineTrough function with every click
    liElem.addEventListener("click", lineTrough);
  }
  //Puts ulElem inside of the contentElem
  contentElem.appendChild(ulElem);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
