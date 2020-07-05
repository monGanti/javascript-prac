/**
 * Bind, Call, Apply
 */

 //Call

 var john = {
     name: 'John',
     age: 26,
     job: 'Designer',
     presentation: function(style,timeOfDay){
         if (style === 'formal'){
             console.log('Good '+timeOfDay+'!! '+this.name+' you are '+this.age+'years old today and still working as '+this.job);
         }else if (style === 'casual'){
            console.log('Hello '+timeOfDay+'!! '+this.name+' you are '+this.age+'years old today and still working as '+this.job);
         }
     }
 };

 var ema = { 
     name:'Ema',
     age: 28,
     job: 'Product manager'
 };

 john.presentation('formal','morning');
 //here call is like borrowing a methof from another object without recreating it's instance for the new object
 john.presentation.call(ema,'casual','afternoon')

 //john.presentation.apply(ema,['casual','afternoon']) This willa ccept arrays but for that the function also should have passed arrays

 //bind can bind limited parameters in an attempt to pass , 
 //note: bins should always have this value in the beginning, if not available then use this
 var emaFormal = john.presentation.bind(ema,'formal');
 emaFormal('morning');
 emaFormal('night');

 //DIY
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

function isFullAge(limit,el) {
    return el >= limit;
}

//Note that if fullAge had more than 1 argument and can this kind of function be passed in arraycalc, the answer is yes. using bind we can

var ages = arrayCalc(years,calculateAge);
var fullAgeUS = arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullAgeUS);
