class Player {
  constructor(name, token, wins, playerChoice, computerChoice) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.playerChoice = playerChoice
    this.computerChoice = computerChoice
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn(choice) {
//if theres no choice aka players turn then get random index aka computer turn
  }

getRandomChoice() {
  var choices = [rocksImage, paperImage, scissorsImage];

  for(i = 0; i < choices.length; i++) {
  var randomChoice = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[randomChoice]
    }
    return computerChoice;
  }
};
var newPlayer = new Player(name)
