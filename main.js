var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var changeGameButton = document.querySelector(".change-game-button");

var paperImage = document.querySelector(".paper-image");
var paperShow = `<img src="./assets/happy-paper.png" class="paper-image"/>`
var paperSelected = document.querySelector(".paper-image");
var rocksImage = document.querySelector(".rocks-image");
var rocksShow = `<img src="./assets/happy-rocks.png" class="rocks-image"/>`
var rocksSelected = document.querySelector(".rocks-image");
var scissorsImage = document.querySelector(".scissors-image");
var scissorsShow = `<img src="./assets/happy-scissors.png" class="scissors-image"/>`
var scissorsSelected = document.querySelector(".scissors-image");

var fighterChoice = document.querySelector(".fighter");
var winnerAnnounce = document.querySelector(".winner-announce");
var chooseGameHeadline = document.querySelector(".choose-game-headline");

var classicIcons = document.querySelector(".classic-icons");
var classicSelected = document.querySelector(".classic-selected");


classicGameButton.addEventListener("click", playClassic);
difficultGameButton.addEventListener("click", playDifficult);
changeGameButton.addEventListener("click", goHome);

paperImage.addEventListener("click", playGame);
paperSelected.addEventListener("click", clickPaper);
rocksImage.addEventListener("click", playGame);
rocksSelected.addEventListener("click", clickRocks);
scissorsImage.addEventListener("click", playGame);
scissorsSelected.addEventListener("click", clickScissors);

classicIcons.addEventListener("click", showCorrectChoice);


var computerChoice;
var playerChoice;
var playerChoice = ["Rocks", "Scissors", "Paper"]
newPlayer = new Player(playerChoice)

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
  showVisibility(changeGameButton);
};

function playDifficult() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  showEmojis(paperImage);
  showEmojis(rocksImage);
  showEmojis(scissorsImage);
  hideVisibility(chooseGameHeadline);
  showVisibility(fighterChoice);
  showVisibility(changeGameButton);
};

function goHome() {
  showEmojis(classicGameButton);
  showEmojis(difficultGameButton);
  hideEmojis(paperImage);
  hideEmojis(rocksImage);
  hideEmojis(scissorsImage);
  showVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  hideVisibility(changeGameButton);
};

function gameView() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  hideVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  showVisibility(changeGameButton);
};

function getRandomChoice() {
var choices= ["Rocks", "Paper", "Scissors"]
  for(i = 0; i < choices.length; i++) {
  var randomChoice = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomChoice]
    }
    return computerChoice;
};

function clickPaper() {
  {playerChoice = "Paper"}
  playGame();

};

function clickRocks() {
  {playerChoice = "Rocks"}
  playGame();
};

function clickScissors() {
  {playerChoice = "Scissors"}
  playGame();
};

function playGame(player, computer) {
  hideVisibility(classicIcons)
  hideVisibility(fighterChoice)
  showVisibility(winnerAnnounce)
  computerChoice = getRandomChoice();
  if (playerChoice === "Paper" && computerChoice === "Rocks") {
      winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
      winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
  } else if (playerChoice === "Paper" && computerChoice === "Paper") {
      winnerAnnounce.innerText += `It's a draw`;
  } else if (playerChoice === "Rocks" && computerChoice === "Rocks") {
    winnerAnnounce.innerText += `It's a draw`;
  } else if (playerChoice === "Rocks" && computerChoice === "Scissors") {
    winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
  } else if (playerChoice === "Rocks" && computerChoice === "Paper") {
    winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
  } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    winnerAnnounce.innerText += `It's a draw`;
  } else if (playerChoice === "Scissors" && computerChoice === "Rocks") {
    winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
  }
 };

function showCorrectChoice() {
hideVisibility(classicIcons)
  console.log(computerChoice)
  console.log(playerChoice)
  if (computerChoice === "Rocks") {
   classicSelected.innerHTML += `
   ${rocksShow}`;
  } else if (computerChoice === "Paper") {
  classicSelected.innerHTML += `
  ${paperShow}`;
  } else if
  (computerChoice === "Scissors") {
  classicSelected.innerHTML += `
  ${scissorsShow}`;
  }
  showPlayerChoice();
};

function showPlayerChoice() {
  hideVisibility(classicIcons);
  if (playerChoice === "Rocks") {
  classicSelected.innerHTML += `${rocksShow}`;
  } else if (playerChoice === "Paper") {
  classicSelected.innerHTML += `${paperShow}`;
  } else if (playerChoice === "Scissors") {
  classicSelected.innerHTML += `${scissorsShow}`;
  }
 //playAgain();
};


// function playAgain() {
// window.setTimeout(getRandomChoice(), 2000)
// }
