//Array Declarations
var userDetails = ['John','Miller',1990,false]
var userDetails2 = new Array('John','Miller',1990,false)

//Array mutation
userDetails[4] = 'product manager'
    //userDetails[6] = 'Earth' 
userDetails[userDetails.length] = 'USA'

//Array common functions to add
userDetails.push('56789');
userDetails.unshift('Mr.');

//Array common functions to remove
userDetails.pop();
userDetails.shift();
console.log(userDetails.indexOf(1990));
console.log(userDetails.indexOf(45)); // -1 when such value does not exist

console.log(userDetails);