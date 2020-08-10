import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoading } from './views/base';

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Likes object
 */
const state = {};
window.state = state;

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () =>{
    // 1. get the query from the view
    const query = searchView.getInput();
    //Testing
    //const query = 'pizza';

    if (query){
        //2. New Search object and add it to state
        state.search = new Search(query);

        //3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try{
            //4. Search for recipes
            await state.search.getResults(); // send the results to state search

            //5. Render results on UI
            clearLoading();
            searchView.renderResults(state.search.result);
        }catch(error){
            alert(`Something went wrong in Search Controller`);
            clearLoading();
        }
        

    }
}


elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault(); //This will not reload the page upon click again, as it default happens with this app, try manually clicking on the search button.
    controlSearch();
})

//TESTING
/* window.addEventListener('load', e =>{
    e.preventDefault(); //This will not reload the page upon click again, as it default happens with this app, try manually clicking on the search button.
    controlSearch();
}) */

elements.searchResPages.addEventListener('click',e => {
    //console.log(e.target);
    //basically when you check this target, a click made on button or arrow or anywhere near the text will show different locators , inorder for this click to be generic we need to use event deligation and transfer all events to main class and usage of ".closest()" does that
    const btn = e.target.closest('.btn-inline');
    if (btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
        //console.log(goToPage);
    }
})

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = async () =>{
    //get the ID from url
    const id = window.location.hash.replace('#','');
    console.log(id);

    if(id){
        //Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //Highlight Selected search item
        if (state.search) searchView.highlightSelected(id);

        //Get new recipe object
       state.recipe = new Recipe(id);

       //TESTING
       //window.r = state.recipe;

       try{
            //Get Recipe data
            await state.recipe.getRecipe();
            //console.log(state.recipe.ingredients);
            state.recipe.parseIngradients();

            //Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            clearLoading();
            recipeView.renderRecipe(state.recipe,state.likes.isLiked(id));
            //console.log(state.recipe);
       }catch(error){
           console.log(error);
           console.log(state.recipe);
           alert(`Error in Processing Recipe Controller!!`)
           clearLoading();
       }
        

    }

};

//because it is page url change to another id get call, hence the window instead of element on an existing page
//When you have to call more than 1 event for the same callbackfunction ,you can do like below
['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipe));


/**
 * LIST CONTROLLER
 */
const controlList = () => {
    //Create a new list IF there is none yet
    if(!state.list) state.list = new List();

    //Add each ingradient to the List
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count,el.unit,el.ingredient);
        listView.renderItem(item);
    });
};

//Handling delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //handle the delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        //delete from state
        state.list.deleteItem(id);

        //delete from UI
        listView.deleteItem(id);
    
    //Handle the count value
    } else if(e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value,10);
        state.list.updateCount(id,val);
    }

});

/**
 * Restore all the recipes on page load
 */
window.addEventListener('load', () => {
    state.likes = new Likes();

    //Restore all the likes upon page load
    state.likes.readStorage();

    //Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    //render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
})


/**
 * Likes Controller
 */
const controlLikes = () => {
    if(!state.likes) state.likes = new Likes();
    const currentId = state.recipe.id;

    //User has NOT yet liked current recipe
    if(!state.likes.isLiked(currentId)){
        //Add like to the state
        const newLike = state.likes.addLike(currentId,state.recipe.title,state.recipe.author,state.recipe.img);

        //on UI Toggle likes button
        likesView.toggleLikeBtn(true);

        //Add likes to UI list
        likesView.renderLike(newLike);

    //User has liked curretn recipe    
    } else {
        //Remove like from the state
        state.likes.deleteLike(currentId);

        //Toggle the like button
        likesView.toggleLikeBtn(false);

        //Remove like from UI list
        likesView.deleteLike(currentId);

    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
    
}


//Handling recipe button clicks within recipe section
elements.recipe.addEventListener('click', e => {
    /* if there are more than 1 type of buttons which needs the match to the top most class then we use .matches in this case it is +/- buttons for servings and like buttons near it etc which are all sitting in the same header*/
    if(e.target.matches('.btn-decrease, .btn-decrease *')) {
        //Decrease button is clicked
        if ( state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
        
    } else if(e.target.matches('.btn-increase, .btn-increase *')){
        //increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        listView.clearList();
        controlList();

    } else if (e.target.matches('.recipe__love, .recipe__love *')){
        controlLikes();

    }
    //console.log(state.recipe);
})



/**Inital test
const r = new Recipe(47746);
r.getRecipe();
console.log(r);*/


//window.l = new List();
//window.l = new Likes();










