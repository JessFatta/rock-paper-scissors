var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var changeGameButton = document.querySelector(".change-game-button");

var paperImage = document.querySelector(".paper-image");
var paperShow = `<img src="./assets/happy-paper.png" class="paper-image"/>`
var paperSelected = document.querySelector(".paper-image");
var paperSelectedDifficult = document.querySelector(".paper-image-difficult");

var rocksImage = document.querySelector(".rocks-image");
var rocksShow = `<img src="./assets/happy-rocks.png" class="rocks-image"/>`
var rocksSelected = document.querySelector(".rocks-image");
var rocksSelectedDifficult = document.querySelector(".rocks-image-difficult");

var scissorsImage = document.querySelector(".scissors-image");
var scissorsShow = `<img src="./assets/happy-scissors.png" class="scissors-image"/>`
var scissorsSelected = document.querySelector(".scissors-image");
var scissorsSelectedDifficult = document.querySelector(".scissors-image");
var alienImage = document.querySelector(".alien-image");
var alienShow = `<img src="./assets/happy-alien.png" class="alien-image"/>`
var alienSelected = document.querySelector(".alien-selected");
var lizardImage = document.querySelector(".lizard-image");
var lizardShow = `<img src="./assets/lizard.png" class="lizard-image"/>`
var lizardSelected = document.querySelector(".lizard-selected");


var fighterChoice = document.querySelector(".fighter");
var winnerAnnounce = document.querySelector(".winner-announce");
var chooseGameHeadline = document.querySelector(".choose-game-headline");

var classicIcons = document.querySelector(".classic-icons");
var classicSelected = document.querySelector(".classic-selected");
var classicShown = document.querySelector(".classic-shown");
var difficultIcons = document.querySelector(".difficult-icons");
var difficultSelected = document.querySelector(".difficult-selected");

var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");


classicGameButton.addEventListener("click", playClassic);
difficultGameButton.addEventListener("click", playDifficult);
changeGameButton.addEventListener("click", goHome);

paperImage.addEventListener("click", playGame);
paperSelected.addEventListener("click", clickPaper);
paperSelectedDifficult.addEventListener("click", clickPaperDifficult);
rocksImage.addEventListener("click", playGame);
rocksSelected.addEventListener("click", clickRocks);
rocksSelectedDifficult.addEventListener("click", clickRocksDifficult);
scissorsImage.addEventListener("click", playGame);
scissorsSelected.addEventListener("click", clickScissors);
scissorsSelectedDifficult.addEventListener("click", clickScissorsDifficult);
alienImage.addEventListener("click", playDifficultGame);
alienSelected.addEventListener("click", clickAlien);
lizardImage.addEventListener("click", playDifficultGame);
lizardSelected.addEventListener("click", clickLizard);

classicIcons.addEventListener("click", showCorrectChoice);
difficultIcons.addEventListener("click", showCorrectChoiceDifficult);


var newPlayer = new Player({name: "human", token: "🙋🏻‍♀️", wins: 0, player: playerChoiceClassic})
var newPlayer2 = new Player({name: "human", token: "🙋🏻‍♀️", wins: 0, player: playerChoiceDifficult})

var newPlayer3 = new Player({name: "computer", token: "💻", wins: 0, computer: computerChoiceClassic})
var newPlayer4 = new Player({name: "computer", token: "💻", wins: 0, computer: computerChoiceDifficult})

