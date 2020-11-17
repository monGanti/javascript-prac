/**
 * ES5 - how Object Inheritance worked in ES5
 */

/**
 * We know how to create independent function constructors like Person5 but
 * if you want to sub constructor which uses the initial prototype of Person5 , example Athlete then we do the following:
 */

//FUnction Constructor as an expression
var Person5 = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

//building sub constructor

//Basically we are trying to create a blank reference object with Athelete and this is representing that blank object, so by calling Person5 we are initiating the links to Athlete objects key's with Person5 objects keys here
var Athlete5 = function(name,yearOfBirth,job,olympicGames,medals){
    Person5.call(this,name,yearOfBirth,job); 
    this.olympicGames = olympicGames;
    this.medals = medals;
}

//then you have to make Person5 become a prototype object of this new Object Athlete 
Athlete5.prototype = Object.create(Person5.prototype);

//You can also add the methods which are within Athlete as well
Athlete5.prototype.calcMedals = function(){
    this.medals++;
    console.log(this.medals);
}

//Now the Athelete sub constructor is ready to be used
var john5 = new Athlete5('john',1990,'player',3,10);
john5.calculateAge();
john5.calcMedals();

/**
 * On console check for 
 * john5 -> check its refernce prototypes as well
 */
