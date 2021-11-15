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

var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");


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

var newPlayer = new Player({name: "human", token: "🙋🏻‍♀️", player: playerChoice})
var newPlayer2 = new Player({name: "computer", token: "💻", computer: computerChoice})

var computerChoice;
var playerChoice;
var playerChoice = ["Rocks", "Scissors", "Paper"];
var game = new Game({type: "classic" || "difficult", choices:["Rocks", "Paper", "Scissors"]})


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
  showEmojis(classicIcons)
  hideEmojis(classicSelected)
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
  //hideVisibility(playGame)
  hideVisibility(classicSelected)
  hideVisibility(classicShown)
  classicShown.innerHTML = "";
  classicSelected.innerHTML = "";
  winnerAnnounce.innerText = "";
};

function gameView() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  hideVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  showVisibility(changeGameButton);
};

function getRandomChoice() {
var choices = ["Rocks", "Paper", "Scissors"];
  for(i = 0; i < choices.length; i++) {
  var randomChoice = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomChoice]
  }
    return computerChoice;
};

// function getRandomChoiceDifficult() {
//   if (this.type === "difficult") {
//     choices.push("Lizard", "Alien")
//     playerChoice.push("Lizard", "Alien")
//   }
//   for(i = 0; i < choices.length; i++) {
//   var randomChoice = Math.floor(Math.random() * choices.length);
//   computerChoice = choices[randomChoice]
//     }
//     return computerChoice;
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
  playDifficultGame();
};

function clickLizard() {
  {playerChoice = "Lizard"}
  playDifficultGame();
};

function playGame(player, computer) {
  hideVisibility(classicIcons)
  hideVisibility(fighterChoice)
  showVisibility(winnerAnnounce)
  computerChoice = getRandomChoice();
  if (playerChoice === "Paper" && computerChoice === "Rocks") {
      winnerAnnounce.innerText = `${playerChoice} beats ${computerChoice}. You won this round!`;
      // humanWins.innerText = `${newPlayer.parsedWins++}`;
    //  humanWins.innerText = newPlayer.retrieveWinsFromStorage();
  };
  if (playerChoice === "Paper" && computerChoice === "Scissors") {
      winnerAnnounce.innerText = `${computerChoice} beats ${playerChoice}. You lost this round.`;
  };
  if (playerChoice === "Paper" && computerChoice === "Paper") {
      winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoice === "Rocks" && computerChoice === "Rocks") {
    winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoice === "Rocks" && computerChoice === "Scissors") {
    winnerAnnounce.innerText = `${playerChoice} beats ${computerChoice}. You won this round!`;
  }
  if (playerChoice === "Rocks" && computerChoice === "Paper") {
    winnerAnnounce.innerText = `${computerChoice} beats ${playerChoice}. You lost this round.`;
  }
  if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoice === "Scissors" && computerChoice === "Rocks") {
    winnerAnnounce.innerText = `${computerChoice} beats ${playerChoice}. You lost this round.`;
  }
  if (playerChoice === "Scissors" && computerChoice === "Paper") {
    winnerAnnounce.innerText = `${playerChoice} beats ${computerChoice}. You won this round!`;
  }
}

function showCorrectChoice() {
hideVisibility(classicIcons)
  console.log(computerChoice)
  console.log(playerChoice)
  if (computerChoice === "Rocks") {
   classicSelected.innerHTML = `${rocksShow}`;
  }
  if (computerChoice === "Paper") {
  classicSelected.innerHTML = `${paperShow}`;
  }
  if (computerChoice === "Scissors") {
  classicSelected.innerHTML = `${scissorsShow}`;
  }
  if (computerChoice === "Lizard") {
  classicSelected.innerHTML = `${lizardShow}`;
  }
  if (computerChoice === "Alien") {
  classicSelected.innerHTML = `${alienShow}`;
  }
  showPlayerChoice();
};

function showPlayerChoice() {
  hideVisibility(classicIcons);
  if (playerChoice === "Rocks") {
    classicSelected.innerHTML += `${rocksShow}`;
  }
  if (playerChoice === "Paper") {
    classicSelected.innerHTML += `${paperShow}`;
  }
  if (playerChoice === "Scissors") {
    classicSelected.innerHTML += `${scissorsShow}`;
  }
  if (computerChoice === "Lizard") {
    classicSelected.innerHTML += `${lizardShow}`;
  }
  if (computerChoice === "Alien") {
    classicSelected.innerHTML += `${alienShow}`;
}
  resetBoard();
};

function resetBoard() {
  console.log("reset")
 setTimeout(playClassic, 2000)
  showVisibility(classicSelected)
  hideVisibility(chooseGameHeadline)
  //classicShown.innerHTML = "";
//classicSelected.innerHTML = "";
//  playClassic();
  //winnerAnnounce.innerText = "";
  //showVisibility(fighterChoice);
  //clearTimeout();
};


function updateWins(player) {
  player.wins++
  player.saveWinsToStorage()
  var playerWins = player.retrieveWinsFromStorage()
  showWins(playerWins)
}

function showWins(player) {
  if (player.name === "human") {
    humanWins.innerText = `${newPlayer.parsedWins++};`
  }
  if (player2.name === "computer") {
    computerWins.innerText = `${newPlayer2.parsedWins++}`
  }
};

// humanWins.innerText = `${newPlayer.parsedWins++}`;

// function playDifficultGame(player, computer) {
//   playGame(player, computer);
//   computerChoice = getRandomChoiceDifficult();
//   if (playerChoice === "Alien" && computerChoice === "Rocks") {
//       winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
//   }
//   if (playerChoice === "Alien" && computerChoice === "Scissors") {  winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
//   }
//   if (playerChoice === "Alien" && computerChoice === "Alien") {
//       winnerAnnounce.innerText += `It's a draw`;
//   }
//   if (playerChoice === "Paper" && computerChoice === "Alien") {
//       winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
//   }
//   if (playerChoice === "Lizard" && computerChoice === "Alien") {
//       winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
//   }
//   if (playerChoice === "Lizard" && computerChoice === "Paper") {
//       winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
//   }
//   if (playerChoice === "Lizard" && computerChoice2 === "Lizard") {
//       winnerAnnounce.innerText += `It's a draw`;
//   }
//   if (playerChoice === "Lizard" && computerChoice === "Scissors") {
//       winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
//   }
//   if (playerChoice === "Lizard" && computerChoice === "Rocks") {
//       winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
//     }
//  };


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
