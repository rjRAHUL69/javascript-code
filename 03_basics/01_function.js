 function saymyname()  //function definition
  {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
    
 }
 //saymyname(); //function call
 /* op is
R
A
H
U
L*/

//making a simple function
function addTwoNumbers(number1,number2) {
  console.log(number1 + number2);
}

// addTwoNumbers(12,12);//op 24
// addTwoNumbers(12,null);//op 12

//parameter wala function
//...=sprade operator also call rest operator
//now it call rest operator
function calculateCartPrice(val1 , val2 , ...num1){
  return num1;
}
//console.log(calculateCartPrice(200 ,400 ,500,2000));//op [ 500, 2000 ]
/* here val1=200 , val2=400, num=[500,2000]*/

//how to pass object in function

const user = { //let a object
    username: "Rahul",
    price: 199
}
function handleObject(anyobject){
   // console.log(`User name is ${anyobject.username}and price is ${anyobject.price}`);
    
}
//handleObject(user);//op User name is Rahuland price is 199



//pass array in function
const myNewArray = [200, 400, 100, 600]
function returnSecondaryValue(getArray){
  return getArray[1];
}
console.log(returnSecondaryValue(myNewArray));//op 400
