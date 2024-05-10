// Javascript use let,const and Var Keyword to store the data//

// What is a Variable -: A variable is a container for a value, like a number we
// might use in a sum, or a string that we might use as part of a sentence.


// Try to prefer Let over var. Var was declared back and let is a new keyword //
// Var supports Hoisting but let don't//

// Secondly, when you use var, you can declare the same variable as many times as you like, but with let you can't

let x = 6 // Assigning the variables//
console.log(x);

const y = 10;
// We Can't override this Value//

//------------------------------------------------------------------------------------------------------------

// DataTypes in Javascript
// a)String b) Number c)BigInt d)Boolean e)Undefined f)Null g)Symbol h)Object

let car1name = "Volvo";
let car2name = "Chevrolet";

// String Datatype//

let i = 20.00;
let number2 = 50;

// Number Dataype;
//Stored in 64 Bit//
let xx = BigInt("123456789012345678901234567890");

//Primitive Data Type
//A primitive type has a fixed size in memory. For example, a number occupies eight bytes of memory, and a boolean value can be represented with only one bit. 
//The number type is the largest of the primitive types.
// If each JavaScript variable reserves eight bytes of memory, the variable can directly hold any primitive value

//Reference types are another matter, however. Objects, for example, can be of any length -- they do not have a fixed size. 
//The same is true of arrays: an array can have any number of elements. Similarly, a function can contain any amount of JavaScript code. Since these types do not have a fixed size, their values cannot be stored directly in the eight bytes of memory associated with each variable. 
//Instead, the variable stores a reference to the value. 
//Typically, this reference is some form of pointer or memory address. 
//It is not the data value itself, but it tells the variable where to look to find the value.


//Undefined and Null

//Undefined-: When a variable is innitialise but no value assigned then it directlu takes undefined as its value
//Accessing it's Value will give you undefined as it's out put//
//It's primitive Value//

//Example

let xu;
console.log(xu);
 
function hey(){
    // No return statement so the default value is Undefined
}

//NULL

//Deliberate assignment that represent the absense of any object Value
//It is also a primitive Value

//Var -: Global and Local Scope,
//Local Scope -:  while local scope is for variables declared inside functions.

var num = 40;
function f(){
  var square = number*number; // Local Scope -: Declared Inside Functions//
  console.log(square); // We can access it inside the Function
}

f();
//---------------------------------------------------------------------------------------

//Another Function to understand the Var and their Scope

function ff(){
  var number = 40;
  var square = number*number;
  console.log(square);    
}

ff();

console.log(number) // Reference error as number have local scope -: Reference Error
//Variable with var keyword can be redclared and reassigned
//if any value is not assigned to the var variable the the default value it contains is undefined












//-------------------------------------------------------------------------------------------------------
//Arithmetic Operators -: +,-,*,/,%,**,++,--
//Additional Operators
let numbr1 = 1;
let num2 = 4;
console.log(numbr1+num2);

//subtraction Operator

let yu = 10;
let uy = 50;
console.log(uy-yu);

//Multiplying operator

let initial1 = 0;
let initial2 = 0;
console.log(0*0);

//Division Operator

let div1 = 10;
let div2 = 2;
console.log(div1/div2);

//Remainder Operator -: We will use modulus here

let gh = 10;
let hg = 2;
console.log(gh%hg);

// ** operator is called exponential and ** == Math.pow()//

//Assignment Operator

//a) = 
//b) +=
//c) -=
//d) *=
//e) /=
//f) %=
//g) **=  


// Shift Assignment Operator
//a) <<= 
//b) >>=
//c) >>>=


//Bitwise Assignment Operator
//a) &=
//b) ^=
//c) |=

//Logical Assignment Operator
//a) &&=
//b) ||=
//c) ??=


//Example

let answer = 10; // Simple Assignment Operator

let answer2 = 0; //Addition Assignment Operator
answer2+=10;

let answer3 = 10; //Subtraction Assignment Operator
answer3-=5;

let answer4 = 19;  // Multiplication assignment Operator//
answer4*=12;

let answer5 = 10; // Exponentian Assignment Operator//
answer5**=5; 

let answer6 = 14; // Division Assignment Operator
answer4/=7

let answer7 = 19; // Modulo Assignment Operator//
answer7%=8;

let answer8 = 100; // Left Shift Assignment Operator
answer8<<=5;

let answer9 = 90; // Right Shift Assignment Operator//
answer9>>=8;


//------------------------------------------------------------------------------

//Comparison Operator 

//a) == equal to 
//b) === equal value and equal Type
//c) !=not equal
//d) !== not equal or not equal Type
//e) > greater than
//f) < less than
//g) >= greater than equal to 
//h) <= less than equal to 


