// const DOMSelectors = {
//   header: document.querySelector("h1"),
//   item: document.querySelector("li"),
//   cardHeader: document.querySelector(".card-header"),
//   button: document.querySelector(".btn"),
//   form: document.querySelector(".form"),
// };

// DOMSelectors.button.addEventListener("click", function (event) {
//   console.log(event.target.parentElement);
//   event.target.style.backgroundColor = "red";
// });
// DOMSelectors.form.addEventListener("click", function (event) {
//   event.preventDefault();

//   const singer = document.getElementById("singer").value;
//   const album = document.getElementById("album").value;
//   const cover = document.getElementById("cover").value;

//   console.log("Artist Name:", singer);
//   console.log("Album Name:", album);
//   console.log("Album Cover Link:", cover);
// });
// //select all buttons as nodelist (can use for each)
// const buttons = document.querySelectorAll("button");
// //make array from buttons if i want to use filter etc.
// const newButtons = Array.from(buttons);
// //iterate through array and change each buttons color
// newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

// newButtons.forEach((button) =>
//   button.addEventListener("click", function (event) {
//     console.log(event.target.textContent);
//   })
// );
// let student = 3;
// DOMSelectors.container.insertAdjacentHTML(
//   "beforeend",
//   `<div class="card">
//   <!--<h2 class="card header">${student}</h2> <p>owefoinmdoanksdxcvklmxlasd</p>--></div>`
// );

//create the HTML for inputs, cards, and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, user, whatever

//insert card with object onto HTML

//add event listener for remove button in JS
const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.getElementById("input"),
  form: document.querySelector("form"),
  singer: document.getElementById("singer"),
  cover: document.getElementById("cover"),
  album: document.getElementById("album"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let singerValue = DOMSelectors.singer.value;
  let coverValue = DOMSelectors.cover.value;
  let albumValue = DOMSelectors.album.value;

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>Artist: ${singerValue}, Album: ${albumValue}, Cover: ${coverValue}</p>`
  );
  DOMSelectors.singer.value = "";
  DOMSelectors.cover.value = "";
  DOMSelectors.album.value = "";
});
// const cat = "moew";
// DOMSelectors.box.insertAdjacentHTML("beforeend", `<h1>We are now ${cat}</h1>`);

//const Album = makeAlbum()
//addcard(album)
//clear fields
//add remove buttons
//h1.remove (how or when u add remove buttons is important)
