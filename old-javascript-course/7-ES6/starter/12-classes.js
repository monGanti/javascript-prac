/**
 * Classes in ES6
 */

//ES5 - we always used function constructors as a prototype or blueprint to make methods as below

//FUnction Constructor as an expression
var Person5 = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Function Constructor as a declaration
function Person55(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

Person55.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('john',1990,'designer');
john5.calculateAge();

var john55 = new Person55('john',1992);
john55.calculateAge();

//ES6 - has nice syntax representation of the same concept of blueprints in terms of classes

class Person6 { //always starts with keyword "class" and className must start with capitals like a function constructor
    
    constructor(name,yearOfBirth){ // it should always have a COnstructor function which represents exactly like how a ES5 function constructor would do
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    //No , or ; required within the class to add more functions that are making this prototype 
    calculateAge(){
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    //You can also add static functions which are NOT part of the prototype but you want it as part of the class , which kind of has no sense but this option is available
    static greeting(){
        console.log("Hello!!");
    }

}

const john6 = new Person6('john',1987);
john6.calculateAge();

Person6.greeting(); // such Static functions need to be called from class directly and NOT through object created with prototype of class as it's not part of that prototype or blueprint

//Note the following about Classes
/**
 * 1. Classes are NOT hoisted which means you have to write the class and call it afterwards 
 * 2. you cna only define methods within the class and not properties , which makes sense as you usually it is not a best practice to inherit properties through object instances (or blueprints) 
 * 
 */

