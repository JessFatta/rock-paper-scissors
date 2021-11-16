var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var changeGameButton = document.querySelector(".change-game-button");

var paperImage = document.querySelector(".paper-image");
var paperShow = "./assets/happy-paper.png"
// var paperSelected = document.querySelector(".paper-image");
// var paperSelectedDifficult = document.querySelector(".paper-selected-difficult");

var rocksImage = document.querySelector(".rocks-image");
var rocksShow = "./assets/happy-rocks.png"
// var rocksSelected = document.querySelector(".rocks-image");
// var rocksSelectedDifficult = document.querySelector(".rocks-selected-difficult");

var scissorsImage = document.querySelector(".scissors-image");
var scissorsShow = "./assets/happy-scissors.png"
// var scissorsSelected = document.querySelector(".scissors-image");
// var scissorsSelectedDifficult = document.querySelector(".scissors-selected-difficult");
var alienImage = document.querySelector(".alien-image");
var alienShow = "./assets/happy-alien.png"
// var alienSelected = document.querySelector(".alien-image");
var lizardImage = document.querySelector(".lizard-image");
var lizardShow = "./assets/lizard.png"
// var lizardSelected = document.querySelector(".lizard-image");


var fighterChoice = document.querySelector(".fighter");
var winnerAnnounce = document.querySelector(".winner-announce");
var chooseGameHeadline = document.querySelector(".choose-game-headline");

var classicIcons = document.querySelector(".classic-icons");
var classicSelected = document.querySelector(".classic-selected");
var classicShown = document.querySelector(".classic-shown");
var difficultIcons = document.querySelector(".difficult-icons");
var difficultSelected = document.querySelector(".difficult-selected");
var gameButtons = document.querySelector(".game-buttons");

var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");
var personPlace = document.querySelector(".person");
var computerPlace = document.querySelector(".computer");


classicGameButton.addEventListener("click", playClassic);
difficultGameButton.addEventListener("click", playDifficult);
changeGameButton.addEventListener("click", goHome);

//paperImage.addEventListener("click", playGame);
paperImage.addEventListener("click", clickPaper);
//paperSelectedDifficult.addEventListener("click", clickPaperDifficult);
//rocksImage.addEventListener("click", playGame);
rocksImage.addEventListener("click", clickRocks);
//rocksSelectedDifficult.addEventListener("click", clickRocksDifficult);
//scissorsImage.addEventListener("click", playGame);
scissorsImage.addEventListener("click", clickScissors);
//scissorsSelectedDifficult.addEventListener("click", clickScissorsDifficult);
//alienImage.addEventListener("click", playDifficultGame);
alienImage.addEventListener("click", clickAlien);
//lizardImage.addEventListener("click", playDifficultGame);
lizardImage.addEventListener("click", clickLizard);

classicIcons.addEventListener("click", showCorrectChoice);
//classicIcons.addEventListener("click", showCorrectChoiceDifficult);


var newPlayer = new Player({name: "human", token: "🙋🏻‍♀️", wins: 0, player: playerChoiceClassic})
// var newPlayerDifficult = new Player({name: "human", token: "🙋🏻‍♀️", wins: 0, player: playerChoiceDifficult})

var newComputer = new Player({name: "computer", token: "💻", wins: 0, computer: computerChoiceClassic})
// var newComputerDifficult = new Player({name: "computer", token: "💻", wins: 0, computer: computerChoiceDifficult})
var game = new Game()

var computerChoiceClassic;
//var computerChoiceDifficult;
var playerChoiceClassic;
//var playerChoiceDifficult;
//playerChoiceClassic = ["Rocks", "Scissors", "Paper"];
//playerChoiceDifficult = ["Rocks", "Scissors", "Paper", "Alien", "Lizard"];
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
  //game.type = "classic";

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
  //hideEmojis(classicSelected)
};

function playDifficult() {
  game.chooseGame("difficult")
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
//  showEmojis(difficultIcons);
  hideVisibility(winnerAnnounce);
//  showEmojis(difficultIcons);
//  hideEmojis(difficultSelected);
  showVisibility(classicIcons)
  //hideVisibility(classicSelected)
};

