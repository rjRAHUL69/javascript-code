const name = "hitesh";
const repoCount = 50;

//console.log(name + repoCount + "value");// in this time we cant write like this 

//we use backticks(``)  benefit of use `` -string interpollation

//console.log(`hello my name is ${name} and my repo name is ${repoCount}`);

const gameName = new String ('hiteshhhh');

// These are all interview ask questions
// console.log(gameName[0]);
// console.log(gameName.__proto__);//gamename
// console.log(gameName.length);
// console.log(gameName.toUpperCase());//it give the uuper case value of the string

//console.log(gameName.charAt('2'));//it give which char do you want


//console.log(gameName.indexOf('t'));//it gives your string value in which positionn present

//const newString = gameName.substring(0, 4)// it gives the value from 0-4 not include 4 
//console.log(newString);


//slice(-8,4) here we use negative value also , if we use negative value then it works reversly
const anotherString= gameName.slice(-8,4)
console.log(anotherString);//op is ite 

//trim() it remove the all un use  spaces when data use in databases
const newStringOne = "    rahul  ";
console.log(newStringOne);//op is     rahul     
console.log(newStringOne.trim());//op is rahul


//replace( )
const url = "https://hittesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));

//you can ask any thing
console.log(url.includes('hitesh'));//op is true
console.log(url.includes('Rahul'));// oop is false
 

