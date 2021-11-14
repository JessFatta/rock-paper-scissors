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
var alienImage = document.querySelector(".alien-image");
var alienShow = `<img src="./assets/happy-alien.png"/>`
var alienSelected = document.querySelector(".alien-selected")
var lizardImage = document.querySelector(".lizard-image");
var lizardShow = `<img src="./assets/lizard.png"/>`
var lizardSelected = document.querySelector(".lizard-selected");

var fighterChoice = document.querySelector(".fighter");
var winnerAnnounce = document.querySelector(".winner-announce");
var chooseGameHeadline = document.querySelector(".choose-game-headline");

var classicIcons = document.querySelector(".classic-icons");
var classicSelected = document.querySelector(".classic-selected");
var classicShown = document.querySelector(".classic-shown");



classicGameButton.addEventListener("click", playClassic);
difficultGameButton.addEventListener("click", playDifficult);
changeGameButton.addEventListener("click", goHome);

paperImage.addEventListener("click", playGame);
paperSelected.addEventListener("click", clickPaper);
rocksImage.addEventListener("click", playGame);
rocksSelected.addEventListener("click", clickRocks);
scissorsImage.addEventListener("click", playGame);
scissorsSelected.addEventListener("click", clickScissors);
alienImage.addEventListener("click", playDifficult);
lizardImage.addEventListener("click", playDifficult);

classicIcons.addEventListener("click", showCorrectChoice);


var computerChoice;
var playerChoice;
//var playerChoice2;
var playerChoice = ["Rocks", "Scissors", "Paper"]
newPlayer = new Player(playerChoice)
//newPlayer2 = new Player(playerChoice)

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
  hideVisibility(winnerAnnounce);
  //hideEmojis(playerChoice, computerChoice)
  showEmojis(classicIcons)
};


function playDifficult() {
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
//  hideVisibility(playerChoice);
//  hideVisibility(computerChoice);
  hideVisibility(playGame)
};

function gameView() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  hideVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  showVisibility(changeGameButton);
};

function getRandomChoice() {
var choices= ["Rocks", "Paper", "Scissors"];
  for(i = 0; i < choices.length; i++) {
  var randomChoice = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomChoice]
    }
    return computerChoice;
};

// function getRandomChoiceDifficult() {
// var choices2= ["Rocks", "Paper", "Scissors", "Alien", "Lizard"];
//   for(i = 0; i < choices2.length; i++) {
//   var randomChoice2 = Math.floor(Math.random() * choices2.length);
//   computerChoice2 = choices2[randomChoice2]
//     }
//     return computerChoice2;
// };


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

function clickAlien() {
  {playerChoice = "Alien"}
  playGame();
};

function clickLizard() {
  {playerChoice = "Lizard"}
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
  //console.log(computerChoice2)
  console.log(playerChoice)
  if (computerChoice === "Rocks") {
   classicSelected.innerHTML += `
   ${rocksShow}`;
  } else if (computerChoice === "Paper") {
  classicSelected.innerHTML += `
  ${paperShow}`;
  } else if (computerChoice === "Scissors") {
  classicSelected.innerHTML += `
  ${scissorsShow}`;
} else if (computerChoice2 === "Lizard") {
  classicSelected.innerHTML += `${lizardShow}`;
} else if (computerChoice2 === "Alien") {
  classicSelected.innerHTML += `${alienShow}`;
}
  showPlayerChoice();
};

function showPlayerChoice() {
  hideVisibility(classicIcons);
  if (playerChoice === "Rocks") {
  classicSelected.innerHTML += `${rocksShow}`;
  setTimeout(playClassic, 4000)
  } else if (playerChoice === "Paper") {
  classicSelected.innerHTML += `${paperShow}`;
  setTimeout(playClassic, 4000)
  } else if (playerChoice === "Scissors") {
  classicSelected.innerHTML += `${scissorsShow}`;
  setTimeout(playClassic, 4000)
  } else if (computerChoice === "Lizard") {
    classicSelected.innerHTML += `${lizardShow}`;
    setTimeout(playClassic, 4000)
  } else if (computerChoice === "Alien") {
    classicSelected.innerHTML += `${alienShow}`;
  setTimeout(playClassic, 4000)
  }
  newGame()
};

function newGame() {
 hideVisibility(classicShown)

}

 // var timeout = setTimeout(playClassic, 4000)
// function time() {
//   setTimeout(4000)
//   playClassic();
  //showEmojis(classicIcons)
//  hideEmojis(paperShow)
//  hideVisibility(classicSelected)
  //hideVisibility(fighterChoice)
 // hideVisibility(winnerAnnounce)
//}



// function playDifficultGame(player, computer) {
//   hideVisibility(classicIcons)
//   hideVisibility(fighterChoice)
//   showVisibility(winnerAnnounce)
//   computerChoice2 = getRandomChoiceDifficult();
//   if (playerChoice === "Alien" && computerChoice2 === "Rocks") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   } else if (playerChoice === "Alien" && computerChoice2 === "Scissors") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   } else if (playerChoice === "Alien" && computerChoice2 === "Alien") {
//     winnerAnnounce.innerText += `It's a draw`;
//   } else if (playerChoice === "Paper" && computerChoice2 === "Alien") {
//     winnerAnnounce.innerText += `${computerChoice2} beats ${playerChoice}. You lost this round.`;
//   } else if (playerChoice === "Lizard" && computerChoice2 === "Alien") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   } else if (playerChoice === "Lizard" && computerChoice2 === "Paper") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   } else if (playerChoice === "Lizard" && computerChoice2 === "Lizard") {
//     winnerAnnounce.innerText += `It's a draw`;
//   } else if (playerChoice === "Lizard" && computerChoice2 === "Scissors") {
//     winnerAnnounce.innerText += `${computerChoice2} beats ${playerChoice}. You lost this round.`;
//   } else if (playerChoice === "Lizard" && computerChoice2 === "Rock") {
//     winnerAnnounce.innerText += `${computerChoice2} beats ${playerChoice}. You lost this round.`;
//   } else if (playerChoice === "Paper" && computerChoice2 === "Rocks") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   } else if (playerChoice === "Paper" && computerChoice2 === "Scissors") {
//     winnerAnnounce.innerText += `${computerChoice2} beats ${playerChoice}. You lost this round.`;
//   } else if (playerChoice === "Paper" && computerChoice2 === "Paper") {
//     winnerAnnounce.innerText += `It's a draw`;
//   } else if (playerChoice === "Rocks" && computerChoice2 === "Rocks") {
//     winnerAnnounce.innerText += `It's a draw`;
//   } else if (playerChoice === "Rocks" && computerChoice2 === "Scissors") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   } else if (playerChoice === "Rocks" && computerChoice2 === "Paper") {
//     winnerAnnounce.innerText += `${computerChoice2} beats ${playerChoice}. You lost this round.`;
//   } else if (playerChoice === "Scissors" && computerChoice2 === "Scissors") {
//     winnerAnnounce.innerText += `It's a draw`;
//   } else if (playerChoice === "Scissors" && computerChoice2 === "Rocks") {
//     winnerAnnounce.innerText += `${computerChoice2} beats ${playerChoice}. You lost this round.`;
//   } else if (playerChoice === "Scissors" && computerChoice2 === "Paper") {
//     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice2}. You won this round!`;
//   }
//   showCorrectChoice();
//   showPlayerChoice();
// };

// function playAgain() {
// window.setTimeout(clickPaper(), 2000)
// }
