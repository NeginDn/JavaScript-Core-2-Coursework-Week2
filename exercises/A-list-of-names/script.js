function listOfNames(arrayOfPeople) {
  //Puts element with content id inside of the contentElem
  let contentElem = document.querySelector("#content");
  //Goes through every items in the array
  for (eachPerson of arrayOfPeople) {
    //Creates h1 element
    let h1Elem = document.createElement("h1");
    //Creates h2 element
    let h2Elem = document.createElement("h2");
    //Puts person's name in h1 element
    h1Elem.innerHTML = `<strong>Name: </strong> ${eachPerson.name}`;
    //Puts h1Elem inside of the contentElem
    contentElem.appendChild(h1Elem);
    //Puts person's job in h2 element
    h2Elem.innerHTML = `<strong>Job: </strong> ${eachPerson.job}`;
    //Puts h2Elem inside of the contentElem
    contentElem.appendChild(h2Elem);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
