/**
 * Maps in ES6
 */


//How to Setup a Map
//Maps can have any type of data structure as keys unlike objects
const question = new Map();
question.set('question','what is the official name of latest JS version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES7');
question.set(4,'ES2015');
question.set('correct',4);
question.set(true,'Correct Answer, well Done!');
question.set(false,'Wrong answer, try again!');

//How to get from a Map
console.log(question.get('question'));

//Check size of Map
console.log(question.size);

//Check value existence like .includes or consists
if(question.has(4)){
    console.log('Asnwer 4 is here');
}

//delete a specific data
//question.delete(4)

//Clear of entire map
//question.clear();

//forEach is inbuilt in Map prototype
//question.forEach((value,key) => console.log(`This is "${key}" and it's value is ${value}`));

//for of is also in Map
for (let [key,value] of question.entries()){
    if (typeof(key) === 'number'){
        console.log(`This is "${key}" and it's value is ${value}`)
    };
};

//Check a Map usage
const ans = parseInt(prompt(question.get('question')));
console.log(question.get(ans === question.get('correct'))) ;

/**
 * Notes About Maps: Advantages of using Maps over Objects
 * 1. We can have any kind of data structure as a key
 * 2. We can be iterated 
 * 3. We can look at the size of a map
 * 4. We can add and remove data from a map
 */


