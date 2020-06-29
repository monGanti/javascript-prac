/**
 * Loops 
 */

//Print numbers from 0 to 9
for (var i = 0; i < 10; i++){
    console.log(i);
}

//Print Array elements
var john = ['John','Miller',1990,false,'designer']
for (var i=0;i<john.length;i++){
    console.log(john[i]);
}

//Print Array elements in alternate While loop
var i =0;
while(i<john.length){
    console.log(john[i]);
    i++;
}

//Continue and break statements
//Print all String Values
for(var i =0; i<john.length;i++){
    if (typeof(john[i]) !== 'string') continue;
    console.log(john[i]);
}

//break until to find anything apart from string
for(var i =0; i<john.length;i++){
    if (typeof(john[i]) !== 'string') break;
    console.log(john[i]);
}

//Array loop reverse
for(i=john.length-1;i>=0;i--){
    console.log(john[i]);
}