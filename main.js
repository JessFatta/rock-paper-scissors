var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var paperImage = document.querySelector(".paper-image");
var rocksImage = document.querySelector(".rocks-image");
var scissorsImage = document.querySelector(".scissors-image");
var fighterChoice = document.querySelector(".fighter");
var chooseGameHeadline = document.querySelector(".choose-game-headline");

classicGameButton.addEventListener("click", playClassic);


function showEmojis(element) {
  element.classList.remove("hidden")
};

function hideEmojis(element) {
  element.classList.add("hidden")
};

function hideVisibility(element) {
  element.classList.add("hidden")
};

function showVisibility(element) {
  element.classList.remove("hidden")
};


function playClassic() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  showEmojis(paperImage);
  showEmojis(rocksImage);
  showEmojis(scissorsImage);
  hideVisibility(chooseGameHeadline);
  showVisibility(fighterChoice);

};
