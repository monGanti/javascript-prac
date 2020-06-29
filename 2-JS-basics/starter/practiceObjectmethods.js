/**
 * Object methods
 * */

//adding a simple function to object
var Emma = {
    firstName: 'Emma',
    lastName: 'Miller',
    birthyear: 1994,
    family: ['Jane','John','Bob','Emily'],
    isMarried: false,
    calcAge: function(birthyear){
        return 2020 - birthyear;
    }
}

console.log(Emma.calcAge(1994));

//using the this keyword
var jane = {
    firstName: 'jane',
    lastName: 'Miller',
    birthyear: 1989,
    family: ['Jane','Emma','Bob','Emily'],
    isMarried: false,
    calcAge: function(){
        return 2020 - this.birthyear;
    }
}

var age = jane.calcAge();
jane.age = age;
console.log(jane['age']);

//using this keyword and assigning it to new object property at the same time
var john = {
    firstName: 'John',
    lastName: 'Miller',
    birthyear: 1990,
    family: ['Jane','Emma','Bob','Emily'],
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthyear;
    }
}

john.calcAge();
console.log(john);