/**
 * Step1: First arrange the order of tasks:
 * a. Add event Handler
 * b. get input values
 * c. Add the new item to out data structure
 * d. Add the new item to UI
 * e. Calculate Budget
 * f. Update UI
 * ------------------------------------------
 * Step2: Arrange the above steps in Modules
 * Ui Module
 *          a. Get input Values
 *          b. Add the new item to the UI
 *          c. Update the UI
 * Data Module
 *          a. Add the new item to our data structure
 *          b. Calculate budget
 * Controller Module
 *          a. Add Event Handler
 */

//Module preparation and Interactions between Modules
var budgetController = (function(){
    var x =20;

    var add = function(a){
        return a+x;
    }

    //returning objects only
    return {
        publicTest: function(b){
            return add(b);
        }    
    }
})();
//Note: Only the return object values are only accessible to the outside scope and because of closures the other variables and functions within the scope is only accesible to the return object. 
//Example: budgetCOntroller.x OR budgetController.add(5) if used in console will not be accesible
//but budgetController.publicTest(5) is accessible

//Module 2
var uiController = (function(){
        //some code here
})();

//Module 3: Here see how you cna interact with other modules
var controller = (function(budgetCtrl,uiCtrl){

    //Note making use of dummy values like 'budgetCtrl' instead of real name is important so that any name change to that module can be modified in 1 location and not though out the scope of this controller
    var z = budgetCtrl.publicTest(10);
    return {
        publicControllerMethod: function(){
            console.log(z);
        }
    }
// Finally reference to which controller you are referring to here
})(budgetController,uiController);