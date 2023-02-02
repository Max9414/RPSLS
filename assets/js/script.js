
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
    
// });

window.onload = (event) => {
    console.log("page is fully loaded");
    // Event listeners for the 3 different games
    document.getElementById('game-btn1').addEventListener('click', playOriginalGame);
    document.getElementById('game-btn2').addEventListener('click', playFivevFiveGame);
    document.getElementById('game-btn3').addEventListener('click', playRandomGame);
  };

  
  let selectedCards= [];

/**
 * This function will be used to generate a random pick for the pc for all games 
 */
function randomCard () {
    let cards = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return cards[Math.floor(Math.random() * cards.length)];
}

/** 
 * This function randomly generates 5 numbers from 0 to 4 using math functions and a for loop.
 * It then generates an array of cards based on the random numbers generated.
 */

function fiveRandomGenerated () {
  let cards = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let numbers = [0, 1, 2, 3, 4];
  let randomNumber = [];
  let randomCards = [];
  for (let i = 0; i<5; i++) {
    let randomIndex = Math.floor(Math.random()* numbers.length);
    randomNumber.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
  for (let j = 0; j<5; j++) {
    randomCards.push(cards[randomNumber[j]]);
  }
  return randomCards;
}

/**
 * This function builds the html adding innerHTML depending on the randomly generated cards.
 */

function cardsCreation(game) {
  let cards = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let numbers = [0, 1, 2, 3, 4];
  let randomNumber = [];
  let randomCards = [];
  for (let i = 0; i<3; i++) {
    let randomIndex = Math.floor(Math.random()* numbers.length);
    randomNumber.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
  for (let j = 0; j<3; j++) {
    randomCards.push(cards[randomNumber[j]]);
    if (randomCards[j] === 'rock') {
      game.innerHTML+= `
      <button class="card">
      <img src="assets/image/rock.png" alt="rock"  id="rock">
      </button>`
    } else if (randomCards[j] === 'paper') {
        game.innerHTML+= `
        <button class="card">
        <img src="assets/image/paper.png" alt="paper"  id="paper">
        </button>`
    }     else if (randomCards[j] === 'scissors') {
            game.innerHTML+= `
            <button class="card">
            <img src="assets/image/scissors.png" alt="scissors"  id="scissors">
            </button>`
  }         else if (randomCards[j] === 'lizard') {
              game.innerHTML+= `
              <button class="card">
              <img src="assets/image/lizard.png" alt="lizard"  id="lizard">
              </button>`
} else {
    game.innerHTML+= `
    <button class="card">
    <img src="assets/image/spock.png" alt="spock"  id="spock">
    </button>`
  }
}
  return game;
}

/**
 * This function will show the result of the choices, player vs pc.
 * It should be working, with a for function, for the 5v5 game as well, will have to test.
 */

function solution (player, pc) {
    if (player == pc ) return "it's a tie!";
    if (player === 'rock') {
      if (pc === 'lizard' || pc === 'scissors') return "The player wins!";
      else return "The pc wins!"
    }
    if (player === 'lizard') {
      if (pc === 'spock' || pc === 'paper') return "The player wins!";
      else return "The pc wins!"
    }
    if (player === 'spock') {
      if (pc === 'scissors' || pc === 'rock') return "The player wins!";
      else return "The pc wins!"
    }
    if (player === 'scissors') {
      if (pc === 'paper' || pc === 'lizard') return "The player wins!";
      else return "The pc wins!"
    }
    if (player === 'paper') {
      if (pc === 'rock' || pc === 'spock') return "The player wins!";
      else return "The pc wins!"
    }
}

/**
 * 
 * This function will wait for all 5 cards to be selected and will allow user to deselect cards too
 * and will ask at the end if user is sure about choice. 
 * It will then check the winner for all 5 selections, deciding the winner with a for loop in order of
 * selection.
 */
function fullSelection(event) {
    let playerCard = event.target.id;
    console.log(playerCard);
    let index = selectedCards.indexOf(playerCard);
    if (index === -1) {
      selectedCards.push(playerCard);
      if (playerCard === 'rock') {
        document.getElementById('rock').src = "assets/image/brock.png";
      } else if (playerCard === 'paper') {
        document.getElementById('paper').src = "assets/image/bpaper.png";
      } else if (playerCard === 'scissors') {
        document.getElementById('scissors').src = "assets/image/bscissors.png";
      }  else if (playerCard === 'lizard') {
          document.getElementById('lizard').src = "assets/image/blizard.png";
      } else {
        document.getElementById('spock').src = "assets/image/bspock.png";
      }
    } else { 
      selectedCards.splice(index, 1);
      if (playerCard === 'rock') {
        document.getElementById('rock').src = "assets/image/rock.png";
      } else if (playerCard === 'paper') {
        document.getElementById('paper').src = "assets/image/paper.png";
      } else if (playerCard === 'scissors') {
        document.getElementById('scissors').src = "assets/image/scissors.png";
      }  else if (playerCard === 'lizard') {
          document.getElementById('lizard').src = "assets/image/lizard.png";
      } else {
        document.getElementById('spock').src = "assets/image/spock.png";
      }
    }
    console.log(selectedCards);
    console.log(selectedCards.length);
    if (selectedCards.length == 5) {
      let confirmed = confirm ("Are you sure you want to select these cards?");
      if (confirmed) {
        let fiveRandom = fiveRandomGenerated();
        console.log(fiveRandom);
        for (let i=0; i<fiveRandom.length; i++ ) {
          let sol = solution(selectedCards[i], fiveRandom[i]);
          if (sol === "The player wins!") {
          console.log(sol);
          document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
        } else if (sol === "The pc wins!" ) {
          console.log(sol);
          document.getElementById('computer-score').innerHTML = parseInt(document.getElementById('computer-score').innerHTML) + 1;
        } else {}
       }
        selectedCards = [];
        document.getElementById('rock').src = "assets/image/rock.png";
        document.getElementById('paper').src = "assets/image/paper.png";
        document.getElementById('scissors').src = "assets/image/scissors.png";
        document.getElementById('lizard').src = "assets/image/lizard.png";
        document.getElementById('spock').src = "assets/image/spock.png";
      } else {
        selectedCards = [] ;
        document.getElementById('rock').src = "assets/image/rock.png";
        document.getElementById('paper').src = "assets/image/paper.png";
        document.getElementById('scissors').src = "assets/image/scissors.png";
        document.getElementById('lizard').src = "assets/image/lizard.png";
        document.getElementById('spock').src = "assets/image/spock.png";
      }
    } else {}
  }

/**
 * This function will reset the selection of the 5 cards to 0 if pressed 
 * */
function resetChoice() {
  let selectedCards = [];
  return selectedCards;
}

// card selection check
function cardSelected(event) {
    let playerCard = event.target.id;
    console.log(playerCard);
    let pcCard = randomCard();
    let sol = solution(playerCard, pcCard);
    let confirmed = confirm ("Are you sure you want to select this card?");
    if (confirmed) {
        console.log(pcCard);

        if (sol === "The player wins!") {
          console.log(sol);
          document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
        } else if (sol === "The pc wins!" ) {
          console.log(sol);
          document.getElementById('computer-score').innerHTML = parseInt(document.getElementById('computer-score').innerHTML) + 1;
        } else {}
    } else {
        console.log("select again");
    }
    winnerLoserTiePage(playerCard, pcCard, sol);
}

/**
 * This function will transform the game-area section into a showcase of the cards
 * played by both the pc and the user and will show on the top you win/lose/it's a tie"
 */
function winnerLoserTiePage(playerCard, pcCard, sol) {
  let game = document.getElementById('game-area')
    game.classList.add('showcase-section');
    if (sol === 'The player wins!') {
      game.innerHTML = `
      <h1>You win!!</h1>`
    } else if (sol === 'The pc wins!') {
        game.innerHTML = `
        <h1>You lose!!</h1>`
    } else {
      game.innerHTML = `
      <h1>It's a tie!!</h1>`
    }
    game.innerHTML += `<div id="win-lose-div" class="showcase-cards"></div>`
    winner = document.getElementById('win-lose-div');
    if (playerCard === 'rock') {
      winner.innerHTML+= `
      <button class="card">
      <img src="assets/image/rock.png" alt="rock"  id="rock">
      </button>`
    } else if (playerCard === 'paper') {
        winner.innerHTML+= `
        <button class="card">
        <img src="assets/image/paper.png" alt="paper"  id="paper">
        </button>`
    }     else if (playerCard === 'scissors') {
            winner.innerHTML+= `
            <button class="card">
            <img src="assets/image/scissors.png" alt="scissors"  id="scissors">
            </button>`
  }         else if (playerCard === 'lizard') {
              winner.innerHTML+= `
              <button class="card">
              <img src="assets/image/lizard.png" alt="lizard"  id="lizard">
              </button>`
} else {
    winner.innerHTML+= `
    <button class="card">
    <img src="assets/image/spock.png" alt="spock"  id="spock">
    </button>`
  }
  if (pcCard === 'rock') {
    winner.innerHTML+= `
    <button class="card">
    <img src="assets/image/rock.png" alt="rock"  id="rock">
    </button>`
  } else if (pcCard === 'paper') {
      winner.innerHTML+= `
      <button class="card">
      <img src="assets/image/paper.png" alt="paper"  id="paper">
      </button>`
  }     else if (pcCard === 'scissors') {
          winner.innerHTML+= `
          <button class="card">
          <img src="assets/image/scissors.png" alt="scissors"  id="scissors">
          </button>`
}         else if (pcCard === 'lizard') {
            winner.innerHTML+= `
            <button class="card">
            <img src="assets/image/lizard.png" alt="lizard"  id="lizard">
            </button>`
} else {
  winner.innerHTML+= `
  <button class="card">
  <img src="assets/image/spock.png" alt="spock"  id="spock">
  </button>`
}
}



/**
 * This function will create the whole HTML necessary for the first game to work
 * The game in question is the normal one, user can select the card normally and play the game
 */
function playOriginalGame(event) {
    let game = document.getElementById('game-area')
    game.classList.add('cards-bttm');
    game.innerHTML = `
    <div>
      <button id="home-btn">Home</button>
    </div>
    <div>
      <button class="card">
        <img src="assets/image/rock.png" alt="rock"  id="rock">
      </button>
      <button class="card" >
        <img src="assets/image/paper.png" alt="paper" id="paper">
      </button>
      <button class="card" >
        <img src="assets/image/scissors.png" alt="scissors" id="scissors">
      </button>
      <button class="card" >
        <img src="assets/image/lizard.png" alt="lizard" id="lizard">
      </button>
      <button class="card" >
        <img src="assets/image/spock.png" alt="spock" id="spock">
      </button>
    </div>`
    document.getElementById('home-btn').addEventListener('click', homeGenerator);

    let cards = document.getElementsByClassName('card');
    console.log(cards);

    // Event listener for chosen card by player
    for (let j=0; j<cards.length; j++) {
      cards[j].addEventListener('click', cardSelected);
      console.log(cards[j]);
}
}

/**
 * This function will create the whole HTML necessary for the second game to work
 * The game in question is a 5v5, where user has to select all the cards at once
 * and will be played one at a time, in order
 */
function playFivevFiveGame(event) {
    let game = document.getElementById('game-area');
    selectedCards = [];
    game.classList.add('cards-bttm');
    game.innerHTML = `
    <div>
      <button id="home-btn">Home</button>
      <button id="reset-btn">Reset</button>
    </div>
    <div>
      <button class="card">
        <img src="assets/image/rock.png" alt="rock"  id="rock">
      </button>
      <button class="card" >
        <img src="assets/image/paper.png" alt="paper" id="paper">
      </button>
      <button class="card" >
        <img src="assets/image/scissors.png" alt="scissors" id="scissors">
      </button>
      <button class="card" >
        <img src="assets/image/lizard.png" alt="lizard" id="lizard">
      </button>
      <button class="card" >
        <img src="assets/image/spock.png" alt="spock" id="spock">
      </button>
    </div>`;
    document.getElementById('home-btn').addEventListener('click', homeGenerator);
    document.getElementById('reset-btn').addEventListener('click', playFivevFiveGame);
   
    

    let cards = document.getElementsByClassName('card');
    console.log(cards);

    // Event listener with function to wait for all 5 cards to be selected
    for (let j=0; j<cards.length; j++) {
    cards[j].addEventListener('click', fullSelection);
}
}

/**
 * This function will create the whole HTML necessary for the third game to work
 * The game in question will pick 3 random cards for the user and 3 random cards
 * for the pc, then they will have to play like the normal versione, one card at a time
 */
function playRandomGame(event) {
     let game = document.getElementById('game-area');
     game.innerHTML = `
     <div>
      <button id="home-btn">Home</button>
      <button id="shuffle-btn">Shuffle</button>
    </div>
    <div id="game-area-div">
    </div>`;
     game.classList.add('cards-bttm');
     let gameDiv = document.getElementById('game-area-div');
     gameDiv += cardsCreation(gameDiv);
     let cards = document.getElementsByClassName('card');
     for (let i=0; i<cards.length; i++) {
      cards[i].addEventListener('click', cardSelected);
     }
     document.getElementById('home-btn').addEventListener('click', homeGenerator);
     document.getElementById('shuffle-btn').addEventListener('click', playRandomGame);
}

/**
 * This function will recreate the original HTML file when pressed, allowing player
 * to choose a different game, but without deleting the score
 */

function homeGenerator(event) {
    let game = document.getElementById('game-area');
    game.innerHTML = `
    <div class="buttons">
      <button id="game-btn1">Original</button>
      <button id="game-btn2">All vs All</button>
      <button id="game-btn3">3 Random</button>
    </div>
    <div class="img-div">
      <img src="assets/image/rockpaperscissorslizardspock_newthumb.png" alt="Rock Paper Scissors Lizard Spock game pic" >
    </div>`;
    document.getElementById('game-btn1').addEventListener('click', playOriginalGame);
    document.getElementById('game-btn2').addEventListener('click', playFivevFiveGame);
    document.getElementById('game-btn3').addEventListener('click', playRandomGame);
}

