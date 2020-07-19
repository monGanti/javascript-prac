/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

//Using Class
class Town {
    constructor(name,yearBuilt){
        this.name = name;
        this.yearBuilt = yearBuilt;
    }

}

//Using SubClass
class Parks extends Town{
        constructor(name,yearBuilt,ntrees,area){
        super(name,yearBuilt);
        this.ntrees = ntrees;
        this.area = area;
    }

    treeDensity(){
        const density = this.ntrees / this.area;
        console.log(`The Tree Density of ${this.name} Park is ${density.toFixed(2)} per sq Kms`);
    }

    parkAge(){
        const age = new Date().getFullYear() - this.yearBuilt;
        return age; 
    }
}
class Street extends Town{
    constructor(name,yearBuilt,lenghtOfStreet, sizeOfStreet = "normal"){
        super(name,yearBuilt);
        this.lenghtOfStreet = lenghtOfStreet;
        this.sizeOfStreet = sizeOfStreet;
    }      
}

{
    //ABOUT THE PARK REPORT
    const park1 = new Parks('Hopkinton State Park',1980,1200,5);
    const park2 = new Parks('Westbough Park',1990,650,3);
    const park3 = new Parks('Shewsbury Park',1962,700,4.5);

    const agesParks = [park1.parkAge(),park2.parkAge(),park3.parkAge()]

    //Using the SpreadOpt in restparams
    function avgAge(...ages){
        let sum = 0;
        //using arrows
        ages.forEach(cur => sum += cur);
        const avg = sum / ages.length;
        return [sum,avg.toFixed(2)];
    }

    //using a map
    const measureTrees = new Map();
    measureTrees.set(park1.ntrees,park1.name);
    measureTrees.set(park2.ntrees,park2.name);
    measureTrees.set(park3.ntrees,park3.name);

    function higherTrees(map){
        //using destructing 
        for(let [key,value] of map.entries()){
            if ( key > 1000) {
                console.log(`Park with more than 1000 trees is ${value}`); 
            } else {
                continue;
            }
                
        }
    }

    console.log(`----PARKS REPORT-----`);
    park1.treeDensity();
    park2.treeDensity();
    park3.treeDensity();
    console.log(`The Average age of the parks is ${avgAge(...agesParks)[1]}`);
    console.log(higherTrees(measureTrees));


    const st1 = new Street('A-St',1980,20,'small');
    const st2 = new Street('B-St',1990,30,'big');
    const st3 = new Street('C-st',2000,10);
    const st4 = new Street('D-St',2010,60,'huge');

    const stLength = [st1.lenghtOfStreet,st2.lenghtOfStreet,st3.lenghtOfStreet,st4.lenghtOfStreet];

    const stMeasure = new Map();
    stMeasure.set(st1.name,st1.sizeOfStreet);
    stMeasure.set(st2.name,st2.sizeOfStreet);
    stMeasure.set(st3.name,st3.sizeOfStreet);
    stMeasure.set(st4.name,st4.sizeOfStreet);

    function streetSize(map){
        //using destructing 
        for(let [key,value] of map.entries()){
            console.log(`The Street ${key} is of size ${value}`);              
        }
    }

    
    console.log(`----STREET REPORT-----`);
    console.log(`The Total Lenght of the Streets are ${avgAge(...stLength)[0]}`);
    console.log(`The Average Lenght of the Streets are ${avgAge(...stLength)[1]}`);
    streetSize(stMeasure);
    
   
    



}



