/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer,dice,gamePlayer,counterFor6;
init();

//what happens when player rolls dice
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlayer){
        //1. random number generator
        dice = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        //2. display the dice result image
        var diceDOM = document.querySelector('.dice-0');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';
        var diceDOM2 = document.querySelector('.dice-1');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-'+dice2+'.png';

        //3. update the base score if the rolled number is NOT 1
        if (dice !== 1 && dice2 !== 1){
            //Add up the score
            roundScore += dice+dice2;
            console.log(dice,dice2);
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
            
            //also check if there are more than 2 times 6 is rolled then total score must turn back to 0
            if (dice === 6 || dice2 ===6){
                counterFor6 ++;
                console.log('total active player 6s are' +counterFor6);
                if(counterFor6 === 2){
                    scores[activePlayer] = 0;
                    document.querySelector('#current-'+activePlayer).textContent = '0';
                    document.querySelector('#score-'+activePlayer).textContent = '0';
                    nextPlayer();   
                }
            }
        } 
        else{
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

        //get the winning score value
        var winningValue;
        var value = document.querySelector('#winning-score-input').value;
        console.log('the final number is:'+value);
        // NOTE: All undefiend, null,0 or "" are all Type Coersed to false 
        if(value){
            winningValue = value;
        }else{
            winningValue = 100;
        }

        //Check if player won the game
        if(scores[activePlayer] >= winningValue){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
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
    counterFor6=0;
    //reset the score of both players back to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //change the UI look of who is active
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //do not display the dice image
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}

//initial state of the game
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlayer = true;
    counterFor6 = 0;

    /**Practice only */
    /**dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#current-'+activePlayer).textContent = dice;
    document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

    var x = document.querySelector('#score-'+activePlayer).textContent;
    console.log(x);*/

    //hide the dice image
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
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


