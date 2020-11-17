/**
 * Promises with Async and Await
 */

//Promises Resolve or Reject methods
//Note: we are only doing consuming of promises
const getIds = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve([60,120,240]);
    },2000);
});

const getRecipe = rid => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const recipes = {
                title: `French Food`,
                purchases:`Monku`
            }
            resolve([id,recipes.title,recipes.purchases]);

        },1500,rid);
    });
};

const getRelatedRecipe = pur => {
    return new Promise((resolve,reject) => {
        setTimeout(purchaser => {
            const relatedRes = {
                title: `italian`,
                purchaser: purchaser
            };
            resolve([purchaser,relatedRes.title,relatedRes.purchaser]);
        },1500,pur);
    });
};

/* getIds.then(id =>{
    console.log(id);
    return getRecipe(id[2]);
})
.then(rep => {
    console.log(rep);

}) */

// In ES7 onwards we have a better way to capture the promise response rather than using "then" and "catch"
/**
 * Async functions : to know about async capture methods 
 * Await:  to capture the exact promise response
 * Note: 
 *   a. Await is used only withint Async Methods 
 *   b. Async methods always return only a promise (note: not a const variable)
 *   c. when you want to work with a returned promise from an Aysc method then use ".then" as the example below
 */
async function getReceipes(){
    const Ids = await getIds;
    console.log(Ids);
    const rep = await getRecipe(Ids[1]);
    console.log(rep);
    const rel = await getRelatedRecipe(rep[2]);
    //console.log(`This is the title of final recipe by ${rel[1]} purchased by ${rel[2]}`);

    return rel; // Async's always return a promise only, dont add a return if you done want to return but if you do then it should always be a promise

}

getReceipes().then(result => 
    console.log(`This is the title of final recipe by ${result[1]} purchased by ${result[2]}`));

/**
 * How to catch an exception in case of "reject" of async method?? then see the next chapter "05-apiFetch.js"
 */