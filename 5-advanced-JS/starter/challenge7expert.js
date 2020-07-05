/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function (){
    //step1: function constructor
var Question = function(question,answers,correctAnswer){
    this.questions = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

//step2: add questions objects using constructor
var q1 = new Question('Which City were you born in?',['Boston','Newyork','Seattle'],1);
var q2 = new Question('What is you mother\'s maiden name?',['Smith','Miller','Other'],2);
var q3 = new Question('What is your profession?',['Designer','PM','Doctor','Other'],0);

//Step3: Store them all in an array


//Step4:
Question.prototype.randomQuestion = function() {
    console.log(this.questions+'\n'); 
    for(var i=0;i<this.answers.length;i++){
        console.log(this.answers[i]+'\n');
    } 
}



var score=0;

//Step6: check if answer is right
Question.prototype.checkAnswers = function(answer){
    
    console.log(this.correctAnswer);
    if (answer == this.correctAnswer){
        console.log("Correct Answer!!");
        score++;
    }else {
        console.log("Wrong Answer!!");
    }
    console.log("......................"+'\n'+'yout total score is:'+score);
}

var qArr = [q1,q2,q3]

//step8
function nextQuestion(){
    
    var qPicked = Math.floor(Math.random()*qArr.length);
    qArr[qPicked].randomQuestion();
    var promptAns = prompt('what is the correct answer?');
    
    if (promptAns !== 'exit'){
        qArr[qPicked].checkAnswers(promptAns);
        nextQuestion();
    }
    
    
}

    
nextQuestion();

})();