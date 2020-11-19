# JS Fundamentals 

### 1. Values and Variables
let birthYear = 1990;

birthyear is Variable and 1990 is the value which is a known fact. But note that data type is always only defined on value and NOT on variable. 

### 2. Primitive Data Types

* Number : these will have decimals although visible or not visible
* String
* Boolean
* Undefined
* Null
* BigInt (ES 2020 introduced)

In order to check the type of a value, you can do

    `console.log(typeOf birthYear); `

Output: number

    `console.log(typeOf Undefined);`

Output: undefined

    `console.log (typeOf null);`

Has an outstanding Bug and it says `Object` which is incorrect*

### 3. Usage of let , const, var

* **var:** is older ES way of definiiton and should not be used
* **let:** only for mutable variables
* **const:** only for immutable variables (default)

### 4. Strings and template literals
const val = "I'm " + firstName + ' , a ' + (year - birthYear) + ' years old'

    `console.log(val);`

This is complex way of typing the string, hence there exists template literals as below.

    `const tempLiterals = `I'm ${firstName} , a ${year - birthyear} years old`; `

Using tempalte literals you can write string in multi line without using \n

### 4. Taking Decisions if/else

    ` const age = 15

    if(age > =18){
        consol.log('Sarah can start driving the car');
    } else {
        const yearsLeft = 18-age;
        console.log(`Sarah is too young. Wait for another ${yearsleft}`);
    }

    `

### 5. Type Conversion and Coersion
**Type Conversion** 

You can convert a string to a number by using Number() and number to a string using String()

    ` const inputYear = '1991';
      console.log(Number(inputYear)+18);

    `
Output: 2009

    ` console.log(Number('Jones)); `

Output: NaN 

    ` console.log(String(23), 23); `

Output: 23[non colored] , 23[ colored indicating its a number]

**Type Coersion** 

The + Operators will trigger the coersion to convert anything into a string dynamically without specifying '23' and can just say 23

    ` console.log('I am' + 23 + ' years old'); `

output: I am 23 years old

where as a - , * , / , > etc operators will convert anything into a number

    ` console.log('23' - '10' - 3); `

Output: 10
Output if + was used: 23103

### 6. Truthy and Falsy Values

There are 5 Falsy Values:
* 0
* ' '
* undefined
* null
* NaN

To convert a value into a Boolean use Boolean()

    ` 
      console.log(Boolean(0));
      console.log(Boolean(undefined));
      console.log(Boolean('Jonas'));
      console.log(Boolean({}));
    
    `

Output: false, false, true, true

If you do something like below then you will always end up in else block

    ` const money = 0
    if (money) {
        console.log('save it');
    } else {
        console.log('Get a Job')
    } `

Output: Get a job

### 7. == vs ===

=== is strict compare and a number will be compared with a number 100% where as == sometimes can be compared with a string which has a number value and that cna cause errors. 

    ` const val = 23
    if (val === 23) console.log('yes');
    ` 
Output: yes 

    ` const val = '23' 
    if(val === 23) console.log ('yes')
    else console.log('no');
    `
Output: no

Note in case of == both of the above will be true which is why it is always preferred to use ===

### 8. Logical Operators

* && : true only if both conditions are true
* || : true if any one condition is true
* ! : true only if condition is false

### 9. Switch case

    ` const day = 'monday' ;

    switch(day) {
        case 'monday':
            console.log("hello");
            break;
        case 'tuesday':
        case 'wednesday':
            console.log("hi");
            break;
        default:
            console.log("nothing");
            break;
        
        }
    `

Important to use the breaks to stop the execution else it will continue to execute all cases. 
Example in the case of 'tuesday' it will continue to log the word "hi".

### 10. Ternary Operator

    ` const age = 23; 
    const drink = age >=18 ? 'wine' : 'water' ; `

output : wine






















