
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
    
// });

window.onload = (event) => {
    console.log("page is fully loaded");
    // Event listeners for the 3 different games
    document.getElementById('game-btn1').addEventListener('click', playOriginalGame);
    document.getElementById('game-btn2').addEventListener('click', playFivevFiveGame);
  };

/**
 * This function will be used to generate a random pick for the pc for OriginalGame and RandomGame
 */
function randomCard () {
    let cards = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    return cards[Math.floor(Math.random() * cards.length)];
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
 */
function fullSelection(event) {

}

// card selection check
function cardSelected(event) {
    let playerCard = event.target.id;
    console.log(playerCard);
    let confirmed = confirm ("Are you sure you want to select this card?");
    if (confirmed) {
        let cardPC = randomCard();
        console.log(cardPC);
        let sol = solution(playerCard, cardPC);
        if (sol === "The player wins!") {
          console.log(sol);
          document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
        } else {
          console.log(sol);
          document.getElementById('computer-score').innerHTML = parseInt(document.getElementById('computer-score').innerHTML) + 1;
        }
    } else {
        console.log("select again");
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
    <button class="card" id="rock">
      <img src="assets/image/rock.png" alt="rock">
    </button>
    <button class="card" id="paper">
      <img src="assets/image/paper.png" alt="paper">
    </button>
    <button class="card" id="scissors">
      <img src="assets/image/scissor.png" alt="scissors">
    </button>
    <button class="card" id="lizard">
      <img src="assets/image/lizard.png" alt="lizard">
    </button>
    <button class="card" id="spock">
      <img src="assets/image/spock.png" alt="spock">
    </button>`

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
    let game = document.getElementById('game-area')
    game.classList.add('cards-bttm');
    game.innerHTML = `
    <button class="card" id="rock">
      <img src="assets/image/rock.png" alt="Rock">
    </button>
    <button class="card" id="paper">
      <img src="assets/image/paper.png" alt="Paper">
    </button>
    <button class="card" id="scissors">
      <img src="assets/image/scissor.png" alt="Scissors">
    </button>
    <button class="card" id="lizard">
      <img src="assets/image/lizard.png" alt="Lizard">
    </button>
    <button class="card" id="spock">
      <img src="assets/image/spock.png" alt="Spock">
    </button>`

    let cards = document.getElementsByClassName('card');
    console.log(cards)

    // Event listener with function to wait for all 5 cards to be selected
    for (let card in cards) {
    cards[card].addEventListener('click', fullSelection);
}
}

/**
 * This function will create the whole HTML necessary for the third game to work
 * The game in question will pick 3 random cards for the user and 3 random cards
 * for the pc, then they will have to play like the normal versione, one card at a time
 */
function PlayRandomGame(event) {
     
}

