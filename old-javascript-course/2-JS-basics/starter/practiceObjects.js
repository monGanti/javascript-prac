/**
 * Object and properties
 * */

 //object literal
var john = {
    firstName: 'John',
    lastName: 'Miller',
    birthyear: 1990,
    family: ['Jane','Emma','Bob','Emily'],
    isMarried: false
}

//Calling from Object
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'lastName';
console.log(john[x]);

//addition to Object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Gui';
jane.isMarried = false;
jane['job'] = 'Data Science'
console.log(jane);