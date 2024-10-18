//create the HTML for inputs, cards, and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, user, whatever

//insert card with object onto HTML

//add event listener for remove button in JS
const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.getElementById("input"),
  form: document.querySelector("#albumForm"),
  singer: document.getElementById("singer"),
  cover: document.getElementById("cover"),
  album: document.getElementById("album"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let singer = DOMSelectors.singer.value;
  let cover = DOMSelectors.cover.value;
  let album = DOMSelectors.album.value;

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>Artist: ${singer}, Album: ${album}, Cover: ${cover}</p>`
  );

  DOMSelectors.singer.value = "";
  DOMSelectors.cover.value = "";
  DOMSelectors.album.value = "";
});

//const Album = makeAlbum()
//addcard(album)
//clear fields
//add remove buttons
//h1.remove (how or when u add remove buttons is important)
