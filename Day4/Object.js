// In JavaScript, almost "everything" is an object.
//Objects are Variables too but can contain values
//Object Values are Written in key -> value Pair
//It is a common practice to declare objects with the const keyword.

// Creating a javascript Object//

// //a) Using Object Literal.
// const person = {"name":"ankit","class":"12th","department":"Computer Science"}
// console.log(person.class);
// console.log(person.department);
// console.log(person.name)

// //b)Using New Keyword

// const playerdescription = new Object();
// playerdescription.name = "Shashank Sing";
// playerdescription.age = 18;
// playerdescription.role = "Batsman";
// playerdescription.teamname = "Kings XI Punjab";
// console.log(playerdescription);

//Javascript Objects are Mutable//
// Objects are mutable: They are addressed by reference, not by value -: As they are Refrential Data Type
// const x = person; // Any changes to x will also occur in Person//

//c) Object.create method -: creates a new Object, using an 
// existing object as the prototype of the newly created object//
// const neww = Object.create(playerdescription);
// console.log(neww);

//properties are the value associated with a Javacsrip Object//
// A JavaScript object is a collection of unordered properties
//Accessing Javacsript Object -:
// the synatx is -:object.property name
//the synatx is -: object[i];


// for(let x in person){
//     console.log(person[x]);
// }

//Nested Objects

const personn = {
    fullName:"Spongebob,SquarePants",
    age:30,
    address:{
       state:"haryana",
       city:"Panipat",
       pincode:132103,
    },
    Hobbies:["Karate","Football"],
}


function iteratingrecursively(obj){
  for(let x in obj){
       if(typeof obj[x] == 'object'){
        iteratingrecursively(obj[x])
       }
       else{
        console.log(obj[x]);
       }
 }
}

iteratingrecursively(personn)
function hello(){
  console.log("foo")
}
