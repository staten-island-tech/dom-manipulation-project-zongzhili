const DOMSelectors = {
  box: document.getElementById("container-box"),
  form: document.querySelector("#albumForm"),
  singer: document.getElementById("singer"),
  cover: document.getElementById("cover"),
  album: document.getElementById("album"),
};

function createAlbum() {
  return {
    singer: DOMSelectors.singer.value,
    cover: DOMSelectors.cover.value,
    album: DOMSelectors.album.value,
  };
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newAlbum = createAlbum();

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <p>Artist: ${newAlbum.singer}</p>
        <p>Album: ${newAlbum.album}</p>
        <img src="${newAlbum.cover}" alt="${newAlbum.album} cover">
        <button class="remove-button">Remove</button>
      </div>`
  );

  DOMSelectors.singer.value = "";
  DOMSelectors.cover.value = "";
  DOMSelectors.album.value = "";

  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const objectToRemove = event.target.parentElement;
      objectToRemove.remove();
    });
  });
});

//const Album = makeAlbum()
//addcard(album)
//clear fields
//add remove buttons
//h1.remove (how or when u add remove buttons is important)

//create the HTML for inputs, cards, and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, user, whatever

//insert card with object onto HTML

//add event listener for remove button in JS
