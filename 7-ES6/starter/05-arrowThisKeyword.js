/**
 * ES6 - arrow functions
 */

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        //Note that the use of "this" is within just the scope of this function
        document.querySelector('.green').addEventListener('click',function(){
            //Here the scope of "this" becomes global so it represents the global document
            //So we need to hack like using a variable (self) to get the object's this scope
            var str = "This is box number" + self.position + 'and it is ' + self.color;
            alert(str);
        })
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        // In ES6: the scope of this can represent the literals surrounding it so it does understand the object's "this" scope from the callback function of below event listener But note that this particular clickMe objects elements function was written as function() and NOT as () => because we want to create a "this" scope here , if we took the route of making this function also as () => then the scope of "this" will again represent it's surrounds and from here it will go to global document which is "undefined"
        document.querySelector('.green').addEventListener('click',() => {
            let str = `This is box number ${this.position} and it is ${this.color} in ES6`;
            alert(str);
        })
    }
}
box6.clickMe();

/**
 * How does this work in function Constructors 
 */

 function Person(name){
     this.name = name;
 }

//ES5
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with '+el;
    }.bind(this));
    console.log(arr);
}
//var friends = ['Bob','Mary'];
//new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends5 = function(friends){

    let arr = friends.map((el) => {
        return this.name + ' in ES6 is friends with '+el;
    });
    console.log(arr);
}
let friends = ['Bob','Mary'];
new Person('John').myFriends5(friends);
