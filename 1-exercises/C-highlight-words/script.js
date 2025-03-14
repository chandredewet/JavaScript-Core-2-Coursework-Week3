function highlightWords(paragraph, colours) {
  // Write your code here...

  let displayEl = document.getElementById("content");
  let pEl = document.createElement("p");
  displayEl.appendChild(pEl);
  let descEl = document.createElement("p");
  displayEl.appendChild(descEl);
  descEl.textContent =
    "Select colour option from drop down and see what happens if you click on above words ";
  let selectEl = document.createElement("select");
  descEl.appendChild(selectEl);

  colours.forEach((colour) => {
    let optEl = document.createElement("option");
    optEl.textContent = colour;
    optEl.value = colour;
    if (colour === "yellow") {
      optEl.className += " highlightYellow";
    }
    if (colour === "green") {
      optEl.className += " highlightGreen";
    }
    if (colour === "blue") {
      optEl.className += " highlightBlue";
    }
    selectEl.appendChild(optEl);
  });

  let wordsArr = paragraph.split(" ");
  wordsArr.forEach((word) => {
    let spanEl = document.createElement("span");
    spanEl.innerText = `${word} `;
    spanEl.addEventListener("click", highlight);
    pEl.appendChild(spanEl);
  });

  function highlight() {
    // - When clicked, we need to check the value of the `<select>` element using the `.value` property.
    //We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
    let option = selectEl.value;

    if (option === "yellow") {
      this.classList.remove("highlightGreen", "highlightBlue");
      this.className += " highlightYellow";
    }
    if (option === "green") {
      this.classList.remove("highlightYellow", "highlightBlue");
      this.className += " highlightGreen";
    }
    if (option === "blue") {
      this.classList.remove("highlightYellow", "highlightGreen");
      this.className += " highlightBlue";
      this.classList.remove(
        "highlightYellow",
        "highlightGreen",
        "highlightBlue"
      );
    }
    if (option === "none") {
      this.classList.remove(
        "highlightYellow",
        "highlightGreen",
        "highlightBlue"
      );
    }
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
