/**
 * Classes Inheritence in ES6
 */

class Person6 {
    constructor(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log('Age is:' +age);
    }
}

class Athlete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedals(){
        this.medals++;
        console.log(this.medals);
    }
}

const john6 = new Athlete6('john',1990,'swimmer',3,10);
john6.wonMedals();
john6.calculateAge();