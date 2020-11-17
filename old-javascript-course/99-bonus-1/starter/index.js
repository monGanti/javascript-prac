const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`,`utf-8`);
const laptopData = JSON.parse(json);

//console.log(__dirname);
//console.log(laptopData);

const server = http.createServer((req,res) => {

    const pathName = url.parse(req.url,true).pathname;
    //console.log(req.url)
    //url.parse will make it object based
    const id = url.parse(req.url,true).query.id;
    //console.log(url.parse(req.url,true).query);
    // Example: http://127.0.0.1:1337/laptop?id=4&name=apple&date=today 
    // {id :4, name: apple, date: 'today' }


    //PRODUCT OVERVIEW
    if(pathName === '/products' || pathName === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        //res.end('This is the PRODUCTS page');

        fs.readFile(`${__dirname}/templates/template-overview.html`,'utf-8',(err,data) => {
            let overviewOutput = data;
            
            fs.readFile(`${__dirname}/templates/template-card.html`,'utf-8',(err,data) => {
                const cardsOutput = laptopData.map(el => replaceTemplate(data,el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                //console.log(cardsOutput);
            
                res.end(overviewOutput);
            });
        });



    //LAPTOP OVERVIEW
    } else if (pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200,{'Content-type':'text/html'});
        //res.end(`This is the LAPTOP page for laptop ${id}`);

        fs.readFile(`${__dirname}/templates/template-laptop.html`,'utf-8',(err,data) => {
            const laptop = laptopData[id];
            const output = replaceTemplate(data,laptop);
            res.end(output);
        });

    //URL NOT FOUND
    } else {
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('This is not a valid page');
    }


    
});

server.listen(1337,'127.0.0.1',() => {
    console.log('listening for requests now');
});

function replaceTemplate(originalHtml,laptop){
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
        output = output.replace(/{%IMAGE%}/g,laptop.image);
        output = output.replace(/{%PRICE%}/g,laptop.price);
        output = output.replace(/{%SCREEN%}/g,laptop.screen);
        output = output.replace(/{%CPU%}/g,laptop.cpu);
        output = output.replace(/{%STORAGE%}/g,laptop.storage);
        output = output.replace(/{%RAM%}/g,laptop.ram);
        output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
        output = output.replace(/{%ID%}/g,laptop.id);
        return output;
};