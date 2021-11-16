class Game {
  constructor(type) {
    this.player = new Player

    this.type = type || "classic";
    this.choices = ["Rocks", "Paper", "Scissors"];
    // this.choicesDifficult = ["Rocks", "Paper", "Scissors", "Alien", "Lizard"];
    // this.winner = game.winner;

  }

  chooseGame(type) {
    this.type = type;
    if (this.type === "difficult") {
    this.choices.push("Lizard", "Alien")
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
