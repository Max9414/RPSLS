
let cards = document.getElementsByClassName('card');

/**
 * This function will be used to generate a random pick for the pc for OriginalGame and RandomGame
 */
function randomCard () {
    let randomFigures = cards[Math.floor(Math.random() * cards.length)];
    return `$randomFigures`;
}

// card selection check
function cardSelected(event) {
    let confirmed = confirm ("Are you sure you want to select this card?");
    if confirmed {
        console.log("you selected this card");
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
    game.innerHTML = `
    <button id="rock">
      <img src="rock.png" alt="Rock">
    </button>
    <button id="paper">
      <img src="paper.png" alt="Paper">
    </button>
    <button id="scissors">
      <img src="scissors.png" alt="Scissors">
    </button>
    <button id="lizard">
      <img src="lizard.png" alt="Lizard">
    </button>
    <button id="spock">
      <img src="spock.png" alt="Spock">
    </button>`
}

/**
 * This function will create the whole HTML necessary for the second game to work
 * The game in question is a 5v5, where user has to select all the cards at once
 * and will be played one at a time, in order
 */
function playFivevFiveGame(event) {

}

/**
 * This function will create the whole HTML necessary for the third game to work
 * The game in question will pick 3 random cards for the user and 3 random cards
 * for the pc, then they will have to play like the normal versione, one card at a time
 */
function PlayRandomGame(event) {
     
}

// Event listener for chosen card by player
for (let card in cards) {
    cards[card].addEventListener('click', cardSelected);
}

// Event listeners for the 3 different games
document.getElementById('game-btn1').addEventListener('click', playOriginalGame)