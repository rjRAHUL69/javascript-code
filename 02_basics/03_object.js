//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);//op { id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email :"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"Mahato"
        }
    }
}
//console.log(regularUser.fullname);//{ userfullname: { firstname: 'Rahul', lastname: 'Mahato' } }
//console.log(regularUser);
/*op is {
    email: 'some@gmail.com',
    fullname: { userfullname: { firstname: 'Rahul', lastname: 'Mahato' } }
  }*/

   // console.log(regularUser.fullname.userfullname.firstname);//op Rahul

   const obj1 = {1:"a", 2:"b"}
   const obj2 = {3: "a",4:"b"}
   const obj4 = {5:"a ",6:"b"}

   // const obj3 = { obj1,obj2}
   //console.log(obj3);//op is { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
   //const obj3 = Object.assign(obj1,obj2)
   //console.log(obj3);//op { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

    