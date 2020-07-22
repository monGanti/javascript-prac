/**
 * This chapter thought about following:
 * What are API's?
 * How to use Fetch to use promises from other sites
 * How to convert the promise response to json
 * 
 */

//Api's are like an interfact to connect the frontend with a ajax server
//We can make internal API's or use external API's offered by 3ed party provider's

//This fetch is a promise itself, so let us consume this promise and work with it's data using "then" and "catch"
function getWeather(woeid){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        //console.log(result);
        return result.json();
    })
    .then(data => {
        //console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperature of ${data.title} today is between ${today.min_temp} and ${today.max_temp}.`)
    })
    .catch(error => console.log(`There is an Error!!`));

}
getWeather(2487956);
getWeather(44418);

// Using fetch and doing with async and await
async function getWeatherAW(woeid){
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

        const data = await result.json(); // await is used on promises and json() is a promise as well
        //console.log(data);
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperature of ${data.title} tomorrow is between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`)

        return data; //Always return a promise for async

    } catch(error){
        console.log(`Error!`);
    }
    
}
getWeatherAW(2487956).then(data => {
    console.log(data);
});
getWeatherAW(44418);

/**
 * Note: All the async methods above may not execute in the same order so the results on the console will not be in order. Thats the meaning of async anyways right :) 
 */



