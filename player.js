class Player {
  constructor(name, emoji) {
    this.name = name;
    this.token = emoji;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var jsonWins = JSON.stringify(this.wins)
    localStorage.setItem(`${this.name} wins`, jsonWins);
  };

  retrieveWinsFromStorage() {
    var savedWins = localStorage.getItem(`${this.name} wins`);
    var parsedWins = JSON.parse(savedWins);
    this.wins = parsedWins || 0;
    return `${this.wins}`
   console.log(parsedWins)
  };
};
