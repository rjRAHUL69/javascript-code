const score = 400;
//console.log(score);//op is 400

const balance =new Number(100);
//console.log(balance);//op is [Number: 100]

//convert it in string
// console.log(balance.toString().length);//op 3 because now the number convert into string

// console.log(balance.toFixed(2));//op is 100.00 means it gives the fixed floating points it call precission value

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision());


const hundreds = 1000000;
//console.log(hundreds.toLocaleString());//op is 1,000,000 it is the american standard value
//console.log(hundreds.toLocaleString('en-IN'));//op is 10,00,000 it is the indian standard


// ********************Math object use*****************
//console.log(Math);
//console.log(Math.abs(-4));//op is 4. abs means absolute value ,it transfer the negative value in positive, but not transfer positive value in negative
//console.log(Math.round(4.6));//op is 5 ,it return the rounnd value 
//console.log(Math.ceil(4.2));//op is 5 , it return upper value
//console.log(Math.floor(4.9));//op is 4, it return lower value
//console.log(Math.min(2,5,4,7,9,4));//op 2
//console.log(Math.max(2,5,4,7,9,4));//op 9


//most useful math element Math.random()
//console.log(Math.random());//it return random value between 0-1
//if you generate random value in between 1-10
//console.log((Math.random()*10)+1);
//console.log(Math.floor(Math.random()*10)+1);//it return exact random value


//generate random number between 10-20
 const min =10;
 const max = 20;
 console.log(Math.floor(Math.random()*(max-min+1))+min);
 
