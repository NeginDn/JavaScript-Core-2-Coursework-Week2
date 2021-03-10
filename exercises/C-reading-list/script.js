function readingList(books) {
  //Puts element with content id inside of the contentElem
  let contentElem = document.getElementById("content");
  //Creates an unordered list: `<ul>`
  let ulElem = document.createElement("ul");
  //Gives ulElem a new class
  ulElem.className += " ul-style";

  //Goes through every book in the array
  for (let book of books) {
    //Creates `<li>` tag for each eachElement in the array:
    let liElem = document.createElement("li");
    //Creates `<p>` tag for each eachElement in the array:
    let pElem = document.createElement("p");
    //Puts book title and author name in pElem
    pElem.innerHTML = `<strong> ${book.title}<br>By:</strong> ${book.author}`;
    //Creates an imageElem with "img" tag
    let imgElem = document.createElement("img");
    //Create an image source and puts the source of the address bellow
    imgElem.setAttribute("src", "./img/" + `${book.title}` + ".jpg");
    //Checks if the book has been read or not if yes, gives it a class of "read-book" otherwise gives it the class of "not-read-book"
    if (book.alreadyRead === true) {
      liElem.className += " read-book";
    } else {
      liElem.className += " not-read-book";
    }

    //Puts pElem inside of the liElem
    liElem.appendChild(pElem);
    //Puts imgElem inside of the liElem
    liElem.appendChild(imgElem);
    //Puts liElem inside of the ulElem
    ulElem.appendChild(liElem);
  }
  //Puts liElem inside of the ulElem
  contentElem.appendChild(ulElem);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
