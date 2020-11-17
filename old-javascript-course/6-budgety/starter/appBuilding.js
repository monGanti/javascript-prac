/**
 * BUDGETY APP BUILDING
 */

 //BUDGET Controller
var budgetController = (function(){
    
    var Expenses = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    Expenses.prototype.calcPercentage = function(totalIncome){
        if (totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome)* 100);
        }else {
            this.percentage = -1;
        }     
    };

    Expenses.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.total[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp:0,
            inc:0
        },
        budget: 0,
        percentage: -1
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
        
        deleteItem: function(type,id){
            var idsArr,index;

            idsArr = data.allItems[type].map(function(current){
                return current.id;
            });

            index = idsArr.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index,1);
            }
        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.total.inc);
            });
        },

        getPercentages: function(){
            var allPercentages = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPercentages;
        },

        calculatebudget: function(){
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            //calculate the budget : income - expenses
            data.budget = data.total.inc - data.total.exp;

            //calculate the percentage of total money spent
            if (data.total.inc > 0){
                data.percentage = Math.round((data.total.exp/data.total.inc) * 100);
            } else {
                data.percentage = -1;
            };
            

        },

        getBudget: function(){
            return { 
                budget: data.budget,
                totalIncome: data.total.inc,
                totalExpense: data.total.exp,
                percentage: data.percentage
            }
            
        },
        testing: function(){
            console.log(data);
        }
    }
    

})();

// UI Controller
var uiController = (function(){

    var domString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetValue: '.budget__value',
        budgetIncomeValue: '.budget__income--value',
        budgetExpenseValue: '.budget__expenses--value',
        budgetPercentage:'.budget__expenses--percentage',
        container: '.container',
        expensePercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num,type){
        var numSplit,int,dec;

        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');
        int = numSplit[0];
        dec = numSplit[1];

        if(int.length > 3){
            int = int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp'?'-':'+') + int + '.' + dec ;

    };

    var nodeListForEach = function(list,callback){
        for(var i = 0; i < list.length; i++){
            callback(list[i],i);
        }
    };

    return {
        getInput: function(){
            return {
                type: document.querySelector(domString.inputType).value,
                description: document.querySelector(domString.inputDescription).value,
                value: parseFloat(document.querySelector(domString.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            var html,newHtml,element;

            //define the html string with placeholder text
            if (type === 'inc') {
                element = domString.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if (type === 'exp'){
                element = domString.expenseContainer;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }            
        
            //Replace the placeholder text
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value,type));

            //Insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);         
        },

        deleteListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
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

        displayBudget: function(budgetObj){
            var type;
            budgetObj.budget > 0 ? type = 'inc':type = 'exp';

            document.querySelector(domString.budgetValue).textContent = formatNumber(budgetObj.budget,type) ;
            document.querySelector(domString.budgetIncomeValue).textContent = formatNumber(budgetObj.totalIncome,type);
            document.querySelector(domString.budgetExpenseValue).textContent = formatNumber(budgetObj.totalExpense,type);
            
            if(budgetObj.percentage > 0){
                document.querySelector(domString.budgetPercentage).textContent = budgetObj.percentage + '%';
            } else {
                document.querySelector(domString.budgetPercentage).textContent = 'NA%';
            }

        },

        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(domString.expensePercentageLabel);
            
            nodeListForEach(fields, function(current,index){
                if (percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }else {
                    current.textContent = '---';
                }
            });
        },

        displayDate: function(){
            var now,month,months,year;

            now = new Date();
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(domString.dateLabel).textContent = months[month]+' '+year;

        },

        changeType: function(){
            var fields = document.querySelectorAll(
                domString.inputType + ',' +
                domString.inputDescription + ','+
                domString.inputValue);

            nodeListForEach(fields,function(cur){
                cur.classList.toggle('red-focus');
            });

            document.querySelector(domString.addButton).classList.toggle('red');
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

        document.querySelector(dom.container).addEventListener('click',ctrlDeleteItem);

        document.querySelector(dom.inputType).addEventListener('change',uiCtrl.changeType);
    };

    var updateBudget = function(){
         //1. Calculate the budget
         budgetCtrl.calculatebudget();

         //2. return the budget
         var budget = budgetCtrl.getBudget();

        //3. Display the budget on the UI
        uiCtrl.displayBudget(budget);
    };

    var updatePercentages = function(){

        //1. Calculate percentages
        budgetCtrl.calculatePercentages();

        //2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        //3. Update the UI with new percentages
        uiCtrl.displayPercentages(percentages);

    };
    
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

            //6. Update Percentages
            updatePercentages();
        }
       
    };

    var ctrlDeleteItem = function(event){
        var itemID,splitID,type,ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. Delete the item from the data Structure
            budgetCtrl.deleteItem(type,ID);

            //2. Delete the item from the UI
            uiCtrl.deleteListItem(itemID);

            //3.Update and show the budget
            updateBudget();

            //update Percentages
            updatePercentages();

        }
    };
    
    return {
        init: function(){
            console.log('Application has started');
            uiCtrl.displayDate();
            uiCtrl.displayBudget({ 
                budget: 0,
                totalIncome: 0,
                totalExpense: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }
})(budgetController,uiController);

controller.init();