function ApplyTheoperation(a, b, operation) {  // A Separate function to implement the different operations
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}



function checktheprecedence(operation) { // Checking the precedence because + and - have same and * and / have same//
    if (operation === '+' || operation === '-') {
        return 1;
    }

    if (operation === '*' || operation === '/') {
        return 2;
    }
}





function main(expression) {
    const values = []; // Alternative of stack 
    const operations = []

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === ' ') { // Empty spaces and it's of no Use
            continue;
        }

        else if (expression[i] === '(') {   // Opening Bracket push it into the operations 
            operations.push(expression[i]);
        }

        else if (!isNaN(expression[i])) {   // If we encounter an digit and if its a multi digit then convert it to a no//
            let value = 0;
            while (i < expression.length && !isNaN(expression[i])) {
                value = (value * 10) + parseInt(expression[i]); // Parseint - converting it to integer//
                i++;
            }
            values.push(value); // We will push it into over values stack//
            i--;
        }

        else if (expression[i] === ')') { // Now we have encountered the closing Bracket 
            //means we will evaluate the expression between a closing bracket and an opening Bracket//
            while (operations.length !== 0 && operations[operations.length - 1] !== '(') {
              const value2 = values.pop();
              const value1 = values.pop();    // For every two operands we will have single operator//  
              const operator = operations.pop();
              values.push(ApplyTheoperation(value1,value2,operator));
            }
            if(operations.length!=0){  // Remove the opening brace//
                operations.pop();
            }
        }
        else{
            while(operations.length!==0 && checktheprecedence(operations[operations.length-1])>=checktheprecedence(expression[i])){
                const value2 = values.pop(); // Now if we both of the operations arent matched 
                //we will check the precedence and we will evaluate// 
                const value1 = values.pop();
                const operation = operations.pop();
                values.push(ApplyTheoperation(value1,value2,operation));
            }
            operations.push(expression[i]);
        }
    }

    while(operations.length!=0){  // Now the bracket has ben removed and we will evaluate simple expression
        const value2 = values.pop();
        const value1 = values.pop();
        const operation = operations.pop();
        values.push(ApplyTheoperation(value1,value2,operation));
    }

    return values.pop();
}

console.log(main("1+(4*5)+(2+3)*4-10/2"));
