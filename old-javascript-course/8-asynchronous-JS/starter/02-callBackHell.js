/**
 * About call back Hell which was the reason why Promises are made
 * 
 * Note: this is old style and must not be used , go for Promises instead as explained in next segment
 */

 
//About Callback Hell
function getReceipe(){
    //Level 1 Timeout
    setTimeout(() => {
        const recipeID = [123,456,789,001];
        console.log(recipeID);

        //Level 2 Timeout
        setTimeout(id =>{
            const recipe = {
                title: 'French tomato',
                publisher: 'Jonas'
            };
            console.log(`${id}:${recipe.title}`);

            //Level 3 Timeout
            setTimeout(publisher => {
                const recipe2 = {
                    title: ' italian',
                    publisher: 'Jonas'
                };
                console.log(recipe2);

            },1500, recipe.publisher);

        },1500,recipeID[2]);

    },1500);
};

getReceipe();


