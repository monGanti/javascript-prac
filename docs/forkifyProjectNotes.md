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

    //console.log(`addition is: ${add(ID,2)} and Multiple is: ${multiply(3,5)} and string is: ${str}`);
    //console.log(`addition is: ${a(ID,2)} and Multiple is: ${m(3,5)} and string is: ${str}`);
    console.log(`addition is: ${searchView.add(searchView.ID,3)} and Multiple is: ${searchView.multiply(4,5)} and string is: ${str}`)`

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
