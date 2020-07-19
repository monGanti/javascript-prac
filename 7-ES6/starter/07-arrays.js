/**
 * ES6 - Arrays
 */

const boxes = document.querySelectorAll('.box');


/**
 * How to convert a list into an Array easily in ES6
 */

//ES5
/**var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});*/

//ES6
//"Array.from" is a new mthod which will replace our previous hack of converting a list into an Array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/**
 * "for of" which is a new loop which has the benefits of forEach and also ability to use continue and break 
 */

//ES5
//when we have to use continue or break in ES5 the only option is to use for loop
/**for(var i =0; i<boxesArr5.length; i++){

    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = ' I changed to blue';
}*/

//ES6
//in ES6 you can use new for of loop
for(const cur of boxesArr6){
    if(cur.className === 'box blue'){
        continue;
    }
    cur.textContent = 'I have changed to blue';
}

/**
 * there are some new additions to the pre existing methods like indexOf
 */

 //ES5
 var ages = [12,17,8,21,14,11];

 var fullAge = ages.map(function(cur){
     return cur>=18;
 });

 console.log(fullAge);
 console.log(fullAge.indexOf(true)); //to find position in array
 console.log(ages[fullAge.indexOf(true)]); // to find value of that position

//ES6
console.log(ages.findIndex(cur => cur>=18)); //to find position in array
console.log(ages.find(cur => cur>=18)); // to find a value in array
