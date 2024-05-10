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
