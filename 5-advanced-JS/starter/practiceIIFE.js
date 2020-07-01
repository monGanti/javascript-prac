/**
 * IIFE ->immediately invoked function expressions
 * usually done for data privacy
 */

//this is how we usually write
function game(){
    var score =  Math.random() * 10;
    console.log(score);
}
game();

//in case of IIFE we write like this within (...) because we want JS to treat it like an expression so it remains private 

(function(){
    var score =  Math.floor(Math.random() * 2);
    console.log(score);
})();

/**
 * function (){
 * }
 * above is a fucntion without name but it will still be treated as function decalration and JS will expect it to be stored in a variable and work like any other visible function, unlike IIFE
 */

console.log(score); // this will give error as score is still within the scope of IIFE fucntion above

