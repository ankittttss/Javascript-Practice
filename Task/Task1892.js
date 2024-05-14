function precedence(op) {   // To calculate the precedence
    if (op === '+' || op === '-')
        return 1;
    if (op === '*' || op === '/')
        return 2;

    return 0;
}

function applyOp(a, b, op) {  // This switch case will help us to do the following operations
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
    return 0;
}

function evaluate(expr) {
    const values = [];
    const ops = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === ' ')
            continue;
        else if (expr[i] === '(') {
            ops.push(expr[i]);
        } else if (!isNaN(expr[i])) {
            let val = 0;
            while (i < expr.length && !isNaN(expr[i])) {
                val = (val * 10) + parseInt(expr[i]);
                i++;
            }
            values.push(val);
            i--;
        } else if (expr[i] === ')') {
            while (ops.length !== 0 && ops[ops.length - 1] !== '(') {
                const val2 = values.pop();
                const val1 = values.pop();
                const op = ops.pop();
                values.push(applyOp(val1, val2, op));
            }
            if (ops.length !== 0)
                ops.pop();
        } else {
            while (ops.length !== 0 && precedence(ops[ops.length - 1]) >= precedence(expr[i])) {
                const val2 = values.pop();
                const val1 = values.pop();
                const op = ops.pop();
                values.push(applyOp(val1, val2, op));
            }
            ops.push(expr[i]);
        }
    }

    while (ops.length !== 0) {
        const val2 = values.pop();
        const val1 = values.pop();
        const op = ops.pop();
        values.push(applyOp(val1, val2, op));
    }

    return values.pop();
}

console.log(evaluate("100 * ( 2 + 12 ) / 14"));
