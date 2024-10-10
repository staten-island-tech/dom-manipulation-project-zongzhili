const DOMSelectors = {
  header: document.querySelector("h1"),
  item: document.querySelector("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

// DOMSelectors.button.addEventListener("click", function (event) {
//   console.log(event.target.parentElement);
//   event.target.style.backgroundColor = "red";
// });
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
//select all buttons as nodelist (can use for each)
const buttons = document.querySelectorAll("button");
//make array from buttons if i want to use filter etc.
const newButtons = Array.from(buttons);
//iterate through array and change each buttons color
newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);
let student = 3;
DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
  <!--<h2 class="card header">${student}</h2> <p>owefoinmdoanksdxcvklmxlasd</p>--></div>`
);

//create the HTML for inputs, cards, and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, user, whatever

//insert card with object onto HTML

//add event listener for remove button in JS
