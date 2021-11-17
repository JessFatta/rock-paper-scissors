class Game {
  constructor(type) {
    this.player = new Player("human", "🙋🏻‍♀️ ");
    this.computer = new Player("computer", "💻 ");
    this.type = type || "classic";
    this.choices = ["Rocks", "Paper", "Scissors"];

  }

  chooseGame(type) {
    this.type = type;
    if ((this.type === "difficult") && (this.choices < 5)) {
    this.choices.push("Lizard", "Alien")
    }
  }
};
