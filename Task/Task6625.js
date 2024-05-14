function findminimum(expression){
     let lengthofexpressiom = expression.length;

     if(lengthofexpressiom%2==1){
           return -1;
     }

     const stack = [];
     
     for(let i=0;i<lengthofexpressiom;i++){
        if(expression[i] === '}' && stack.length!== 0){  // We will remove the balanced Part
            if(stack[stack.length-1] === "{"){
                stack.pop()
            }
            else{
                stack.push(expression[i]);
            }
        }

        else{
            stack.push(expression[i]);
        }
     }

     const redcuedlength = stack.length;
     let number = 0;


     while(stack.length!==0 && stack[stack.length-1] === '{'){
        stack.pop();
        number++;
     }

     return Math.floor(redcuedlength/2) + (number%2) ;
}

console.log(findminimum("{{{"));
console.log(findminimum("{{{{}}"))
