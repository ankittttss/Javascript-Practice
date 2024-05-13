//We will learn about the functions
//JS Function -: JavaScript function is a set of statements that take inputs, 
// do some specific computation, and produce output.

//Basic JS Function//

function multiply(a,b){
   return a*b;
}

console.log(multiply(2,3));

//Function Expression//
// It is similar to a function declaration without the function name. 
// Function expressions can be stored in a variable assignment.

let x = function um(a,b){
    return a+b;
}

//Arrow Function -: It is one of the most used and efficient methods 
//to create a function in JavaScript because of its comparatively easy implementation.

const dividing = (a,b)=>{  // a,b are parameters
    return a/b; // Return Values //
}