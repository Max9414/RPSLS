/**
 * This function will be used to generate a random pick for the pc for OriginalGame and RandomGame
 */
function randomCard () {
    let randomFigures = cards[Math.floor(Math.random() * cards.length)];
    return `$randomFigures`;
}


/**
 * This function will create the whole HTML necessary for the first game to work
 * The game in question is the normal one, user can select the card normally and play the game
 */
function playOriginalGame(event) {

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

let buttons = document.getElementsByClassName("btn");

for (button of buttons) {
    
}