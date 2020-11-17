import axios from 'axios'; 
//with 3ed party libraries, you can directly call them rather than specifying the path
// you can give any name but its a standard to give the same name as package name, hence 'axios'
// axios is replacement for fetch from previous lecture. it's for api calling.
// benefits of axios from fetch are: a.) it works on many browsers b.) it does not need explicit json methods, it's inbuilt c.) also better in error handling than fetch 



export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(query){ //we dont use the keyword function when it's within the class
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch(error) {
            alert(error);
        }       
    }
    
}