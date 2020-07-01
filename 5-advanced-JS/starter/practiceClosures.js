/**
 * Closures
 */

function retirementCountry(retirementAge){
    var a = " years until you retire"; // this variable is declared here
    return function(yearOfBirth){ // return happened here
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age)+a); // variable in step1 is used here although the 'return' already happened, that is power of closure as it keeps the varibales declared in parent function even after return
    }
}

var retirementUS = retirementCountry(66);
var retirementGermany = retirementCountry(67);

retirementUS(1990);
retirementGermany(1990);
//Closures: An inner function has always access to the variables and parameters of its outter function, even after the outer function has returned.

//DIY
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            
        } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
            
        } else {
                console.log('Hello ' + name + ', what do you do?');   
        }
    } 
}

interviewQuestion('teacher')('Jane');

//Closures: here 'Job' although defined at higher function level, it can still be used although the inner function is returning ahead of usage of the variable.