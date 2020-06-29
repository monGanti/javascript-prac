/* "this" keyword is an important one in jS*/

//"this" when defined in the global context represents the window object

console.log(this);

//this when used within a object then it represents that object

var john = {
    name: 'John',
    age: '26',
    calculateAge: function(){
        console.log(this);
    }
}

john.calculateAge();

//this although within the object but in nested function then it will again represent the global context as it is within the isolated function

var john = {
    name: 'John',
    age: '26',
    calculateAge: function(){
        console.log(this);
        function innerFunction(){
            console.log(this);
        }
    }    
}

john.calculateAge();

//function methods defined in one object can be reused by other objects
var mary = {
    name: 'Mary',
    year: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.year);
    }    
}

var mike = {
    name: 'Mike',
    year: 1962
}

mike.calculateAge = mary.calculateAge;
mike.calculateAge();

