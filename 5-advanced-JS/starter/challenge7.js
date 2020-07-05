/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
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
        var qArr = [q1,q2,q3]
        var qPicked = Math.floor(Math.random()*qArr.length);

        //Step4:
        Question.prototype.randomQuestion = function() {
            console.log(this.questions+'\n'); 
            for(var i=0;i<this.answers.length;i++){
                console.log(this.answers[i]+'\n');
            } 
        }

        qArr[qPicked].randomQuestion();

        //Step 5: prompt for taking answer input
        var promptAns = parseInt(prompt('what is the correct answer?'));

        //Step6: check if answer is right
        Question.prototype.checkAnswers = function(answer){
            console.log(this.correctAnswer);
            if (answer === this.correctAnswer){
                console.log("Correct Answer!!");
            }else {
                console.log("Wrong Answer!!");
            }
        }

        qArr[qPicked].checkAnswers(promptAns);

})();



