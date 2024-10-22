/*kis trah se data memory me rakha jata hai aur usse access kya jata hai uss hisab se datatypes ko 2 part me divide kya gaya hai*/
// primitive = all primitive datatypes are call by value references
//  7 TYPES: string, number,boolean,null,undefined,symbol,bigInt

const score=100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//define symbol
const id = Symbol('123');
const anotherId = Symbol('123');
//bigInt
//console.log(id === anotherId);
const nigNumber = 2343242334234234234234n;





//call by reference(non primitive)
//array,functions, object

//object
const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name : "rahul",
    age:22,
}

const myFunction = function(){
    //console.log("Hello world");

}

//console.log(typeof scoreValue);




//************************************************************* */
// *********************Memory*********************

//ttwo types of mmemory ----- 1.stack (all primitive datatype use it)
//                            2.heap (all non-primitive datatype use it )

let myYoutubename ="rahulytcom"
let anothername = myYoutubename;
anothername = "chaiaurcode"
// console.log(myYoutubename);
// console.log(anothername);

let userone = {
    email:"user@gmail.com",
    upi:"uaer@ybl",
}
let userTwo = userone;
userTwo.email="hitesh@gmail.com";
console.log(userone.email);
console.log(usertwo.email);




