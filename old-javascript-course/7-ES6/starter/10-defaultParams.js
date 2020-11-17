/**
 * Default params in ES6
 */

//In order to specify the default params rather than undefined, you can do the following:

//ES6
function SmithPerson(firstName,yearOfBirth,lastName = "Smith",nationality="american"){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

let john = new SmithPerson('John',1990);
let emily = new SmithPerson('Emily',1983,'Diaz','Spain');