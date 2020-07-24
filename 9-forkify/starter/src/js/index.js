import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Likes object
 */
const state = {};


const controlSearch = async () =>{
    // 1. get the query from the view
    const query = searchView.getInput();

    if (query){
        //2. New Search object and add it to state
        state.search = new Search(query);

        //3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4. Search for recipes
        await state.search.getResults(); // send the results to state search

        //5. Render results on UI
        searchView.renderResults(state.search.result);

    }
}


elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault(); //This will not reload the page upon click again, as it default happens with this app, try manually clicking on the search button.
    controlSearch();

})








