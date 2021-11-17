var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var changeGameButton = document.querySelector(".change-game-button");
var gameButtons = document.querySelector(".game-buttons");

var paperImage = document.querySelector(".paper-image");
var paperShow = "./assets/happy-paper.png"
var rocksImage = document.querySelector(".rocks-image");
var rocksShow = "./assets/happy-rocks.png"
var scissorsImage = document.querySelector(".scissors-image");
var scissorsShow = "./assets/happy-scissors.png"
var alienImage = document.querySelector(".alien-image");
var alienShow = "./assets/happy-alien.png"
var lizardImage = document.querySelector(".lizard-image");
var lizardShow = "./assets/lizard.png"

var fighterChoice = document.querySelector(".fighter");
var winnerAnnounce = document.querySelector(".winner-announce");
var chooseGameHeadline = document.querySelector(".choose-game-headline");

var classicIcons = document.querySelector(".classic-icons");
var classicSelected = document.querySelector(".classic-selected");
var gameButtons = document.querySelector(".game-buttons");

var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");
var personPlace = document.querySelector(".person");
var computerPlace = document.querySelector(".computer");


classicGameButton.addEventListener("click", playClassic);
difficultGameButton.addEventListener("click", playDifficult);
changeGameButton.addEventListener("click", goHome);

paperImage.addEventListener("click", clickPaper);
rocksImage.addEventListener("click", clickRocks);
scissorsImage.addEventListener("click", clickScissors);
alienImage.addEventListener("click", clickAlien);
lizardImage.addEventListener("click", clickLizard);

classicIcons.addEventListener("click", showCorrectChoice);

window.addEventListener("load", showWins);


var newPlayer = new Player({name: "human", token: "🙋🏻‍♀️", wins: 0})
var newComputer = new Player({name: "computer", token: "💻", wins: 0})
var game = new Game()

var computerChoiceClassic;
var playerChoiceClassic;


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
  hideEmojis(alienImage);
  hideEmojis(lizardImage);
  hideVisibility(chooseGameHeadline);
  showVisibility(fighterChoice);
  showVisibility(changeGameButton);
  hideVisibility(winnerAnnounce);
  showEmojis(classicIcons)
};

function playDifficult() {
  game.chooseGame("difficult");
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  showEmojis(paperImage);
  showEmojis(rocksImage);
  showEmojis(scissorsImage);
  showEmojis(alienImage);
  showEmojis(lizardImage);
  hideVisibility(chooseGameHeadline);
  showVisibility(fighterChoice);
  showVisibility(changeGameButton);
  showVisibility(winnerAnnounce);
  showVisibility(classicIcons)
};

function goHome() {
  showVisibility(classicGameButton);
  showVisibility(difficultGameButton);
  showVisibility(gameButtons)
  hideVisibility(classicIcons)
  showVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  hideVisibility(changeGameButton);
  winnerAnnounce.innerText = "";
  refresh();
};

function refresh() {
  game.choices = ["Rocks", "Paper", "Scissors"];
};

function gameView() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  hideVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  showVisibility(changeGameButton);
};

function getRandomChoiceClassic() {
  for(i = 0; i < game.choices.length; i++) {
  var randomChoiceClassic = Math.floor(Math.random() * game.choices.length);
  computerChoiceClassic = game.choices[randomChoiceClassic]
  }
    return computerChoiceClassic;
};

function clickPaper() {
  {playerChoiceClassic = "Paper"}
  playGame();
};

function clickRocks() {
  {playerChoiceClassic = "Rocks"}
  playGame();
};

function clickScissors() {
  {playerChoiceClassic = "Scissors"}
  playGame();
};

function clickAlien() {
  {playerChoiceClassic = "Alien"}
  playGame();
};

function clickLizard() {
  {playerChoiceClassic = "Lizard"}
  playGame();
};

function playGame() {
  hideVisibility(fighterChoice)
  showVisibility(winnerAnnounce)
  computerChoiceClassic = getRandomChoiceClassic();
  if (playerChoiceClassic === "Paper" && (computerChoiceClassic === "Rocks" || computerChoiceClassic === "Alien")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
    game.player.retrieveWinsFromStorage()
    game.player.wins++
    game.player.saveWinsToStorage()
  } else if (playerChoiceClassic === "Rocks" && (computerChoiceClassic === "Scissors" || computerChoiceClassic === "Lizard")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
    game.player.retrieveWinsFromStorage()
    game.player.wins++
    game.player.saveWinsToStorage()
  } else if (playerChoiceClassic === "Scissors" && (computerChoiceClassic === "Paper" || computerChoiceClassic === "Lizard")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
    game.player.retrieveWinsFromStorage()
    game.player.wins++
    game.player.saveWinsToStorage()
  } else if (playerChoiceClassic === "Alien" && (computerChoiceClassic === "Rocks" || computerChoiceClassic === "Scissors")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
    game.player.retrieveWinsFromStorage()
    game.player.wins++
    game.player.saveWinsToStorage()
  } else if (playerChoiceClassic === "Lizard" && (computerChoiceClassic === "Alien" || computerChoiceClassic === "Paper")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
    game.player.retrieveWinsFromStorage()
    game.player.wins++
    game.player.saveWinsToStorage()
  } else if (playerChoiceClassic === computerChoiceClassic) {
    winnerAnnounce.innerText = `It's a draw`;
  } else {
    winnerAnnounce.innerText = `${computerChoiceClassic} beats ${playerChoiceClassic}. You lost this round.`;
    game.computer.retrieveWinsFromStorage()
    game.computer.wins++
    game.computer.saveWinsToStorage()
  }
  showChoices();
  showWins();
  setTimeout(resetBoard, 1500);
};

function showChoices() {
  showCorrectChoice();
  showPlayerChoice();
};

function showCorrectChoice() {
  hideVisibility(gameButtons)
  hideVisibility(classicIcons)
  showVisibility(classicSelected)
  console.log(computerChoiceClassic)
  console.log(playerChoiceClassic)
  if (computerChoiceClassic === "Rocks") {
    computerPlace.src = rocksShow;
  } else if (computerChoiceClassic === "Paper") {
    computerPlace.src = paperShow;
  } else if (computerChoiceClassic === "Scissors") {
    computerPlace.src = scissorsShow;
  } else if (computerChoiceClassic === "Lizard") {
    computerPlace.src = lizardShow;
  } else if (computerChoiceClassic === "Alien") {
    computerPlace.src = alienShow;
  }
};

function showPlayerChoice() {
  showVisibility(classicSelected)
  if (playerChoiceClassic === "Rocks") {
    personPlace.src = rocksShow;
  } else if (playerChoiceClassic === "Paper") {
    personPlace.src = paperShow;
  } else if (playerChoiceClassic === "Scissors") {
    personPlace.src = scissorsShow;
  } else if (playerChoiceClassic === "Lizard") {
    personPlace.src = lizardShow;
  } else if (playerChoiceClassic === "Alien") {
    personPlace.src = alienShow;
  }
};

function resetBoard() {
   hideVisibility(classicSelected)
   showVisibility(fighterChoice)
   winnerAnnounce.innerText = "";
   hideVisibility(winnerAnnounce);
   if (game.type === "difficult") {
     playDifficult();
   } else {
     playClassic();
 }
};

function showWins() {
  game.player.retrieveWinsFromStorage()
  game.computer.retrieveWinsFromStorage()
  humanWins.innerText = game.player.wins
  computerWins.innerText = game.computer.wins
};
