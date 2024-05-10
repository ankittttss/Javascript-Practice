const square = (x) =>{
    return x*x;
}

const squareroot = (x)=>{
   return Math.sqrt(x);
}

const AreaoftheCircle = (x) =>{
    let radius = square(x);
    22/7*radius;
}

const power = (x,y)=>{
    return Math.pow(x,y);
}

const Sintheta = (x)=>{
    return Math.sin(x);
}

const Tantheta = (x)=>{
    return Math.tan(x);
}

const costheta = (x) =>{
    return Math.cos(x);
}

const logarithmic = (x)=>{
    return Math.log(x);
}

// console.log(squareroot(16));
// console.log(square(4));
// console.log(power(2,3));
// console.log(AreaoftheCircle(4));
// console.log(logarithmic(8));

function validate(typeofoperation,operation,...args){
     if(operation[typeofoperation].length!=args.length){
         console.log("Can't Perform Operation");
     }
     else{
        return operation[typeofoperation](...args);
     }
}


const operation = {
    'Cos' :  (x)=>Math.cos(x),
    'logarithmic':(x)=>Math.log(x),
    'square':(x)=>x*x,
    'sqrt':(x)=>Math.sqrt(x),
    'AreaofCircle':(radius)=>Math.PI.radius*radius,
    'Power':(base,expo)=>Math.pow(base,expo),
    'Sin':(x)=>Math.sin(x),
    'Tan':(x)=>Math.tan(x)
}

console.log(operation['Cos'](10));
console.log(operation['Power'](2,3));

console.log(validate("Cos",operation,10,10));