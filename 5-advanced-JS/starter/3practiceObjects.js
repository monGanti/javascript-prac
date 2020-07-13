/**
 * Objects.Create
 */

var personProto = {
    calculateAge: function(){
        console.log(2020-this.yearOfBith);
    }
};

//TYpe 1 : to create Object.create
var john = Object.create(personProto); // instance is created with reference to a prototype here
john.name = 'john'; // in each line you can define the properties which need to go inside that instance 
john.yearOfBirth = 1990;
john.job = 'Designer';


//Type2: to create Object.create

//Here the properties of the instance can be written in the same place where then calling prototype is defined
var jane = Object.create(personProto,{
    name: {value:' Jane'},
    yearOfBirth:{value: 1987},
    job:{value: 'Engineer'}
})

/**
 * Primitives and Objects
 */

/*Primitives can be changed*/
var a = 27;
var b = a;
a = 30;
console.log(a);
console.log(b);
// results will be : 
// 30 
// 27
// because each variable handles its own copy and any change can be impacted 

/*Objects are just references */
var obj1 = {
    age: 35
}

var obj2 = obj1;
obj1.age = 45;
console.log(obj1.age);
console.log(obj2.age);
//Results will be :
//45
//45
//because objects although passed are still considered as a refernces so it never stores it's values in memory

/*Functions */
var age = 90;
var obj = {
    lastname: 'Smith'
}

function change(a,b){
    a = 1000;
    b.lastname = "Miller";
}

change(age,obj);

console.log(age);
console.log(obj.lastname);
/**IMportant to note: the result here is
 * 90
 * Miller
 * because you are console logging "age" from a global level so no amtter how many times you change a inside the function it stays in that scope unless returned 
 * but when you pass an Object inside the function , remember that you are only sending a reference of the object so it will change in all area's as previous example
 */

//Other than Primitives in JS everything else are Objects