import axios from 'axios'; 

export default class Recipe{
    constructor(id){
        this.id = id;
    }


    async getRecipe(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
            //console.log(res);
        }catch(error){
            console.log(e);
            alert('Something went wrong :(');
        }
    }

    calcTime(){
        const numIngredients = this.ingredients.length;
        //assume that every 3 ingredients will take 15 mins
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods *15;
    }

    calcServings(){
        this.servings = 4;
    }

    parseIngradients(){
        const unitsLong = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups','pounds'];
        const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];
        const units = [...unitsShort,'kg','g'];

        const newIngradients = this.ingredients.map(el => {
            //1.) uniform units
            let ingradients = el.toLowerCase();
            unitsLong.forEach((unit,i) => {
                ingradients = ingradients.replace(unit,unitsShort[i]);
            });

            //2.) Remove paranthesis
            ingradients = ingradients.replace(/ *\([^)]*\) */g, " ");

            //3.) Parse Ingradients into count, unit and ingradient
            const arrIng = ingradients.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

            let objIng;
            if(unitIndex > -1){
                //There is a unit
                //Ex 4 1/2 cups, arrCount is [4, 1/2] ---> eval("4+1/2") --> 4.5
                const arrCount = arrIng.slice(0,unitIndex);

                let count;
                if(arrCount.lenght === 1){
                    count = eval(arrIng[0].replace('-','+'));
                } else {
                    count = eval(arrIng.slice(0,unitIndex).join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex+1).join(' ')
                };

            } else if(parseInt(arrIng[0],10)){
                //There is no Unit , but the first element is a number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            } else if(unitIndex === -1){
                //There is NO unit and No number in 1st position
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            return objIng;
        });
        this.ingredients = newIngradients;
    }

    updateServings (type) {
        //Servings
        const newServings = type === 'dec'?this.servings - 1 : this.servings +1;

        //ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });

        this.servings = newServings;
    }


}
