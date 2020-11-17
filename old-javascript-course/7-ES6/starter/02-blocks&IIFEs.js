/**
 * ES6 - Blocks and IIFE's
 */

//Note that in ES6 all variables are block scoped so the concept of IIFE is just to keep everything within the block to maintain data privacy

//ES6
{
    let a = 3;
    const b = 4;
    var c = 6;
}

//console.log(a+b); // this will throw error as a,b are not understood outside the block #dataPrivacy
console.log(c); // var's do not have block concept so this will print it

//ES5
(function(){
    var c = 6;

})();

//console.log(c); // this will throw error as c was within the IIFE as per ES5