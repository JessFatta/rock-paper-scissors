class Player {
  constructor(name, token, wins, playerChoice) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.playerChoice = playerChoice;
   //this.computerChoice = computerChoice;
  }


//setTimeout(playClassic(), 1000){

//}

  saveWinsToStorage() {
  // local storage and increment wins
  }

  retrieveWinsFromStorage() {
    // local storage for data persistance -- maybe not necessary?
  }

  // takeTurn() {
  //   setTimeout(playClassic(), 4000)
  // }

    // function getRandomChoice() {
    // var choices= ["Rocks", "Paper", "Scissors"]
    //   for(i = 0; i < choices.length; i++) {
    //   var randomChoice = Math.floor(Math.random() * choices.length);
    //   computerChoice = choices[randomChoice]
    //     }
    //     return computerChoice;
    // };
    //
    // function playGame(player, computer) {
    //   hideVisibility(classicIcons)
    //   hideVisibility(fighterChoice)
    //   showVisibility(winnerAnnounce)
    //   computerChoice = takeTurn();
    //   if (playerChoice === "Paper" && computerChoice === "Rocks") {
    //       winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
    //   } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    //       winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
    //   } else if (playerChoice === "Paper" && computerChoice === "Paper") {
    //       winnerAnnounce.innerText += `It's a draw`;
    //   } else if (playerChoice === "Rocks" && computerChoice === "Rocks") {
    //     winnerAnnounce.innerText += `It's a draw`;
    //   } else if (playerChoice === "Rocks" && computerChoice === "Scissors") {
    //     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
    //   } else if (playerChoice === "Rocks" && computerChoice === "Paper") {
    //     winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
    //   } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    //     winnerAnnounce.innerText += `It's a draw`;
    //   } else if (playerChoice === "Scissors" && computerChoice === "Rocks") {
    //     winnerAnnounce.innerText += `${computerChoice} beats ${playerChoice}. You lost this round.`;
    //   } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    //     winnerAnnounce.innerText += `${playerChoice} beats ${computerChoice}. You won this round!`;
    //   }
    // };
//if theres no choice aka players turn then get random index aka computer turn
  //}
}
