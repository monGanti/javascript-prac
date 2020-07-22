# Some Important Notes 

## Few UI Selections notes

### Selecting the element
* document.querySelector() -> selections are at class level so always use '.' 
* var capture = document.querySelectorAll() ->this will always return a list, covert the lsit into an array 
* document.getElementbyID() -> note here we dont have to use "#" 
* document.getElementbyClass() -> note here we dont have to use '.'  

### using pre defined methods on selected or manipulate element
* document.querySelector(element).textContent = <some value to compare>
* document.querySelector(element).style.display
* document.querySlector(element).classList.add(element)
* document.querySlector(element).classList.remove(element)
* document.querySlector(element).classList.toggle(element)
* document.getElementById(element).parentNode.removeChild(element)

### Event Listeners
document.querySelector(element).addEventListener(event,function({ 
    <this is like an IIFE here for keeping anonymous function> 
})); 

document.querySelector(element).addEventListener(event,init); // here init is a function that is being invoked by Eventlisters and not called which is why there is no () here. 

What kind of events to use in Event Listeners , refer to this 
https://developer.mozilla.org/en-US/docs/Web/Events

### DOM Manipulations

https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/


## Operations Notes

### Few Math and Console Checks often used
* Math.random() //gives random number in the format < 0 , example: 0.1 , 0.2 etc
* Math.random() * 6 //this will make the number upto to the level to wanted , example 0 - 6
* Math.random() + 1 //this will make it > 0 
* Math.floor() //this will return the largest integer less than or equal to a given number.
* Math.round() 
* Math.abs() //absolute value ignore + and -
* parse.Float() //just to convert a String into a float

** read more here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math **

### Arrays and it's pre defiend methods
* var arr = [1,2,3,6,9]
* arr.push(10)  => [1,2,3,6,9,10] //pushes to end of the array
* arr.unshift(0) => [0,1,2,3,6,9,10] //shifts the first position and adds
* arr.pop() => [0,1,2,3,6,9] //pops out from the end of array
* arr.shift() => [1,2,3,6,9] //removed the first element and shifts the other elements forward
* arr.indexOf(6) => 3 //position of the given value
* arr.splice(<position of index to delete from>,<number of arguments to delete>) => arr.splice(0,1) => [2,3,6,9]

//ES6 - few which are new in ES6
const ages = [12,17,8,21,14,11];

* ages.findIndex(cur => cur>=18); //to find position in array
* ages.find(cur => cur>=18); //to find a value in array
* const sumAges = agesSumFunction(...ages) //this is a spread operator which can pass independent elements of the array into the function
* ages.reduce((prev,cur,index) => prev+current,0) // this will sum up all the previous and current values and 0   indicates where to start from , example it can be any number like 100 or 200 to start from. example : 0+12+17... = previous value will keep the sum.


##### NodeList - Converting a list into an array with a trick
//put the description and value fields into a list
fields = document.querySelectorAll(domString.inputDescription + ',' + domString.inputValue);

//trick the list to conver it into an array in ES5
* fieldsArr = Array.prototype.slice.call(fields);

//in ES6
* Array.from(fields) //this will return an array by converting a list into an Array and you cna use this directly
const all = [a,b,...fields]; //useing spread operator on list will also return list 

### Strings and it's pre defined methods
var id = "income-0"
var num = "1234.5678"

* id.split('-') => ["income" ,"0"]
* parse.Float() => just to convert a String into a decimal numebr
* parseInt() => to conver to integer
* num.toFixed(2) => to two decimal places with rounding of last digit, example 1234.57
* num.lenght => gives the lenght of string
* num.substr(<position to start reading>,<end position to end reading>) => num.substr(0,2) will be 12

const n = `${firstName} ${lastName}`;

* console.log(n.startsWith('J'));
* console.log(n.endsWith('th'));
* console.log(n.includes('oh'));
* console.log(firstName.repeat(5));
* console.log(`${firstName} `.repeat(5));


## Type Of
var i = 10;
var name = "John";
* typeOf(i) => number
* typeOF(name) => string


## Prompts and Alerts
alert("hello!!")

var lastname = prompt("what is your lastname?")
console.log(lastname);

## Loops
1.) if else
2.) Switch 
3.) Terneray :  var drink = age>18?'beer':'juice';
4.) for : for(i=0,i<array.lenght;i++){}
5.) forEach : Array.foreach(function(current,index,array){}) //this will go through all the array elements in the given array
6.) map : Array.map(function(current,index,array){}) //this will create a new copy of the given array and goes the actions mentioned within it
7.) for of : for (const cur of array){ } //this loop can take continue and break commands and also have benefits of forEach method, so it is a beautiful combination of forEach and for loop

## Objects and Functions
refer to specific chapters as JS is all about these two main topics

## Other tips 
1.) Truthy and Falsy Values 
        falsy are: undefined,null,0,'',NAN
        truthy are: which are NOT falsy
        var height = 0;
        if (height || height ==== 0){
            ----
        } 
        Since 0 is a falsy value in order for a variable to accept to 0 as a value you msut explicity define it
        var item = <get this value from somewhere>
        if (item){
            //note: item's true or false case will be defiend by our falsy & truthy rules
        }
2.) !isNaN(getInput.value) is equivalent to (getInput.value !=== '')

## Maps
const question = new Map(); //initializing a map
* question.set(1,'what is your name?'); //setting key and value into the Map
* question.set(true,45);

* question.get(1); //getting value from a Map
* question.has(45); //check the existence of a value
* question.size; //map lenght check
* question.clear(); //clears out the map data
* question.delete(1); //delete one specific value and key 

## Sync and Async 
* Async : if there are any wait steps then the callback functions will run in the background and still allows the rest of the script to be executed continuously. Highly needed when there are large images to be processed etc when rest of the code can be executed while one method is still processing. 

* Sync: when the lines of code go step by step in order

* Advantages: 
    -> Allow aync fucntions to run in background
    -> We pass in callbacks that run once the fucntion has finished its work
    -> Move immediately without blocking

* How it works behind scenes: 
    -> when an execution stack is created with any such "Web API" based functions then it sends a call back to web API engine, it sits there until execution is done and in the meanwhile the event stack will remove this stack and continue taking other stack of events.
    -> When the execution is done for that call back fucntion in Web API engine then it add's that call back function to the message queue and waits for event stack to take it back and execute
    -> web API engine is outside the regular JS but comes with it and it hold many such long lasting events

## ES6 Web API methods
* setTimeout(() => {},1500) 
  setTimeout(id => {},2500,recipe.id) 
  // time it will wait to do the processing mentioned in the call back function








