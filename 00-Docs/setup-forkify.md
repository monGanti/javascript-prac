# Setup of Project

### Setup : Initial basic Setup steps
1. Install node to your local and npm comes as part of it
2. Navigate to location where you want to start creating your project and use the following command to create package.json file
    `npm init`
    Follow the steps to create the package.json file and check if it got created successfully.
3. In the same location install webpack with following command
    `npm install webpack@4 --save-dev`
    This will add the webpack as a dev dependency in package.json file. 

** Note: that some libraries you will need only for dev purpose and some are project wide dependencies. The webpack installed in step3 is just a dev dependency so it was added as -dev ** 

4. Add a live-server globally (**see notes below about global usage)
    `npm install live-server --global`

5. Add webpack configuration file in the same level as package.json as below
    a. create webpack.config.js file
    b. Add the configuration (refer to the file in this project at 9-forkify/starter)
    c. Navigate to src/js/index.js file and make import from another js file , example test.js
    d. Navigate to src/js/test.js file and make an export to index.js 
    **NOTE: Because we use webpack now there will be an ability to import and export file among js files and that gives ability to keep the code clean and yet display all the aspects of web pages

#### Other Good to know's
a. (Optional) You can install jquery to check how the regular project dependencies work using the following command
    `npm install jquery --save`
    This will create a dependency in package.json

b. Note: to reinstall the node modules or dependencies again anytime, just remove the node-modules folder and re-install by this command `npm i`

c. to uninstall a dependency you can do the following
    `npm uninstall jquery --save`

d. These dependencies which we installed are all workable within this project but in order to install them globally in your system , you can use -g in the commands as below
    `npm install live-server --global`

### Setup : Webpack installation in depth
6. Add webpack-cli to development dependencies
        `npm install webpack-cli@3 --save-dev`
    Notice that package.json will have another dev dependency added for webpack-cli

7. Then run the following command to get bundle.js installed in js
    `npm run dev`
    Notice that bundle.js will be added under dist/js location

8. Navigate to dist folder and add an new file index.html
    Note: upon doing "!" on vscode a template html code will be auto generated due to emmet plugin

9. Add the line 
    `<script src = 'js/bundle.js'></script>`

10. Now open this index.html in a browser and see the console output. You will see that there was interaction between two files and the values were passed successfully.

11. Add dev and prod modes to package.json
    `"scripts": {
        "dev": "webpack --mode development",
        "build": "webpack --mode production"
    }`
    Note: by doing this we will compress the bundle.js

12. again on cmd run this command
    `npm run build`
    Note: now check the bundle.js and it will show it compressed. 

13. add webpack-dev-server as another dev dependency 
    `npm install webpack-dev-server --save-dev`
    Note: to check on package.json that it was added as dev dependency

14. open webpak.config.js again to add another object
    `devServer: {
        contentBase: './dist'
    }`
    Note: basically here we are saying that anything within dist folder is the one going out to prod which will contain html,css and bundle.js and all the dev code is in src.

15. Go to package.json and add another script with start
    `"start": "webpack-dev-server --mode development --start"` for Windows
    `"start": "webpack-dev-server --mode development --open"` for Mac
    under the "scripts" section
    Note: this will auto run the browser in localhost:8080

16. Make a small change in the src/test.js and src/index.html files and save it. Notice that web browser auto takes in the changes. 

17. You can remove the bundle.js and you will see that still everything works.

18. Now let us install webpack plugins 
    `npm install html-webpack-plugin --save-dev`
    Note: to check for it's right installation in package.json

19. In webpack config file add few plugins as objects
    `const HtmlWebpackPlugin = require('html-webpack-plugin');` and also the following:
    `plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' //this is like starting point, where to fetch from
        })
    ]`
    Note: also delete the index.html which is under js folder. as it will not be needed anymore since we will be bundling the index.html within src

20. Webpack usually can create the html content onfly as well so it is not mandatory to give a template in plugins. Also you will not see the copy of that html being geenrated inside dist/js fodler because it is happening in background.

21. Although we have deleted bundle.js it does not mean it is not doing it's job, you will notice the console log output's still. You can try `npm run dev` and you will see the bundle.js come back into dist/js location again. Note that now the dist/indesx.html will have the bundle location in the script correctly. 

### Setup : Babel installtion 
Babel is used to convert ES6 to ES5 code or sass to css etc

22. use the following to install babel dependencies in 1 command
    `npm install babel-core@6 babel-preset-env@1 babel-loader@7 --save-dev`
    Note: check package.json if they are added within dev dependencies

23. Step1 : Edit the Webpack config file to add babel loader files
    ` module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    } `

24. Step2: Create a config file for babel in the same level as webpack config file with the name `.babelrc`, then it will recongnise it with letter B

25. Step3: edit the babel config file with the details, refer to this projects babel config

26. Step4: Basically there are some area's of code which are not there in ES5 , example: promises. So we need to install babel polyfills to convert them. Use the following command
    `npm install babel-polyfill@6 --save`
    Note: this is a direct dependency and not just a dev dependency as we need it to be bundled.

27. Step5: In Webpack config file, edit the entry point as below:
    `entry: ['babel-polyfill','./src/js/index.js'],`
    Note: This will allow a webpack to make one big bundle with polyfills and index files


### Cleanup 
28. Delete the test.js file and cleanup all the code in Index.js

Now the setup is done, get ready for project creation in MVC model



