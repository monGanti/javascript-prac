/**
 * ES6 - Destructuring
 */

 //ES5
 var john = ['john',26];
 var name1 = john[0];
 var age1=john[1];

 //ES6 - has destructure concept
 const [name2,age2] = ['john',26];
 console.log(name2);
 console.log(age2);


 //this can be done for objects too
 var obj = {
     firstName: 'Mary',
     lastName: 'Smith'
 }
//Note the destructure naming convention must match with what is expected in the key of the object
 const {firstName,lastName} = obj;
 console.log(firstName);
 console.log(lastName);


 //OR like below
 const { firstName: a, lastName: b} = obj;
 console.log(a);
 console.log(b);

// for Functions as below
 function calcAgeRetirement(year){
     const age = new Date().getFullYear() - year;
     return [age , 65 - age];
 };

 const [age3, retirement] = calcAgeRetirement(1990);
 console.log(age3);
 console.log(retirement);