let score = 33; // op is number
let score1="33" ; //it is a string
console.log(typeof score);
console.log(typeof(score1));//it is the another way to known the datatype


//convertion operation
let num="12abc"
let valueInNumber=Number(num);
console.log(typeof valueInNumber);
console.log(valueInNumber);// here the op is NaN

/*convert operation op
"33"=>33 string to number
"12abc"=>NaN
true=>1  , false=>0  means true convert 1 and false convert 0
string=>NaN , Here NaN is also a special type*/


//other convertion boolean convertion
let isLoggedIn=1; //""&"Rahul"
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//op is true

/*op convertion
1=>true , 0=>false
""=>false
"hitesh"=>true*/

//convertion of string
let somenumber=33;
let StringNumber= String(somenumber);

console.log(StringNumber); //op 33
console.log(typeof StringNumber);//op string




