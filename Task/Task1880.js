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

  
const cal={
    '+': (num1,num2)=>num1+num2,
    '-':(num1,num2)=> num1 -num2,
    '*':(num1,num2)=>num1*num2,
    '/':(num1, num2)=>num1/num2
  }

 
  calculatorr('+',3,4);
  calculatorr('*',20,2);
  calculatorr('/',0,0);
  calculatorr('+','8',9);
  calculatorr('$',8,9);

  