
const arr = [1,2,3,4];
const brr = [...arr];

console.log(brr);


const obj1 = {
    name:"Microsoft",
    owner:"Bill Gates"
}

const obj2 = {
    age:20
}

Object.assign(obj1,obj2);
console.log(JSON.stringify(obj1))
console.log(Object.keys(obj1));





