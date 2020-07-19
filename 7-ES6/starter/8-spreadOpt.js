/**
 * Spread 
 */

function addFourAges ( a,b,c,d){
    return a+b+c+d;
};

var sum1 = addFourAges(18,20,42,60);
console.log(sum1);

//ES5
var ages = [18,20,42,60];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

//ES6
//Spread will call all elements of the array and lay them down as independent elements 
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['john','jane','mark'];
const familyMiller = ['mary','bob','ann'];
let bigFamily = [...familySmith,'lily',...familyMiller];
console.log(bigFamily);

//this can also work on node lists
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes]; // this will return a list also

Array.from(all).forEach(cur => cur.style.color = ' purple');