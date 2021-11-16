class Player {
  constructor(name, emoji) {
    this.name = name;
    this.token = emoji;
    this.wins = 0;
  //  this.playerChoiceClassic = player.playerChoiceClassic;
    //this.playerChoiceDifficult = player.playerChoiceDifficult;
  }

  saveWinsToStorage() {
    var jsonWins = JSON.stringify(this.wins)
    localStorage.setItem(this.name, jsonWins);
  }

  retrieveWinsFromStorage() {
  //  this.wins++
    var savedWins = localStorage.getItem(this.name);
    var parsedWins = JSON.parse(savedWins);
    this.wins = parsedWins;
    return parsedWins
  //  console.log(parsedWins)
  };

  takeTurn() {

}
    // getRandomChoice() {
    // var choices = ["Rocks", "Paper", "Scissors"];
    //   for(i = 0; i < choices.length; i++) {
    //   var randomChoice = Math.floor(Math.random() * choices.length);
    //   computerChoice = choices[randomChoice]
    //   }
    //     return computerChoice;
    // };
  }

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
