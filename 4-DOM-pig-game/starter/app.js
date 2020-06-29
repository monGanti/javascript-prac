/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer,dice,gamePlayer;
init();

//what happens when player rolls dice
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlayer){
        //1. random number generator
        dice = Math.floor(Math.random() * 6) + 1;

        //2. display the dice result image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';

        //3. update the base score if the rolled number is NOT 1
        if (dice !== 1){
            //Add up the score
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else{
            nextPlayer();
        }
    }
   
});

//what happens when player selects Hold option
document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlayer){
        //Add Current score to Global score of the active player
        scores[activePlayer] += roundScore;

        //update the ui with new global score
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlayer = false;
        } else{
            //Next Player
            nextPlayer();
        }
    }
   
});

//what happens when Player selects "New Game"
document.querySelector('.btn-new').addEventListener('click',init);



//how to cleanly pass it to next player
function nextPlayer(){
    //change the active player
    activePlayer === 0? activePlayer = 1:activePlayer =0;
    roundScore = 0;
    //reset the score of both players back to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //change the UI look of who is active
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //do not display the dice image
    document.querySelector('.dice').style.display = 'none';
}

//initial state of the game
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlayer = true;

    /**Practice only */
    /**dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#current-'+activePlayer).textContent = dice;
    document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

    var x = document.querySelector('#score-'+activePlayer).textContent;
    console.log(x);*/

    //hide the dice image
    document.querySelector('.dice').style.display = 'none';
    // bring the GLobal Scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    //bring the current scores to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Remove any Winner tags and call them as Player 1 and 2 again
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //remove any active states
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //add active state to first player only
    document.querySelector('.player-0-panel').classList.add('active');

}


