//console.log("Hello World!!")

var johnScores,markScores,maryScores;
johnScores = (89+120+103)/3;
markScores = (116+94+123)/3;
maryScores = (97+124+105)/3;

if(johnScores>markScores && johnScores>maryScores){
    console.log('John is winner with score' + johnScores);
}else if (markScores>johnScores && markScores>maryScores){
    console.log('Mark is Winner with score' + markScores);
}else if (maryScores>johnScores && maryScores>markScores){
    console.log('Mary is Winner with score' + maryScores);
} else {
    console.log("it's a Tie");
}

