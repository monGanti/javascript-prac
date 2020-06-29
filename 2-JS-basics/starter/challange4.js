//Objects and properties

var john = {
    firstName: 'John',
    mass:70,
    height:1.64,
    bmi:function(){
        return (this.mass/(this.height^2));
    }
}

var mark = {
    firstName: 'Mark',
    mass:60,
    height:1.80,
    bmi: function(){
        return (this.mass/(this.height^2));
    }
}

function bmiCompare(bmi1,bmi2){
    if (bmi1.bmi()>bmi2.bmi()){
        console.log(bmi1.firstName + " has higher bmi of " + bmi1.bmi());
    }else if (bmi1.bmi()<bmi2.bmi()){
        console.log(bmi2.firstName + " has higher bmi of " + bmi2.bmi());
    }else{
        console.log("Both have equal BMI of " + bmi1.bmi());
    }
}

console.log(john.bmi());
console.log(mark.bmi());
console.log(bmiCompare(john,mark));