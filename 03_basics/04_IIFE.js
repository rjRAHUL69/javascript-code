//IIFE= Immediately Invoked Function Expression(IIFE) it use to remove the global scope polution
/*iife  ek aisi fun jo immediately execute ho jiea
syntax: (here write the function ,means ffunction defination )(here call the function)*/
(function chai(){
    console.log(`DB CCONNECTED`);   
})//FUNCTION DEFINATION
();//functiion call and this semicolon is important
//op is:DB CCONNECTED 


//arrow function
(()=>{
    console.log(`db connected`);
    
})();//op:db connected
//this semicolon is important

//argument pass
((name)=>{
    console.log(`${name}`);
    
})(`Rahul`);
//op:db connected