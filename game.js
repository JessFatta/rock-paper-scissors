class Game {
  constructor(game) {
    this.type = "classic" || "difficult";
    this.choices = ["Rocks", "Paper", "Scissors"];
    this.winner = game.winner;

  }

  chooseGame() {
    if (this.type === "difficult") {
      this.choices.push("Lizard", "Alien")
    } else {
    }
  }


  determineWinner() {
  
  }
};
// this,player = new player (human and girl emoji)
// this.computer = instatiant new player class called human and computer
//
// game takes in a type
// game takes in type as the only constructor
// and this.type would be classic || spicy
//
// this.choices contains the array of choices
//
// this.winner gets reassigned whenever
//
// play game method this.type = type if this.type === spicy then push lizard and alien into choice array
//
// determine winner if this.playerchoice == computer choice its a draw etc aka the play game function in main
