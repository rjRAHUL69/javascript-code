//array
const myArr = [0 ,1 , 2, 3, 4,5]
const myHeros = ["shaktiman","naagraj"];

const myArr3 = new Array(1,2,3,4)
//console.log(myArr[3]);//0

//now learning array methods
//myArr.push(6)//push means add the value at last
// myArr.pop()//means remove the last element

//same like push pop but it add the data atfirst and also remove from first
// myArr.unshift(9)
// myArr.shift()
// console.log((myArr));



//now these methods are give answer boolean type means true or false
//console.log(myArr.includes(9));//means is 9 present in myArr
//console.log(myArr.indexOf(3));//3 ,ip=9 op=-1


const newArr = myArr.join()
//console.log(myArr);//op[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);//op 0,1,2,3,4,5
// console.log( typeof newArr);//op is string

//slice, splice interview questions
console.log("A",myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const mmyn2 = myArr.splice(1,3)
console.log("c ",myArr);
console.log(mmyn2);







