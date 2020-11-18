## JS Fundamentals 

#### Values and Variables
let birthYear = 1990;

birthyear is Variable and 1990 is the value which is a known fact. But note that data type is always only defined on value and NOT on variable. 

#### Primitive Data Types

* Number : these will have decimals although visible or not visible
* String
* Boolean
* Undefined
* Null
* BigInt (ES 2020 introduced)

In order to check the type of a value, you can do

console.log(typeOf birthYear);  
    *number*

console.log(typeOf Undefined);
    *undefined*

console.log (typeOf null);
    *Has an outstanding Bug and it says `Object` which is incorrect*

#### Usage of let , const, var

* var: is older ES way of definiiton and should not be used
* let: only for mutable variables
* const: only for immutable variables (default)

#### Strings and template literals
const val = "I'm " + firstName + ' , a ' + (year - birthYear) + ' years old'

console.log(val);

* This is complex way of typing the string, hence there exists template literals as below.

const tempLiterals = `I'm ${firstName} , a ${year - birthyear} years old`;

* using tempalte literals you can write string in multi line without using \n

#### Taking Decisions if/else

    ` const age = 15

    if(age > =18){
        consol.log('Sarah can start driving the car');
    } else {
        const yearsLeft = 18-age;
        console.log(`Sarah is too young. Wait for another ${yearsleft}`);
    }

    `

#### Type Conversion and Coersion








