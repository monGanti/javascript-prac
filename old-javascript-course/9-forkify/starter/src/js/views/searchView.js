import {elements} from './base';

//Note that when there is jsut one line in the function then it is an explicit return
// Also the reason for not keeping a const return directly here is because, in that case you will have pass all constants as arguments in the import which does not seem neat approach
export const getInput = () => elements.searchInput.value; 

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = ''; //innerHTML will remove all the html which was given in markup 
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });

    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};

/**
 * 
 * Title : 'Pasta with tomato and spinach'
 * acc: 0 / acc + cur.lenght = 5 / newTitle = ['Pasta']
 * acc: 5 / acc + cur.lenght = 9 / newtitle = [ 'Pasta','with']
 * acc: 9 / acc + cur.lenght = 15 / newTitle = ['Pasta','with','tomato']
 */
export const limitRecipeTitle = (title,limit = 17) => {
    const newTitle =[];
    if(title.length > limit){
        title.split(' ').reduce((acc,cur) => {
            if(acc+cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        },0);
        
        return `${newTitle.join(' ')}...`;
    }
    return title;   
}

const renderRecipes = recipe =>{
    const markup = `<li>
                        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="${recipe.title}">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;
    elements.searchResList.insertAdjacentHTML('beforeend',markup);
};

/**
 * CreateButton will create a pagination buttons
 * @param page is a number
 * @param type is 'next' or 'prev'
 */
const createButton = (page,type) => `
                <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1: page +1}>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right'}"></use>
                    </svg>
                    <span>Page ${type === 'prev' ? page - 1: page +1}</span>
                </button>`;

const renderButtons = (page,numResults,resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if(page === 1 && pages > 1){
        //show the next button only
        button = createButton(page,'next');
    } else if(page < pages){
        //show prev and next buttons
        button = `${createButton(page,'next')};
                  ${createButton(page,'prev')}`;
    } else if(page === pages && pages > 1){
        //show prev button only
        button = createButton(page,'prev');
    }
    elements.searchResPages.insertAdjacentHTML("afterbegin",button);
};

export const renderResults = (recipes,page = 1, resPerPage = 10) => {
    const start = (page - 1)*resPerPage;
    const end = page * resPerPage;

    recipes.slice(start,end).forEach(renderRecipes);
    renderButtons(page,recipes.length,resPerPage);

};