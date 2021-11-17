# Rock, Paper, Scissors
-------
### Overview

Rock, Paper, Scissors is the final solo project for Turing Mod 1. This application is built using HTML, CSS, and Javascript.

- The user is able to play two versions of Rock, Paper, Scissors: Classic and Difficult
- The user selects an image that they would like to play and the computer randomly generates an opposing image
- At any point, the user can switch between game versions
- User score and computer score persist across refreshing the page

---------
### Installation Instructions
 - Fork and Clone [this](https://github.com/JessFatta/rock-paper-scissors) repository
 - `CD` into the directory
 - Run `open index.html` to view it in your browser

--------

### Classic Game

###### The Classic version of Rock, Paper, Scissors is the one we all know and love.
 - Rock beats Scissors
 - Scissors beats Paper
 - Paper beats Rock


To begin, select the Classic Game version and make your decision between Rock, Paper, or Scissors. Played against the computer, it randomly generates a decision of either Rock, Paper, or Scissors and then displays a message stating who won or if it was a draw.

![](https://media.giphy.com/media/DF53t1zheKMM4C5zcP/giphy.gif)

---------

### Difficult Game
###### The Difficult version brings in two new characters: Alien and Lizard.

 - Rock beats Scissors and Lizard
 - Scissors beats Paper and Lizard
 - Paper beats Rock and Alien
 - Lizard beats Paper and Alien
 - Alien beats Scissors and Rock

Other than introducing new characters, the same basic game play applies. After selecting the Difficult Game version, make your decision between Rock, Paper, Scissors, Alien, or Lizard. Then the computer will randomly generate a decision between the same five characters. A message will be displayed letting the user know if they won, lost, or it was a draw.

![](https://media.giphy.com/media/wfVMc1fGL6W9gyN9ic/giphy.gif)

-----------------
### Wins

As the game play continues, the wins section for each player (user and computer) will be updated and reflect the current game, even when you refresh the page.

-----------

### Future Features

Different versions:
 - The Office version (Dwight vs Michael vs Toby)
 - The Sopranos version (Tony vs Paulie vs Chrissy)

---------

### Contributors
Jessica Fatta
github.com/JessFatta
--------
### Links

Repository Link: https://github.com/JessFatta/rock-paper-scissors

-----
### Reflections
This project was my first graded solo project of Turing School of Software & Design. It was a lot of trial and error in terms of functionality and how I wanted the page to be presented and so I started from scratch more than once! Overall, I'm very happy with my final product!

Wins: I have really come to love and appreciate CSS
Challenges: A lot of moving parts makes for some complication when it all eventually comes together.

------------
### Architecture
 Five files in total: HTML, CSS, main.js, game.js, and player.js
 I used the HTML and CSS files for overall design and formatting and the three JavaScript files work together to update the Data Model. The player.js file contains a Player Class with two methods that work to use local storage in order to save wins for both the computer and the user. The game.js file contains a Game Class that includes both the player and the computer, as well as a method to determine which game is being played (classic or difficult). Lastly, the main.js file contains all variables, event listeners, and functions in order to make the game playable.
