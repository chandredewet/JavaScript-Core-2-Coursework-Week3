function readingList(books) {
  //Iterate through the list of books.
  // - For each book, create a `<p>` element with the book title and author.
  // - Add an `<img>` to each book that links to a URL of the book cover.
  // - Use a `<ul>` and `<li>` to display the books and append it to the page.
  // - Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
  // - All of your HTML should go inside the `<div>` with the id **"content"**. Write your code here...
  let displayEl = document.getElementById("content");
  let listEl = document.createElement("ul");
  displayEl.appendChild(listEl);

  books.forEach((book) => {
    let itemEl = document.createElement("li");
    let titleEl = document.createElement("p");
    titleEl.textContent = `${book.title} by ${book.author}`;
    titleEl.className = "styleTitle";
    itemEl.appendChild(titleEl);
    let imgEl = document.createElement("img");
    imgEl.src = book.bookCoverImage;
    imgEl.className = "styleImage";
    titleEl.parentNode.appendChild(imgEl);
    listEl.appendChild(itemEl);
    // book.alreadyRead
    //   ? (titleEl.style.backgroundColor = "#007144")
    //   : (titleEl.style.backgroundColor = "#a20417");
    book.alreadyRead
      ? (itemEl.className += " green")
      : (itemEl.className += " red");
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
