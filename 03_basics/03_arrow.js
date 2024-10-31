// const user = {
//     username: "Rahul",
//     price: 999,
//     welcomeMessage:function(){
//         console.log(`${this.username} , Welcome to website`);
    
//     }
// }
//user.welcomeMessage();//op is Rahul , Welcome to website

//user.username = "sam";//now we cahange the username

//user.welcomeMessage();//op is sam , Welcome to website, because here this function change  the current context
 

//if this keyword define in the function
//function chai(){
   // let username ="Rahul";
   // console.log(this.username);//op: undefined
    
// }

//chai();


//now arrow functiion
const chai = function() {
    let username = "Rahul"
    console.log(this.username);
    
}