/**
 * Rest Parameters 
 */

//ES5
function isFullAge5(){
    var argsArr = Array.prototype.slice.call(arguments); //arguments is a keyword which looks like an array but it is actually like an object, which is why we need to convert it into an array

    argsArr.forEach(function(cur){
        console.log((2020 - cur) >=18);
    })
}

//isFullAge5(1990,2010,1965);

//ES6
function isFullAge6(...years){
    years.forEach(cur => console.log((2020 - cur)>=18));

}

//isFullAge6(1990,2010,1965);

//ES5 -with additional params
function isFullAge5(limit){
    var argsArr = Array.prototype.slice.call(arguments,1); //arguments is a keyword which looks like an array but it is actually like an object, which is why we need to convert it into an array

    argsArr.forEach(function(cur){
        console.log((2020 - cur) >=limit);
    })
}

isFullAge5(21,1990,2010,1965);

//ES6 - with additional params
function isFullAge6(limit,...years){
    years.forEach(cur => console.log((2020 - cur)>=limit));

}

isFullAge6(21,1990,2010,1965);