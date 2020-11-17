# What are we learning in Forkify Project

## How import and exports work
Search.js
    `export default 'I am an exported String from Search.js'`

searchView.js
    `export const add = (a,b) => a + b;
    export const multiply = (a,b) => a * b;
    export const ID = 20;`

index.js
    `import str from './models/Search';
    //import {add,multiply,ID} from './views/searchView';
    //import {add as a,multiply as m,ID} from './views/searchView';
    import * as searchView from './views/searchView';

    *Usage*
    //console.log(`addition is: ${add(ID,2)} and Multiple is: ${multiply(3,5)} and string is: ${str}`);
    //console.log(`addition is: ${a(ID,2)} and Multiple is: ${m(3,5)} and string is: ${str}`);
    console.log(`addition is: ${searchView.add(searchView.ID,3)} and Multiple is: ${searchView.multiply(4,5)} and string is: ${str}`)`

    * Other Notes *
    //When importing a package , you do not require a path specification
    import {Fraction} from "fractional";

    **Note: Sometimes developers do not use these kind of import and export which exist in ES6, they use direct npm format which is older way of writing as below
    var Fraction = require('fractional).Fraction; // this is also a kind of import
    module.export.Fraction // this is a kind of export too

## API Calling
1. it's no more advisable to use fetch , so for importing axios 
    `npm install axios --save`

2. Use the following ApI notes 
    `forkify-api.herokuapp.com`

## MVC model
MVC is model-view-controller. 
* Models are where the backend functionality is handled and are usually starting with capitals in class names (Example: Search.js)
* Views are the frontend representation of the data (Example: searchView.js)
* Controllers are central classes which bring views and models together (example: index.js)


## Search initial Practice
1. In Search.js first export a class and add a async function
2. In Index.js , import this Search.js and call that async function
3. Check in the browser if this is working

## Search MVC model building

#### Search button click and see in console the data rendering via API 

1. Search.js: write async function to get the initial result when the forkify API is invoked
2. index.js :   a. Add a State object
                b. Add a eventListener to submit the Search button with an callback function which again calls controlSearch function that is outside
                c. controlSearch function captures the results from getResults in Search.js and puts it in the state object
3. base.js :    a. export object elements
                b. elements will contain all the query selectors classes on the page

4. index.js:    a. import base.js
                b. change the static seletors to generic based on elements in base.js

5. searchView.js:   a. import base.js
                    b. capture a value from search field

6. index.js:    a. import searchView.js
                b. change static value's of search field query to generic call

#### List the Search items on the left hand side 

7. searchView.js: a. First create a getResults function to capture the recipes data which comes from API
                  b. use another function to markup the html results list wrt to the data from step1 called getrecipe()
                  c. you will have to add the necessay dom selectors into base.js while making (b)

8. index.js:    a. add this getResults function into the controlSearch function steps to render data

#### Clear the input field in the search area

9. searchView.js :  a. add clearInputField() method
                    b. add clearResults() which exists on left side method
                    using query selectors

10. base.js : add any selectors to elements for step9 

11. index.js: a. IN controlSearch() add both methods to clearInputField() and clearResults()

#### Edit the search list for NOT displaying full name and concising the list

12. searchView.js : a. add a methods to concise the title name
                    b. add that method within the markup method where the initial title was captured from the UI

#### Add a Spinner while the search results are coming up on screen 

13. base.js : since the loader can be reused across multiple views, it's better to write it here
                a.) write a method to rnederLoader()
                b.) write a method to clearLoader()

14. index.js: call both the methods here witin controlSearch() , also import the new methods 

#### Add Pagination to recipes results

15. searchView.js : a. to the renderResults() methods we need enhancements 
                    b. add renderButtons() methods which can be called within renderResults()
                    c. add a seperate method for exact button markup as well and call it within renderButtons()

16. index.js    : a. add a click evenlistener for the page button
                  b. modify the clearResults() with clearing out page HTML 

## Recipe MVC 

#### Recipe Model Creation

1. Recipe.js : a.) Make a model and add the get api call async method
               b.) Add CalcCookTime() and TotalServing() methods based on the data 
               c.) you cna test by calling this import into index.js to see that data details

#### Recipe Controller 
2. Index.js : a.) add the eventhandler on Window which gets a unique hash id of each recipe
              b.) add a controlRecipe() method and start adding all recipe related code here

#### Recipe View 
3. recipeView.js : a.) create the renderRecipe() functionwith markup for center of the page recipe section
                   b.) add this to the index.js controller under recipe controller section
                   c.) basically a click on a recipe will show its recipe details in the center
                   d.) clear out the recipe each time using clearRecipe() on index.js -> controlRecipe()

#### Update the count in the ingradients within the Recipe

4. recipeView.js : a.) install fractorial into package.json to do some fractions within recipeView
                b.) 

#### Update the servings + /- 
                



