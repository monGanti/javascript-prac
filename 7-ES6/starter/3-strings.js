/**
 * ES6 Strings
 */

 let firstName = "John";
 let lastName = "Smith";
 const yearOfBirth = 1990;

 function calcAge(year){
     return 2020 - yearOfBirth;
 }


 //ES5
 console.log('This is '+ firstName + ' '+lastName+'. He is born in '+yearOfBirth+'. Today he is '+ calcAge(yearOfBirth)+' years old.');

 //ES6
 //These are called template literals by using ``
 console.log(`${firstName} ${lastName}. He is born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

//Some other new functions with Strings
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));