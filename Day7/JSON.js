// JSON -: Stands for Javacsript Object Notation//
//Text Based data format following object syntax. 
//Json exist as a string - usefull when you transmit data across a network//
//Structure -: JSON is a string whose format very much resembles Javacsript Object Literal Format.
//You can include data type such as string,arrays boolean//

//Extrension for JSON file is -: .JSON

// Data Respresentation Format//
//Commonly used for API and Con

//Format for storing and Transporting Data//
//Lightweight Data Interchange Format//
//Language Independent//


//In JSON the values must be of the following Types -:
//a)String
//b)Number
//c)An Object
//d)An array
//e)A boolean
//f)Null


//Json.stringify() and JSON.Parse()//

//Function used to Convert a Javascript Object into a JSON string. JSON stands for Javacsript Object Notation//
//and it's Lightweight data interchange format that is easy for humans to read and write and easy for humans to parse
// and Generate//

// Nested Object and Traversal

// function traveseNested(obj){
    
//     for(let x in obj){
//         // console.log(x)
//         if(typeof obj[x] !='object'){
//            if(x === 'name'){
//              obj[x] = 'saini'
//            }
//         }
//         else{
//          traveseNested(obj[x]);
//         }
//     }
//     return obj;
// }

// let obj = {
//    name:"Raj",
//    roll:9682,
//    id:{
//      name:"raj"
//    },

//    class:{
//       name:"raj",
//       67:{
//         name:"raj"
//       },
//    },
// }

// const ans = traveseNested(obj);
// console.log(ans);


//How to Search any value in a deeply nested object 

// Search magicNumber
// let answer = "";
// function searchValue(nestedObject){
//     for(let x in nestedObject){
//         if(typeof nestedObject[x]!='object' && nestedObject[x]!=null && x === "magicNUmber"){
//             answer = nestedObject[x];
//             return nestedObject[x];
//             // return answer;
//         }

//         else if(typeof nestedObject[x] === 'object' && nestedObject[x]!=null){
//             searchValue(nestedObject[x]);
//         }
//     }
// }

// let nestedObject = {
//     data:{
//         info :{
//             stuff :{
//                 thing :{
//                     moreStuff:{
//                         magicNUmber:44,
//                         something:"foo2",
//                         random:[4,5]
//                     }
//                 },
//                 stuffValue:46
//             }
//         }
//     }
// }

// let y = (searchValue(nestedObject));
// console.log(y);


// function printNestedObject(nestedObject){
//    for(let x in nestedObject){
//      if(typeof nestedObject[x]=='object'){
//              printNestedObject(nestedObject[x]);
//      }

//      else if(Array.isArray(nestedObject[x])){
//          const arr = nestedObject[x];
//          for(let i = 0;i<arr.length;i++){
//              console.log(arr[i]);
//          }
//      }

//      else{
//         console.log(x);
//         console.log(nestedObject[x]);
//      }

    
//    }
// } 


function findByKey(nestedObject,key){
    for(let x in nestedObject){
        if(x === key){
            console.log(nestedObject[x]);
            return;
        }
        else{
            findByKey(nestedObject[x],key);
        }
    }
}

let count = 1;

function findTheLevel(nestedObject){
    for(let x in nestedObject){
        if(typeof nestedObject[x] === 'object' && nestedObject[x]!=null){
            count++;
            findTheLevel(nestedObject[x]);
        }
        else{
            continue;
        }
    }
}

const nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 42,
              something: "foo",
              random: [1, 6]
            }
          }
        }
      }
    }
  };

//   printNestedObject(nestedObject);
// console.log(findByKey(nestedObject,"stuff"));
// findTheLevel(nestedObject);
console.log(count);


// Find Value by Key:
// Given a nested object similar to the one above, 
// write a function that takes a key as input and returns the corresponding value if found in the nested object.


// Count Number of Nested Levels:
// Write a function that accepts a nested object as 
// input and returns the number of levels of nesting it contains.
  