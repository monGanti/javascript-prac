/**
 * Promises 
 */

//What is a Promise ??
/**
 * In Aync methods which stay in web API engine to process the functions,  Promises are advanced pre-defined functions offered by ES6 which are designed to tell the user that "I promise to return you an answer, please proceed with rest of the execution" which is why such functions are called promises + user will also not have to write many nested call back functions and can do with promises which are more reliable. 
 */

//What are promise States?
/**
 * Pending ->(event happens) -> settled/resolved -> Results (a. Fullfiled or b.Rejected)
 */

//Promise must always have resolve and reject params and is decalared like a function Constructor with "P"
const getIds = new Promise((resolve,reject) => {
    setTimeout(()=>{
        //This is more of a capture of Resolve or Reject status, Resolve will send the results to .then below and reject will send to .catch below.
        resolve ([123,456,789,001]);
        //reject ([123,456,789,001]);
    },1500);
});

const getRecipe = recId => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const receipe = {
                title: `French recipe`,
                publisher:`Monku`
            };
            resolve([id,receipe.publisher,receipe.title]);
        }, 1500,recId);
    
    });
};

const getRelated = publisher => {
    return new Promise((resolve,reject) => {
        setTimeout(pub =>{
            const receipe = {
                title: `Italian receipe`,
                publisher:`Monku`
            };
            resolve(`${pub}: of ${receipe.title}`);
        },1500,publisher);
    });

};

getIds
.then(ids => { //with getIds as the promise function reference and since we know it will resolve some array of id's, we can declare that as the input param in .them here
    console.log(ids);
    return getRecipe(ids[2]);
})
.then(rep => {
    console.log(rep);
    return getRelated(rep[1]);
})
.then(rel => {
    console.log(rel);
})
.catch(error => {
    console.log(`Error!!`);
})