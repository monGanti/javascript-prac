/**
 * Objects and Function Constructors
 * Prototyping Chain
 */

// this kind of object declaration is an instance of a Function Constructor Person
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'designer'
}

/**this is a Function COnstructor which always starts with 'caps' 
Function Constructors are protypes for instances to re-use code (just like classes)
instances inherit the properties of Function Constructor*/
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//this is prototype for FUnction Constructor itself, If there are multiple methods/values etc then why attach them to each object instance itself, instead attach it to the Function Contructor itself like this. 
Person.prototype.calculateAge = function(){
        console.log(2020 - this.yearOfBirth);
}

//you can do the same for a string constant
Person.prototype.lastname = 'Smith';

var john = new Person('john',1987,'engineer');
var jane = new Person('Jane',1968,'product manager');
var mark = new Person('Mark',1948,'CEO');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);

//Practice on console.log
/*
 * john -> this will display what Prototypes John has , example: Person
 * john.hasOwnProperty('job') -> true
 * john.hasOwnProperty('lastname') -> false
 * john instanceOf Person -> true
 * john._proto_ === Person.prototype -> true
 * Person.prototype -> will also have an Object prototype because Person itself is also an instance of Object
 * 
 * var x= [2,3,4]
 * x -> this will also show the lenght property and an Array object prototype which has many other functions which are usually used in arrays
 *
 **/