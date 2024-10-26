const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);//op [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);//flash


//use of concat . it is same like push
//marvel_heros.concat(dc_heros)
//console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//alternate method of concate. sprade operator
//const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const real_another_array = another_array.flat(Infinity)//infinity use for showing the depth of the array means here actual depth is 3 , but you can write infinity then mc can automatic handle it
//console.log(real_another_array);//op 
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/



    console.log(Array.isArray("Rahul"));//op false
    console.log(Array.from("Rahul"));//op [ 'R', 'a', 'h', 'u', 'l' ]
    console.log(Array.from({name:"Rahul"}));//op []
    
    
    
