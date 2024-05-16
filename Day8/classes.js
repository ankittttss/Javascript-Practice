
// //Definition -: Classes are a template for creating objects. They encapsulate data with code to work on that data. 
// //Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
// // class User {
// //     User(username, passsword, email) {
// //         this.username = username,
// //             this.email = email;
// //         this.passsword = passsword
// //     }

// //     encryptPassword() {
// //         return `${this.passsword}abc`
// //     }

// //     changeusername() {
// //         return `${this.username}`
// //     }
// // }

// //Difference between Class Declaration and Class Expression
// //Class Declaration
// // class Rectangle {
// //     constructor(height, width) {
// //       this.height = height;
// //       this.width = width;
// //     }
// // }

// // //class Expression//
// // const Rectangle2 = class {
// //   constructor(height,width){
// //       this.height = height;
// //       this.width = width;
// //   }
// // };


// // //Constructor -: The constructor method is a special method for 
// // //creating and initializing an object created with a class
// // //There can only be one special method with the name "constructor" in a class — 
// // //a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.


// // //Methods -: Methods are defined on the prototype of each class instance and are shared by all instances. 
// // // Methods can be plain functions, async functions, generator functions, or async generator functions. 

// // //Example//

// // class Rectanglee {
// //     constructor(height,width){
// //         this.height = height;
// //         this.width = width;
// //     }

// //     getarea(){
// //         return this.height*this*this.width;
// //     }

// //     getwidth(){
// //         return this.width;
// //     }
// // }


// // function User(username,password,email){
// //   this.username = username;
// //   this.password = password;
// //   this.email = email;
// // }

// // User.prototype.encryptPssword = function(){
// //     return `${this.password}abc`
// // }

// // User.prototype.changeUsername=function(){
// //     return `${this.username}abc`
// // }

// // const ankit = new User("ankit","saini","z");
// // ankit.encryptPssword();
// // console.log(ankit.encryptPssword());


// class User {
//     constructor(username){
//         this.username = username;
//     }

//     logme(){
//         console.log(`Username is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email = email;
//         this.password = password;
//     }

//     addCourse(){
//         console.log(`new Course was added by ${this.username}`)
//     }
// }


// const Ankit = new Teacher("ankit","saini","233");
// Ankit.addCourse();
// console.log(Ankit instanceof Teacher)

//--------------------------------------------------------------------------------

//This Keyword//

const play = {
    name:"ankit",
    play(){
        console.log(this)
    }
}

function playVideo(title){
    this.title = title;
    console.log(this);
}

play.play();
const ans = new playVideo('contra'); // Creates a new Object//
// console.log(ans);

//This Keyword -: In object this refers to the Object.
//Alone this refers to the Global Object
//In a function alone this refers to the Global Object