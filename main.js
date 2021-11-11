var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var paperImage = document.querySelector(".paper-image");
//var paperImageSelected = document.querySelector(".paper-image2");
var rocksImage = document.querySelector(".rocks-image");
// var rocksImageSelected = document.querySelector(".rocks-image2");
var scissorsImage = document.querySelector(".scissors-image");
//var scissorsImageSelected = document.querySelector(".scissors-image2");
var fighterChoice = document.querySelector(".fighter");
var chooseGameHeadline = document.querySelector(".choose-game-headline");
var changeGameButton = document.querySelector(".change-game-button");



classicGameButton.addEventListener("click", playClassic);
paperImage.addEventListener("click", playGame);
rocksImage.addEventListener("click", playGame);
scissorsImage.addEventListener("click", playGame);
difficultGameButton.addEventListener("click", playDifficult);
// paperImage.addEventListener("click", choosePaper);
// rocksImage.addEventListener("click", chooseRock);
// scissorsImage.addEventListener("click", chooseScissors);
changeGameButton.addEventListener("click", goHome);



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
};

function playDifficult() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  showEmojis(paperImage);
  showEmojis(rocksImage);
  showEmojis(scissorsImage);
  hideVisibility(chooseGameHeadline);
  showVisibility(fighterChoice);
  showVisibility(changeGameButton);
}

function goHome() {
  showEmojis(classicGameButton);
  showEmojis(difficultGameButton);
  hideEmojis(paperImage);
  hideEmojis(rocksImage);
  hideEmojis(scissorsImage);
  showVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  hideVisibility(changeGameButton);
};

// function choosePaper() {
//   hideEmojis(classicGameButton);
//   hideEmojis(difficultGameButton);
//   showEmojis(paperImage);
//   hideEmojis(rocksImage);
//   hideEmojis(scissorsImage);
//   hideVisibility(chooseGameHeadline);
//   hideVisibility(fighterChoice);
//   showVisibility(changeGameButton);
// }
//
// function chooseRock() {
//   hideEmojis(classicGameButton);
//   hideEmojis(difficultGameButton);
//   hideEmojis(paperImage);
//   showEmojis(rocksImage);
//   hideEmojis(scissorsImage);
//   hideVisibility(chooseGameHeadline);
//   hideVisibility(fighterChoice);
//   showVisibility(changeGameButton);
// }
//
// function chooseScissors() {
//   hideEmojis(classicGameButton);
//   hideEmojis(difficultGameButton);
//   hideEmojis(paperImage);
//   hideEmojis(rocksImage);
//   showEmojis(scissorsImage);
//   hideVisibility(chooseGameHeadline);
//   hideVisibility(fighterChoice);
//   showVisibility(changeGameButton);
// }

function gameView() {
  hideEmojis(classicGameButton);
  hideEmojis(difficultGameButton);
  hideVisibility(chooseGameHeadline);
  hideVisibility(fighterChoice);
  showVisibility(changeGameButton);
}

function getRandomChoice() {
  var choices = [rocksImage, paperImage, scissorsImage];

  for(i = 0; i < choices.length; i++) {
  var randomChoice = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[randomChoice]
    }
    return computerChoice;
  }

function playGame(player, computer) {
  var newPlayer = new Player()
  var computerChoice = getRandomChoice();
  if (paperImage && computerChoice === rocksImage) {
    console.log(newPlayer + " beats " + computerChoice + ". You won this round!");
    showEmojis(paperImage)
    showEmojis(computerChoice)
  } else if (paperImage && computerChoice === scissorsImage) {
      console.log(computerChoice + " beats " + newPlayer + ". You lost this round.");
  } else if (paperImage && computerChoice === paperImage) {
    console.log("Its a draw");
  } else if (rocksImage && computerChoice === rocksImage) {
      console.log("Its a draw");
  } else if (rocksImage && computerChoice === scissorsImage) {
      console.log(newPlayer + " beats " + computerChoice + ". You won this round.");
  } else if (rocksImage && computerChoice === paperImage) {
      console.log(computerChoice + " beats " + newPlayer + ". You lost this round.");
  } else if (scissorsImage && computerChoice === scissorsImage) {
      console.log("Its a draw");
  } else if (scissorsImage && computerChoice === rocksImage) {
      console.log(computerChoice + " beats " + newPlayer + ". You lost this round.");
  } else if (scissorsImage && computerChoice === paperImage) {
      console.log(newPlayer + " beats " + computerChoice + ". You won this round.");
  }

}
