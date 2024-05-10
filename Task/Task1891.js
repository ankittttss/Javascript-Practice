// Task 1891//
const calc = {
  '+':(...args)=> args.reduce((acc,val)=>acc+val,0),
  '-':(...args)=> args.reduce((acc,val)=>acc-val),
  '/':(...args)=>{
      if(args.length == 0){
        console.log("Can't Do");
      }
      else{
        return args.reduce((acc,val)=>acc/val);
      }
  },
  '*':(...args)=>args.reduce((acc,val)=>acc*val)
}

// Example usage:
console.log(calc['+'](9, 4, 12, 16, 23, 43)); // Output: 107
console.log(calc['-'](100, 10, 5)); // Output: 85


