//Task -1893 && 1880//
const prompt = require('prompt-sync')(); // For The Input Line by default Input is String we will typecast It//
const calculator = (number1, number2, operation)=>{
    if (operation === "+") {  // These are the cases that we use in Calculator// 
         return Number(number1) + Number(number2);
    } else if(operation === '-') { // Subtraction
        return Number(number1) - Number(number2);
    } else if (operation === '*') {  // Multiplication
        return Number(number1) * Number(number2);
    } else if (operation === '/') {  // Division
        return Number(number1) / Number(number2);
    } else {
        console.log("Invalid operation.");
    }
}

function perform(calculator,...args){ // To Validate the length. Here args.length give us the no of Argument we have passed
    if(calculator.length!=args.length){
      return "The length is no suitable";  // Suupose the length is not equal then we will throw an error 
    }

    else{
        
    }
    
    return calculator(...args); // if the length is equal then we will calculate the output using the calculator fn 
}




const converttocelsius = (temperature) => {  // *F to Celsius
     return Number(temperature)*(9/5) + 32;
}

const converttofahereinheit = (temperature)=>{   // Celsius to Fahrenheit
     return (Number(temperature) - 32)*(5/9);
}

const calculateareaoftriangle = (base,height)=>{  // To Calculate the area of Triangle//
    return 1/2*Number(base)*Number(height);
}



const x = prompt("Please Enter the Number1");  // Taking Input from Prompt/,number1/
const y = prompt("Please enter the Number2");  // Taking Input from Prompt,numbr2//
let z = prompt("Enter the operation you want to Perform");  // Taking Input from Prompt,Operation// 


console.log(perform(calculator,x,y,z,7));
console.log(perform(converttocelsius,45));
console.log(perform(converttofahereinheit,45));
console.log(perform(calculateareaoftriangle,4,8));


let finalanswer = calculator("*",1,2,3,4,5,);
console.log(finalanswer);

const arr = ["*","/","+","-"];
const check = (operand,num1,num2)=>{
    if(arr.includes(operand) == false){
      return false;
    }
    if(Number.isInteger(num1) == false || Number.isInteger(num2)==false){
      return false;
    }

    else if(operand == '/' && num2 == 0){
      return false;
    }

    else{
      return true;
    }
}
const cal={
  '+': (num1,num2)=>num1+num2,
  '-':(num1,num2)=> num1 -num2,
  '*':(num1,num2)=>num1*num2,
  '/':(num1, num2)=>num1/num2
}

 const calculatorr = (operand,num1,num2) =>{
   if(check(operand,num1,num2) == false){
          console.log("Can't Do Operation");
   }

   else{
       let ans = cal[operand](num1,num2);
       console.log(ans);
       return ans;
   }
 }

//  calculatorr('+',3,4);
//  calculatorr('*',20,2);
//  calculatorr('/',0,0);
//  calculatorr('+','8',9);
//  calculatorr('$',8,9);