var computerChoiceClassic;
var computerChoiceDifficult;
var playerChoiceClassic;
var playerChoiceDifficult;
playerChoiceClassic = ["Rocks", "Scissors", "Paper"];
playerChoiceDifficult = ["Rocks", "Scissors", "Paper", "Alien", "Lizard"];
// var game = new Game({type: "classic" || "difficult", choices:["Rocks", "Paper", "Scissors"]})

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
  showEmojis(paperSelectedDifficult);
  showEmojis(rocksSelectedDifficult);
  showEmojis(scissorsSelectedDifficult);
  showEmojis(alienImage);
  showEmojis(lizardImage);
  hideVisibility(chooseGameHeadline);
  showVisibility(fighterChoice);
  showVisibility(changeGameButton);
  showEmojis(difficultIcons);
  hideVisibility(winnerAnnounce)
  showEmojis(difficultIcons)
  hideEmojis(difficultSelected)
  //hideEmojis(classicSelected)
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
var choicesClassic = ["Rocks", "Paper", "Scissors"];
  for(i = 0; i < choicesClassic.length; i++) {
  var randomChoiceClassic = Math.floor(Math.random() * choicesClassic.length);
  computerChoiceClassic = choicesClassic[randomChoiceClassic]
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

function clickPaperDifficult() {
  {playerChoiceDifficult = "Paper"}
  playDifficultGame();
};

function clickRocksDifficult() {
  {playerChoiceDifficult = "Rocks"}
  playDifficultGame();
};

function clickScissorsDifficult() {
  {playerChoiceDifficult = "Scissors"}
  playDifficultGame();
};

function clickAlien() {
  {playerChoiceDifficult = "Alien"}
  playDifficultGame();
};

function clickLizard() {
  {playerChoiceDifficult = "Lizard"}
  playDifficultGame();
};

function playGame(player, computer) {
  hideVisibility(classicIcons)
  hideVisibility(fighterChoice)
  showVisibility(winnerAnnounce)
  computerChoiceClassic = getRandomChoice();
  if (playerChoiceClassic === "Paper" && computerChoiceClassic === "Rocks") {
      winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
      // humanWins.innerText = `${newPlayer.parsedWins++}`;
    //  humanWins.innerText = newPlayer.retrieveWinsFromStorage();
  };
  if (playerChoiceClassic === "Paper" && computerChoiceClassic === "Scissors") {
      winnerAnnounce.innerText = `${computerChoiceClassic} beats ${playerChoiceClassic}. You lost this round.`;
  };
  if (playerChoiceClassic === "Paper" && computerChoiceClassic === "Paper") {
      winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoiceClassic === "Rocks" && computerChoiceClassic === "Rocks") {
    winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoiceClassic === "Rocks" && computerChoiceClassic === "Scissors") {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  }
  if (playerChoiceClassic === "Rocks" && computerChoiceClassic === "Paper") {
    winnerAnnounce.innerText = `${computerChoiceClassic} beats ${playerChoiceClassic}. You lost this round.`;
  }
  if (playerChoiceClassic === "Scissors" && computerChoiceClassic === "Scissors") {
    winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoiceClassic === "Scissors" && computerChoiceClassic === "Rocks") {
    winnerAnnounce.innerText = `${computerChoiceClassic} beats ${playerChoiceClassic}. You lost this round.`;
  }
  if (playerChoiceClassic === "Scissors" && computerChoiceClassic === "Paper") {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  }
  //showCorrectChoice();
}

function showCorrectChoice() {
  hideVisibility(classicIcons)
  console.log(computerChoiceClassic)
  console.log(playerChoiceClassic)
  if (computerChoiceClassic === "Rocks") {
    classicSelected.innerHTML = `${rocksShow}`;
  }
  if (computerChoiceClassic === "Paper") {
    classicSelected.innerHTML = `${paperShow}`;
  }
  if (computerChoiceClassic === "Scissors") {
    classicSelected.innerHTML = `${scissorsShow}`;
  }
  if (computerChoiceClassic === "Lizard") {
    classicSelected.innerHTML = `${lizardShow}`;
  }
  if (computerChoiceClassic === "Alien") {
    classicSelected.innerHTML = `${alienShow}`;
  }
  showPlayerChoice();
};

function showPlayerChoice() {
  hideVisibility(classicIcons);
  if (playerChoiceClassic === "Rocks") {
    classicSelected.innerHTML += `${rocksShow}`;
  }
  if (playerChoiceClassic === "Paper") {
    classicSelected.innerHTML += `${paperShow}`;
  }
  if (playerChoiceClassic === "Scissors") {
    classicSelected.innerHTML += `${scissorsShow}`;
  }
  if (computerChoiceClassic === "Lizard") {
    classicSelected.innerHTML += `${lizardShow}`;
  }
  if (computerChoiceClassic === "Alien") {
    classicSelected.innerHTML += `${alienShow}`;
  }
  resetBoard();
};


function getRandomChoiceDifficult() {
var choicesDifficult = ["Rocks", "Paper", "Scissors", "Alien", "Lizard"];
  for(i = 0; i < choicesDifficult.length; i++) {
  var randomChoiceDifficult = Math.floor(Math.random() * choicesDifficult.length);
  computerChoiceDifficult = choicesDifficult[randomChoiceDifficult]
  }
    return computerChoiceDifficult;
};

function playDifficultGame() {
  hideVisibility(classicIcons)
  hideVisibility(fighterChoice)
  showVisibility(winnerAnnounce)
  computerChoiceDifficult = getRandomChoiceDifficult();
//  playerChoice2 = ["Rocks", "Paper", "Scissors", "Alien", "Lizard"]
  if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Rocks") {
      winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
      // humanWins.innerText = `${newPlayer.parsedWins++}`;
    //  humanWins.innerText = newPlayer.retrieveWinsFromStorage();
  }
  if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Scissors") {
      winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
  }
  if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Paper") {
      winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoiceDifficult === "Rocks" && computerChoiceDifficult === "Rocks") {
    winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoiceDifficult === "Rocks" && computerChoiceDifficult === "Scissors") {
    winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
  }
  if (playerChoiceDifficult === "Rocks" && computerChoiceDifficult === "Paper") {
    winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
  }
  if (playerChoiceDifficult === "Scissors" && computerChoiceDifficult === "Scissors") {
    winnerAnnounce.innerText = `It's a draw`;
  }
  if (playerChoiceDifficult === "Scissors" && computerChoiceDifficult === "Rocks") {
    winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
  }
  if (playerChoiceDifficult === "Scissors" && computerChoiceDifficult === "Paper") {
    winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
  }
  if (playerChoiceDifficult === "Alien" && computerChoiceDifficult === "Rocks") {
    winnerAnnounce.innerText += `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
  }
  if (playerChoiceDifficult === "Alien" && computerChoiceDifficult === "Scissors") {
    winnerAnnounce.innerText += `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
  }
  if (playerChoiceDifficult === "Alien" && computerChoiceDifficult === "Alien") {
     winnerAnnounce.innerText += `It's a draw`;
  }
  if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Alien") {
     winnerAnnounce.innerText += `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
  }
  if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Alien") {
       winnerAnnounce.innerText += `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
  }
  if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Paper") {
       winnerAnnounce.innerText += `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
  }
  if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Lizard") {
       winnerAnnounce.innerText += `It's a draw`;
  }
  if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Scissors") {
       winnerAnnounce.innerText += `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
  }
  if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Rocks") {
       winnerAnnounce.innerText += `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
  }
  showCorrectChoiceDifficult();
};


