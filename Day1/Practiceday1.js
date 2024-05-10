const prompt = require('prompt-sync')();
var x; // Genral way to define a Variable in Javascript//
var y;

var x = 10; // Defining some value to variable called x;

// To print or to get an output we use Console.log

console.log(x); // printing the value of x//

// Let,use and Const are the keywords.

let var1 = 10;
var var2 = 20;
const var3 = 30;

//--------------------------------------------------------------------------------


//Primitive Data Type

//Number Data Type

let number1 = 10;
let number2 = 20; 
let number3 = 4.5 // Floating Point Number.

//String

let string1 = "Ankit";
let string2 = 'Saini';
console.log(string1,"This is a String");
console.log(string2,'Printing a string');

//String using Backticks//

let string3 = `Hey there ${string1} how are you`;
console.log(string3);

// Boolean -: return 1 or 0 based on the condiiton

// const user1= prompt("Enter the Number");

// if(user1 >= 10){
//     console.log("True");
//     return true;
// }

// else{
//     console.log("False");
//     return false;
// }

//null - It basically means it is empty whereas undefined means it is not assigned//
//Big Int//
//Big int is a built in object in Javascript that provides a way to represent whole number greater than 253-1//


let bigbin = BigInt("0b1010101001010101001111111111111111");
// console.log(bigbin);

//-------------------------------------------------------------------------

//Object is a Reference data type

// JavaScript objects are fundamental data structures used to store collections of data. 
// They consist of key-value pairs and can be created using curly braces {} or the new keyword

//-----------------------------------------------------------------------------------------
//Understanding Var keyword -: 
var variable1 = 10;
function f(){
    var variable2 = 95;
    console.log(variable2,variable1);
}
f();
// console.log(variable2);
var variable1 = 20;
console.log(yu); // Hoisting concept//
var yu = 20;
//----------------------------------------------------------------------------------------------
//Let Keyword -: Introduced in 2016 and an improved Version of Var keyword//
//Let Keyword has the Block Scope//
// Re declaration is Allowed//

let let1 = 10;  //Global Scope//
function g(){  // Function Scope//
    let2 = 11;
    console.log(let1); // Can be accessed because let1 has Global Scope//
    console.log(let2);
}
g();  


let func1 = 10;
function test2(){
    let temp1 = 20;
    if(temp1>=20){
        let temp2 = 90;
    }
    console.log(temp2); // Reference error can't be accessed//
}


console.log(temp3);
let temp3 = 20; // Hoisting error//


// Const keyword -: Mainly used for those variables that will be constant throughout the process//
// Block Scope and const keyword can't be declared and reassign//

const a = 10;
function f(){
    a = 9; // Can't be assigned// 
    console.log(a);
}
f();


// Assignment Operators 
//assign value

let assign1 = 10; // Here = operator is used to assign the values//
assign1+=10// Addition assignment Operator//
assign1-=10;//Subtraction Assignment Operator//
assign1*=10;//Multiplication Assignment Operator//
assign1/=24;//Division Assignment Operator//
assign1**=2;//Exponentian Assignment Operator It's similar to Math.pow(a,b)//


// Shift Assignment Operator//
let variable6 = 24;
variable6>>=2;// Right Shift Assignment Operator//
variable6<<=2;//Left Shift Assignment Operator//

//Bitwise Assignment Operator//

variable6&=2;//And Operation//
variable6 |=4; // Or Operation
variable6^=4;//Bitwise Operation//
//----------------------------------------------------------------------------------------------------------

//Comparison Operators 

let variablee  = 10;
let variablee2 = 20;

if(variablee == variablee2){ // It will only evaluate value not type as it is not considering strictly equality
    console.log("equal");
}
else{
    console.log("Not equal");
}


if(variablee === variablee2){ // Checking the type also//
    console.log("");
}
else{
    console.log("")
}

if(variablee > variablee2){
    console.log("Variablee is greater than variablee2");
}

else if(variablee2 > variablee){
    console.log("Variablee2 is greater than variablee");
}


//-----------------------------------------------------------------------------------

//Logical Operators
//&&, ||, !
// && -: This operator name is AND and it specify that if both of the 
//value are correct then the statement will be executed
//|| -: Determines that if any of the condition is true then the statement will executed
//