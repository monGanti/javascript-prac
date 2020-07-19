/**
 * Variables - let , const
 * 
 * let -> is like var and it can change 
 * const -> is for variables that should NOT change through out
 */

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller'; //this will  because "const" variables can NOT be changed
age6 = 30; // this will be fine as let variables can be changed
console.log(name6); 

/**
 * Var -> was designed for functions scopes where as 
 * 
 * let & const -> works based on blocks
 */

//ES5
function driversLicense5(passedTest){

    if(passedTest){
        var firstName = "John";
        var yearOfBirth = 1990;
        //console.log(firstName + 'born in '+ yearOfBirth +' has passed the test officially');
        //The variables used within this if block or outside will still work as they are going by the function reference scope
    }
    console.log(firstName + 'born in '+ yearOfBirth +' has passed the test officially');

}

driversLicense5(true);

//ES6
function driversLicense6(passedTest){

    if(passedTest){
        let firstName = "John";
        const yearOfBirth = 1990;
        
    }
    //console.log(firstName + 'born in '+ yearOfBirth +' has passed the test officially'); // this will throw error because:

    //The variables only go by each block reference and stay with the reference of block , example in the case of if block, the variables are unknown once a reference of it is used outside If block

}
driversLicense6(true);


//ES5
/**var i;
for (var i = 0; i<3;i++){
    console.log(i);
}
console.log(i);*/
//Here the result will be 0 1 2 3 only because i was overwritten within for loop and it is treated teh same i through out 

//ES6
let i = 45;
for(let i =0; i<3;i++){
    console.log(i);
}
console.log(i);
//here the scope of i within for is different from scope of i outside it so it will print 0 1 2 3 45