function goHome() {
  showVisibility(classicGameButton);
  showVisibility(difficultGameButton);
  hideVisibility(classicIcons)
  showVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  hideVisibility(changeGameButton);
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

function getRandomChoiceClassic() {
// var choicesClassic = ["Rocks", "Paper", "Scissors"];
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

// function clickPaperDifficult() {
//   {playerChoiceDifficult = "Paper"}
//   playDifficultGame();
// };
//
// function clickRocksDifficult() {
//   {playerChoiceDifficult = "Rocks"}
//   playDifficultGame();
// };
//
// function clickScissorsDifficult() {
//   {playerChoiceDifficult = "Scissors"}
//   playDifficultGame();
// };

function clickAlien() {
  {playerChoiceDifficult = "Alien"}
  playGame();
};

function clickLizard() {
  {playerChoiceDifficult = "Lizard"}
  playGame();
};

function playGame() {
  //playClassic();
  //hideVisibility(classicIcons)
  // hideVisibility(fighterChoice)
  // showVisibility(winnerAnnounce)
  computerChoiceClassic = getRandomChoiceClassic();
  if (playerChoiceClassic === "Paper" && (computerChoiceClassic === "Rocks" || computerChoiceClassic === "Alien")) {
      winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  } else if (playerChoiceClassic === "Rocks" && (computerChoiceClassic === "Scissors" || computerChoiceClassic === "Lizard")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  } else if (playerChoiceClassic === "Scissors" && (computerChoiceClassic === "Paper" || computerChoiceClassic === "Lizard")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  } else if (playerChoiceClassic === "Alien" && (computerChoiceClassic === "Rocks" || computerChoiceClassic === "Scissors")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  } else if (playerChoiceClassic === "Lizard" && (computerChoiceClassic === "Alien" || computerChoiceClassic === "Paper")) {
    winnerAnnounce.innerText = `${playerChoiceClassic} beats ${computerChoiceClassic}. You won this round!`;
  } else if (playerChoiceClassic === computerChoiceClassic) {
      winnerAnnounce.innerText = `It's a draw`;
  } else {
    winnerAnnounce.innerText = `${computerChoiceClassic} beats ${playerChoiceClassic}. You lost this round.`;
  }
  showChoices();
  setTimeout(resetBoard, 3000);
};

function showCorrectChoice() {
  hideVisibility(gameButtons)
  hideVisibility(classicIcons)
  showVisibility(classicSelected)
  //console.log(computerChoiceClassic)
  //console.log(playerChoiceClassic)
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
  //showPlayerChoice();
};

function showPlayerChoice() {
  showVisibility(classicSelected)
  //hideVisibility(classicIcons);
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
  //setTimeout(resetBoard, 2000)
  //resetBoard();
};

function showChoices() {
  showCorrectChoice();
  showPlayerChoice();
}

function resetBoard() {
   hideVisibility(classicSelected)
   if (game.type === "classic") {
     playClassic();
   } else if (game.type === "difficult") {
     playDifficult();
   }

};


// function getRandomChoiceDifficult() {
// var choicesDifficult = ["Rocks", "Paper", "Scissors", "Alien", "Lizard"];
//   for(i = 0; i < choicesDifficult.length; i++) {
//   var randomChoiceDifficult = Math.floor(Math.random() * choicesDifficult.length);
//   computerChoiceDifficult = choicesDifficult[randomChoiceDifficult]
//   }
//     return computerChoiceDifficult;
// };
//
// function playDifficultGame(player, computer) {
//   playDifficult();
//   // hideVisibility(classicIcons)
//   // hideVisibility(fighterChoice)
//   // showVisibility(winnerAnnounce)
//   computerChoiceDifficult = getRandomChoiceDifficult();
//   if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Rocks") {
//       winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//       // humanWins.innerText = `${newPlayer.parsedWins++}`;
//     //  humanWins.innerText = newPlayer.retrieveWinsFromStorage();
//   } else if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Scissors") {
//       winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
//   } else if (playerChoiceDifficult === computerChoiceDifficult) {
//       winnerAnnounce.innerText = `It's a draw`;
//   // }
//   // if (playerChoiceDifficult === "Rocks" && computerChoiceDifficult === "Rocks") {
//   //   winnerAnnounce.innerText = `It's a draw`;
//   } else if (playerChoiceDifficult === "Rocks" && computerChoiceDifficult === "Scissors") {
//     winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   } else if (playerChoiceDifficult === "Rocks" && computerChoiceDifficult === "Paper") {
//     winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
//   // }
//   // if (playerChoiceDifficult === "Scissors" && computerChoiceDifficult === "Scissors") {
//   //   winnerAnnounce.innerText = `It's a draw`;
// } else if (playerChoiceDifficult === "Scissors" && computerChoiceDifficult === "Rocks") {
//     winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
//   } else if (playerChoiceDifficult === "Scissors" && computerChoiceDifficult === "Paper") {
//     winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   } else if (playerChoiceDifficult === "Alien" && computerChoiceDifficult === "Rocks") {
//     winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   } else if (playerChoiceDifficult === "Alien" && computerChoiceDifficult === "Scissors") {
//     winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   // }
//   // if (playerChoiceDifficult === "Alien" && computerChoiceDifficult === "Alien") {
//   //    winnerAnnounce.innerText = `It's a draw`;
// } else if (playerChoiceDifficult === "Paper" && computerChoiceDifficult === "Alien") {
//      winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   } else if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Alien") {
//        winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   } else if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Paper") {
//        winnerAnnounce.innerText = `${playerChoiceDifficult} beats ${computerChoiceDifficult}. You won this round!`;
//   // }
//   // if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Lizard") {
//   //      winnerAnnounce.innerText = `It's a draw`;
// } else if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Scissors") {
//        winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
//   } else if (playerChoiceDifficult === "Lizard" && computerChoiceDifficult === "Rocks") {
//        winnerAnnounce.innerText = `${computerChoiceDifficult} beats ${playerChoiceDifficult}. You lost this round.`;
//   }
//   showCorrectChoiceDifficult();
// };
//
//
// function showCorrectChoiceDifficult() {
// //hideVisibility(classicIcons)
// //showVisibility(winnerAnnounce)
// //hideVisibility(classicSelected)
// hideVisibility(gameButtons)
// hideVisibility(classicIcons)
// showVisibility(classicSelected)
//
//   console.log(computerChoiceDifficult)
//   console.log(playerChoiceDifficult)
//   if (computerChoiceDifficult === "Rocks") {
//    difficultSelected.innerHTML = `${rocksShow}`;
//   }
//   if (computerChoiceDifficult === "Paper") {
//   difficultSelected.innerHTML = `${paperShow}`;
//   }
//   if (computerChoiceDifficult === "Scissors") {
//   difficultSelected.innerHTML = `${scissorsShow}`;
//   }
//   if (computerChoiceDifficult === "Lizard") {
//   difficultSelected.innerHTML = `${lizardShow}`;
//   }
//   if (computerChoiceDifficult === "Alien") {
//   difficultSelected.innerHTML = `${alienShow}`;
//   }
//   showPlayerChoiceDifficult();
// };
//
//
// function showPlayerChoiceDifficult() {
// //  hideVisibility(difficultIcons);
// showVisibility(classicSelected)
// //  hideVisibility(classicIcons)
//   //showVisibility(winnerAnnounce)
//   if (playerChoiceDifficult === "Rocks") {
//     difficultSelected.innerHTML += `${rocksShow}`;
//   }
//   if (playerChoiceDifficult === "Paper") {
//     difficultSelected.innerHTML += `${paperShow}`;
//   }
//   if (playerChoiceDifficult === "Scissors") {
//     difficultSelected.innerHTML += `${scissorsShow}`;
//   }
//   if (playerChoiceDifficult === "Lizard") {
//     difficultSelected.innerHTML += `${lizardShow}`;
//   }
//   if (playerChoiceDifficult === "Alien") {
//     difficultSelected.innerHTML += `${alienShow}`;
// }
//   setTimeout(resetBoardDifficult, 2000)
// };
//
// function resetBoardDifficult() {
//   console.log("reset")
//      hideVisibility(classicSelected)
//   playDifficult();
//  //setTimeout(playDifficult, 5000)
//  // hideVisibility(classicSelected)
//  //  showVisibility(difficultSelected)
//  //  hideVisibility(chooseGameHeadline)
//   // showVisibility(classicIcons)
//   //  hideVisibility(classicSelected)
//   //  hideVisibility(chooseGameHeadline)
// };
//

// function updateWins(player) {
//   player.wins++
//   player.saveWinsToStorage()
//   var playerWins = player.retrieveWinsFromStorage()
//   showWins(playerWins)
// }
//
// function showWins(player) {
//   if (player.name === "human") {
//     humanWins.innerText = `${newPlayer.parsedWins++};`
//   }
//   if (player2.name === "computer") {
//     computerWins.innerText = `${newPlayer2.parsedWins++}`
//   }
// };

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
