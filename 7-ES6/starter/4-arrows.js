/**
 * ES6 - Arrows
 */

const years = [1990,1965,1982,1937];

//ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

//use () to specify (current,index,array) elements of map
ages6 = years.map((el,index) => `Age element is ${index + 1}: ${2020-el} `);
console.log(ages6);

//Note: when there are more than 1 line in this function thne use return keyword and {}
ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index +1}: ${age}`;   
});
console.log(ages6);