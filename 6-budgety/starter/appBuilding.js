/**
 * 
 */

var budgetController = (function(){
    
    var Expenses = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp:0,
            inc:0
        }
    };

    return {
        addItem: function(type,des,val){
            var newItem, ID;

            //creating id
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1 ].id + 1;
            }else{
                ID = 0;
            }
            
            // creating new item
            if (type === 'exp'){
                newItem = new Expenses(ID,des,val);
            }else if (type === 'inc'){
                newItem = new Income(ID,des,val);
            }

            //push the newitem to data
            data.allItems[type].push(newItem);

            //return the newItem
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    }
    

})();

var uiController = (function(){

    var domString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(domString.inputType).value,
                description: document.querySelector(domString.inputDescription).value,
                value: document.querySelector(domString.inputValue).value
            }
        },

        addListItem: function(obj, type) {
            var html,newHtml,element;

            //define the html string with placeholder text
            if (type === 'inc') {
                element = domString.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if (type === 'exp'){
                element = domString.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }            
        
            //Replace the placeholder text
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);

            //Insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);         
        },

        clearInputFields: function(){
            var fields,fieldsArr;

            //put the description and value fields into a list
            fields = document.querySelectorAll(domString.inputDescription + ',' + domString.inputValue);

            //trick the list to conver it into an array
            fieldsArr = Array.prototype.slice.call(fields);

            //loop through using forEach to clear the fields
            fieldsArr.forEach(function(current,index,array){
                current.value = '';
            });

            fieldsArr[0].focus();

        },

        getDom: function(){
            return domString;
        }
    }
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,uiCtrl){

    var setupEventListeners = function(){
        var dom = uiCtrl.getDom();
        document.querySelector(dom.addButton).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
    });
    }

    var updateBudget = function(){
         //1. Calculate the budget

         //2. return the budget

        //3. Display the budget on the UI
    }
    
    var ctrlAddItem = function(){
        //1. get Input data from input field
        var getInput = uiCtrl.getInput();

        if(getInput.description !== "" && !isNaN(getInput.value) && getInput.value>0){
            //2. Add the item to budget controller
            var newItem = budgetCtrl.addItem(getInput.type,getInput.description,getInput.value);

            //3. Add the item to the UI
            uiCtrl.addListItem(newItem,getInput.type);

            //4.clear the fields
            uiCtrl.clearInputFields();

            //5.Update budget
            updateBudget();
        }

            

        

       
    }
    
    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }
})(budgetController,uiController);

controller.init();