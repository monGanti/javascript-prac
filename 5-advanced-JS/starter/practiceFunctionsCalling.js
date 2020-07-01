/**
 * Functions using Functions as arguments
 */

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

//Note: we are not calling calculateAge() function but passing it as param so no need ()
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

console.log(ages);

/**
 * Functions returning functions
 */
function interviewQuestions(job){
    if (job==='teacher'){
        return function(name){
            console.log("How many years of experience do you have?"+name);
        }
    } else 
        return function(name){
            console.log("How did you hear about us?"+name);
        }  
}

var teacherQ = interviewQuestions('teacher');
teacherQ('Jane');

var other = interviewQuestions('desinger');
other('Mark');

//this is another way of doing it as it evaluated left to right and less code
interviewQuestions('teacher')('Sam');





