// const arr = [4,5,6,7];
// arr.pop();

// console.log(arr);
// console.log(arr.length);

// function f(value,index,array){
//     console.log(value);
// }

// arr.forEach(f);
// let x = arr.join();
// console.log(x);

// const arr2 = [1,2,3,4];
// arr.concat(arr2);
// console.log(arr2);

// arr.push(89);

// const temp = [1,2,3,4,5,6,7,8]

// function check(value,index,array){
//      return value>3
// }

// const required = temp.some(check);
// console.log(required);


// //----------------------------------------------------------------------------
// //Map Method
// const aarr = [1,2,3,4,5,6];
// const newarrr = aarr.map(item=>item*2);
// console.log(newarrr);

// //----------------------------------------------------------------------------

// //Filter Method

// const a = [2,3,4,5,6,7];
// const even = a.filter(item=>item%2==0);
// console.log(even);
// const odd = a.filter(item=>item%2!=0);
// console.log(odd);

// //----------------------------------------------------------------------------

// //Map Method//

// const sum = [1,2,3,4,5];
// const anss = sum.reduce((x,y)=>x+y);
// console.log(anss);
//-----------------------------------------------------------------------------


// Array Properties------------------------------------------------
// at method -: 

// const fruits = ['banana','lemon','kiwi'];
// console.log(fruits.at(2)); // 0,1,2 -: 0 based Indexing//


// //Concat Method --: Join Two Arrays.//

// const fruit1 = ["kiwi","Lemon","Apple"];
// const fruit2 = ["Dragonfruit","Mango"];
// const children = fruit1.concat(fruit2);
// console.log(children);

// //every -: Executes a Function for each array element, return true or false//

// const ages = [20,2,3,4,4,5];

// function checkage(age){
//   return age>18
// }
// const answer = ages.every(checkage);
// console.log(answer);

// //fill -: Fill the array with the static element//
// const cars = ["Maruti","Lamborghini","Thar"];
// cars.fill("Harley");
// console.log(cars);

// //Filter -: Filter the array with a specified condition.

// function checkage(age){
//    return age>19;
// }

// const age = [23,45,67,9,0];
// const remaining = age.filter(checkage);
// console.log(remaining);


//Find and FindlastIndex -: Return the value for the first element that passes a test.

// function checkage(age){
//   return age>199;
// }

// const index = [23,90,12,34];
// // const answerrr = index.find(checkage)
// // console.log(answerrr);

// const temp = index.findLastIndex(checkage)
// console.log(temp);
// //


//For Each -: 

// function find(item,index,arr){
//    arr[index] = item*2;
// }

// const squareofno = [9,3,4,5,];

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)
// squareofno.forEach(find)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers);
// console.log(squareofno);


// From method -: Returns an arrya from method object//

// Includes -: find if the element is present//

// const text = ["Hi"s,"Hello","How are you","Texting"]
// console.log(text.includes("Hi")); 
//

// isArray() -: Return if an object is an array
// const company = ["Microsoft","Apple","Cognizant"];
// console.log(Array.isArray(company));


//Join -: Return an array as string//

const animals = ["monkey","tiger","Lion"];
let result = animals.join("and");
console.log(result);

const no = [1,3,4,4,2];
const arr = no.map(item=>item*2);
console.log(arr);