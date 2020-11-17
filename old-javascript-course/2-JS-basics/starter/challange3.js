//functions,function expressions and Arrays

var billAmount = [124,48,268];
var tips = [tipCalculator(billAmount[0]),tipCalculator(billAmount[1]),tipCalculator(billAmount[2])];

var finalAmounts = [finalAmount(billAmount[0],tips[0]),finalAmount(billAmount[1],tips[1]),finalAmount(billAmount[2],tips[2])]

function finalAmount(billAmount,tip){
    return billAmount+tip;
}

function tipCalculator(billAmount){
    if (billAmount>=200){
        return billAmount*0.1;
    }else if (billAmount<200 && billAmount>=50){
        return billAmount*0.15;
    }else if (billAmount<50){
        return billAmount*0.2;
    }else{
        return billAmount+" is not valid";
    }

}

console.log(tips);
console.log(finalAmounts);