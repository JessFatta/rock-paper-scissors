var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var paperImage = document.querySelector(".paper-image");
var paperShow = `<img src="./assets/happy-paper.png" class="paper-image"/>`
var rocksImage = document.querySelector(".rocks-image");
var rocksShow = `<img src="./assets/happy-rocks.png" class="rocks-image"/>`
var scissorsImage = document.querySelector(".scissors-image");
var scissorsShow = `<img src="./assets/happy-scissors.png" class="scissors-image"/>`
var fighterChoice = document.querySelector(".fighter");
var chooseGameHeadline = document.querySelector(".choose-game-headline");
var changeGameButton = document.querySelector(".change-game-button");
var classicIcons = document.querySelector(".classic-icons")
var classicSelected = document.querySelector(".classic-selected")
var rocksSelected = document.querySelector(".rocks-image");
var paperSelected = document.querySelector(".paper-image");
var scissorsSelected = document.querySelector(".scissors-image");
var winnerAnnounce = document.querySelector(".winner-announce");


classicGameButton.addEventListener("click", playClassic);
paperImage.addEventListener("click", playGame);
rocksImage.addEventListener("click", playGame);
scissorsImage.addEventListener("click", playGame);
difficultGameButton.addEventListener("click", playDifficult);
classicIcons.addEventListener("click", showCorrectChoice);
changeGameButton.addEventListener("click", goHome);
rocksSelected.addEventListener("click", clickRocks);
paperSelected.addEventListener("click", clickPaper);
scissorsSelected.addEventListener("click", clickScissors);



var computerChoice;
var playerChoice;
//var newPlayer =;

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

// function continuePlay() {
//   gameView();
// }

function getRandomChoice() {
var choices= ["rocks", "paper", "scissors"]
  for(i = 0; i < choices.length; i++) {
  var randomChoice = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomChoice]
    }
    return computerChoice;
};

// function getPlayerChoice() {
var playerChoice = ["rocks", "scissors", "paper"]
// for(i = 0; i < playerChoices.length; i++) {
//   playerChoice = playerChoices[i];
 newPlayer = new Player(playerChoice)
//   }
//   return playerChoice
//   //showPlayerChoice();
//   playGame()
// };

function clickPaper() {
  {playerChoice = "paper"}
  playGame();
  //showPlayerChoice();
  //showCorrectChoice();
}

function clickRocks() {
  {playerChoice = "rocks"}
  playGame();
  //showPlayerChoice();
//  showCorrectChoice();
}

function clickScissors() {
  //showEmojis(scissorsImage);
  {playerChoice = "scissors"}
  playGame();
  //showPlayerChoice();
  //showCorrectChoice();
}

function playGame(player, computer) {
  hideVisibility(classicIcons)
  hideVisibility(fighterChoice)
  showVisibility(winnerAnnounce)
//  var playerChoice = this.playerChoice;
 //newPlayer = new Player(playerChoice)
  computerChoice = getRandomChoice();
// playerChoice = getPlayerChoice();
  if (playerChoice === "paper" && computerChoice === "rocks") {
      winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
      // console.log(playerChoice + " beats " + computerChoice + ". You won this round!");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
      winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
      // console.log(computerChoice + " beats " + playerChoice + ". You lost this round.");
  } else if (playerChoice === "paper" && computerChoice === "paper") {
      winnerAnnounce.innerText += `Its a draw`;
      // console.log("Its a draw");
  } else if (playerChoice === "rocks" && computerChoice === "rocks") {
    winnerAnnounce.innerText += `Its a draw`;
    //  console.log("Its a draw");
  } else if (playerChoice === "rocks" && computerChoice === "scissors") {
    winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
      // console.log(playerChoice + " beats " + computerChoice + ". You won this round.");
  } else if (playerChoice === "rocks" && computerChoice === "paper") {
    winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
      // console.log(computerChoice + " beats " + playerChoice + ". You lost this round.");
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    winnerAnnounce.innerText += `Its a draw`;
      // console.log("Its a draw");
  } else if (playerChoice === "scissors" && computerChoice === "rocks") {
    winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
      // console.log(computerChoice + " beats " + playerChoice + ". You lost this round.");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
      // console.log(playerChoice + " beats " + computerChoice + ". You won this round.");
  }
    //showCorrectChoice();
    //showPlayerChoice();
}

function showCorrectChoice() {
hideVisibility(classicIcons)
//showVisibility(classicSelected)
  console.log(computerChoice)
  //console.log(rocksImage)
  console.log(playerChoice)
  if (computerChoice === "rocks") {
   classicSelected.innerHTML += `
   ${rocksShow}`;
  } else if (computerChoice === "paper") {
  classicSelected.innerHTML += `
  ${paperShow}`;
  } else if
  (computerChoice === "scissors") {
  classicSelected.innerHTML += `
  ${scissorsShow}`;

  }
  showPlayerChoice();
};

function showPlayerChoice() {
  hideVisibility(classicIcons)
  //showVisibility(classicSelected)
  if (playerChoice === "rocks") {
  classicSelected.innerHTML += `${rocksShow}`;
  } else if (playerChoice === "paper") {
  classicSelected.innerHTML += `${paperShow}`;
  } else if (playerChoice === "scissors") {
  classicSelected.innerHTML += `${scissorsShow}`;
  }

}
setTimeout(playClassic(), 3000);
