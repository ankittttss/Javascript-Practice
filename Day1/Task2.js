//Task 1891//
const calculator = (expression,...arguments) =>{
      let sum = 0;
      if(String(expression) == "+"){
          for(const arg of arguments){
               sum = sum + arg;
          }
          return sum;
      }

      else if(String(expression) == "-"){
        let subtract = 0;
        for(const arg of arguments){
            subtract = subtract - arg;
        }
        return subtract;
      }

      else if(String(expression) == "*"){
        let multiplication = 1;
        for(const arg of arguments){
            multiplication = multiplication*arg;
        }
        return multiplication;
      }
}

let finalanswer = calculator("*",1,2,3,4,5,);
console.log(finalanswer);