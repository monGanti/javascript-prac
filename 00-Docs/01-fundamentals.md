# JS Fundamentals [Part 2]

### 1. Strict Mode
we can enable a JS class in strict mode by simply adding the following line in the very beggining of the class
    ` 'use strict' ; `

Following are the benefits by using the strict mode: 
* Sometimes the bugs introduced while coding are not always caught on the browser console and in such cases using strict mode will help in logging the errors

* It will also help in restricting you from using any future reserved keywords as variables 

**Examples:**

    ` 'use strict' 
    
      let hasDriversLicense = false;
      const passTest = true;

      if (passTest) hasDriverLicense = true; //Notice there is no 's' in hasDriversLicense
      if(hasDriversLicense) console.log("I can Drive");
      `
Output: [nothing in case of no strict ] but will print [I can Drive] in case of strict

    ` const interface = 'Audio' ;
    const if = true; 
    `
Output: error

### 2. Functions 
They are fundamental building blocks of any programming language, it makes the code more reusable 

Basic Functions are written as below: 

    ` function logger() {
        console.log('my name is xyz');
    }

    logger(); //calling or invoking the function
    `

Functions with parameters are written as below:

    `function fruitProcessor(apples,oranges) {
        const juice = `Juice is made of ${apples} apples and ${oranges} oranges` ;
        return juice;
    }

    const appleOrangeJuice = fruitProcessor(5,1);
    console.log(appleorangeJuice);
    `

### 3. Function Declarations and Expressions

**Function Declaration** 

    ` function calcAge1(birthYear) {
        return 2020 - birthYear;
    }

    const age1 = calcAge1(1991);
    `

** Function Expression** 

    ` const calcAge2 = function(birthYear) {
        return 2020 - birthYear;
    }

    const age2 = calcAge2(1991);
    `

    `console.log(age1, age2); `

*Note* : In function expressions you can not call the function before it is created because of hosting where as in fucntion declarations, you can call the functions way before it's created line of code. 

Arguments are the value that you pass into the function but Parameters are palceholders which we use while creating the function.

### 4. Arrow functions (New from ES6)

    ` const calcAge3 = birthYear => 2020 - birthYear;

      const age3 = calcAge3(1991);

      console.log(age3);
    `

    ` const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2020 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years`;
    } 

    console.log(yearsUntilRetirement(1991, 'Bob'));
    `
Basically if you compare the Arrow functions with function declarations then it is just a simplifed version where we just took out the keyword "function" and added "=>" and sometimes we can also avoid "return" keyword on line lines as it knows to implicitly return.

**Can I use Arrow Functions more often as they are easy and smart??** 

NO!! not always. Because Arrow functions may not understand "this" logic. Hence it is better to know all 3 kinds of functions as below equally well. 

* function declarations
* function expressions
* Arrow functions 

### 5. Functions can Call other Functions

It is very common for functions to call otehr functions 

    ` function cutPieces(fruit) {
        return fruit * 4;
    }
    `

    ` function fruitProcessor(apples, oranges) {
        const applePieces = cutPieces(apples); //calling other functions
        const orangePieces = cutPieces(oranges);

        console.log(`There are ${applePieces} cut apples and ${orangePieces} oranges in the house`);
    }
    `
### 6. Arrays

** Declaration : Literal ** 

    `
    const friends = ['Micheal' , 'Peter', 'Sarah'];
    console.log(friends);

    `
Output: Micheal, Peter, Sarah

** Declaration: Using pre-defined Array Function**

    ` 
    const years = new Array(1991,1984,2008,2020);
    `

You can call the specific values as below: 

    ` console.log(friends[0]);
      console.log(friends[2]);
    `

Output: 

Micheal
Sarah

** Few Basic Pre-Defined Array calls ** 

    ` console.log(friends.lenght); `
Output: 3

    ` console.log(friends[friends.lenght - 1]) `
Output: Peter

    `friends[2] = "Jay" ; 
    console.log(friends)`
output: [Micheal, Steven, Jay]

** Arrays can hold any kinds of data **

    ` const firstName = 'Bob;
    const him = [firstName, 'Smith', 2020-1991,'teacher',friends]
    `
basically above example holds: strings, numbers, functions,and also arrays within an Array.

### 7. Basic Array Operations

Following are few pre-defined functions to add/remove/edit Arrays etc.

    `const friends = ['Micheal', 'Steven', 'Peter']; `


    `const newLenght = friends.push('Jay') //Adds to the last position of the Array
     console.log(friends);
     console.log(newLenght);
     `
Output: 
[Micheal,Steven,Peter,Jay]
4

    `const popped = friends.pop(); //Remove from last position
    console.log(friends);
    console.log(popped);`
Output: [Micheal,Steven,Peter]
Jay

    `friends.unshift('John'); //Add at the first position
    console.log(friends);`
Output: [John,Micheal,Steven,Peter]

    `friends.shift(); //Removes the first element and returns the array
    console.log(friends);`
Output: [Micheal,Steven,Peter] 

    `console.log(friends.indexOf('Steven')); //Find the position number
    console.log(friends.indexOf('Bob'));`
Output: 1
-1

    `console.log(friends.includes('Steven')); //Boolean answer if it exists or not
    console.log(friends.indexOf('Bob'));`
Output: true
false






