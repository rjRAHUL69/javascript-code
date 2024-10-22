let score = 33; // op is number
let score1="33" ; //it is a string
// console.log(typeof score);
// console.log(typeof(score1));//it is the another way to known the datatype


//convertion operation
let num="12abc"
let valueInNumber=Number(num);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// here the op is NaN

/*convert operation op
"33"=>33 string to number
"12abc"=>NaN
true=>1  , false=>0  means true convert 1 and false convert 0
string=>NaN , Here NaN is also a special type*/


//other convertion boolean convertion
let isLoggedIn=1; //""&"Rahul"
let booleanIsLoggedIn=Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);//op is true

/*op convertion
1=>true , 0=>false
""=>false
"hitesh"=>true*/

//convertion of string
let somenumber=33;
let StringNumber= String(somenumber);

// console.log(StringNumber); //op 33
// console.log(typeof StringNumber);//op string


/***********************operations**********************/

let value=3;
let negValue=-value;
//console.log(negValue);//op is -3

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);
// console.log(3%3);
// console.log(3**3);//it is 2 the power


//add two string
let str1="hello";
let str2=" Rahul";
let str3= str1 + str2;
//console.log(str3);//op is hello Rahul

//complex situation
// console.log(1+"2");//12
// console.log("1"+2);//12
// console.log("1"+2+2)//122
// console.log(1+2+"3");//33

//the write way to code a operations
// console.log((3+4)*5%3);//2


//boolean operations
// console.log(+true);//op 1
// console.log(true+);//error
//  console.log(+"");//op is 0



console.log(NULL>0);//false
console.log(NULL==0);//false
console.log(NULL>=0);//true
/* Here the reason is that an equality check == and comparisons > < >= <= work differently
Compsrisons convert null to a number , treating it as 0. That's why null>=0 (true) and null>0(false)*/