function showCorrectChoiceDifficult() {
hideVisibility(classicIcons)
  console.log(computerChoiceDifficult)
  console.log(playerChoiceDifficult)
  if (computerChoiceDifficult === "Rocks") {
   classicSelected.innerHTML = `${rocksShow}`;
  }
  if (computerChoiceDifficult === "Paper") {
  classicSelected.innerHTML = `${paperShow}`;
  }
  if (computerChoiceDifficult === "Scissors") {
  classicSelected.innerHTML = `${scissorsShow}`;
  }
  if (computerChoiceDifficult === "Lizard") {
  classicSelected.innerHTML = `${lizardShow}`;
  }
  if (computerChoiceDifficult === "Alien") {
  classicSelected.innerHTML = `${alienShow}`;
  }
  showPlayerChoiceDifficult();
};


function showPlayerChoiceDifficult() {
  hideVisibility(classicIcons);
  if (playerChoiceDifficult === "Rocks") {
    classicSelected.innerHTML += `${rocksShow}`;
  }
  if (playerChoiceDifficult === "Paper") {
    classicSelected.innerHTML += `${paperShow}`;
  }
  if (playerChoiceDifficult === "Scissors") {
    classicSelected.innerHTML += `${scissorsShow}`;
  }
  if (playerChoiceDifficult === "Lizard") {
    classicSelected.innerHTML += `${lizardShow}`;
  }
  if (playerChoiceDifficult === "Alien") {
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
