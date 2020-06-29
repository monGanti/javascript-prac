/**
 * Hoisting 
 */

//Note: that function declarations can be used before they are defined and the console can still print the value

calculateAge(1987);

function calculateAge(year){
    console.log(2020 - year);
}

//Note: function expression can not work the same way


//retirement(1987); There will be an error if defined here
var retirement = function(birthYear){
    console.log(65 - (2020 - birthYear));
}

retirement(1987);

//variables
var age = 45; //this is a global definition 
function ageFind(){ // function variables are for that function only
    console.log(age); // variable assignment can not pre calculate before
    var age = 23;
    console.log(age);
}
ageFind();
console.log(age);