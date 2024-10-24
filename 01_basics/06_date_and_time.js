//dates
let myDate = new Date();
//console.log(myDate.toString());//op is universal time
//console.log(myDate.toDateString());//print date 
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);//object

//let myCreatedDate = new Date(2023,0 ,23);
//console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

//let myCreatedDate = new Date(2023,0 ,23,5,3);
// console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("01-14-2023");
//console.log(myCreatedDate.toLocaleString());//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);//1729784227704
console.log(myCreatedDate.getTime());//1673654400000
console.log(Math.floor(Date.now()/1000));//1729784482

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());


//method that use randomly
newDate.toLocaleString('default',{
    weekday: "long",
    
})

