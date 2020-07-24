import {elements} from './base';

//Note that when there is jsut one line in the function then it is an explicit return
// Also the reason for not keeping a const return directly here is because, in that case you will have pass all constants as arguments in the import which does not seem neat approach
export const getInput = () => elements.searchInput.value; 

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = ''; //innerHTML will remove all the html which was given in markup 
};

const renderRecipes = recipe =>{
    const markup = `<li>
                        <a class="results__link results__link--active" href="${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="${recipe.title}">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${recipe.title}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;
    elements.searchResList.insertAdjacentHTML('beforeend',markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipes);

};