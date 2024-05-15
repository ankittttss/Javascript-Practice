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
let answer = "";
function searchValue(nestedObject){
    for(let x in nestedObject){
        if(typeof nestedObject[x]!='object' && nestedObject[x]!=null && x === "magicNUmber"){
            answer = nestedObject[x];
            return nestedObject[x];
        }

        else{
            searchValue(nestedObject[x]);
        }
    }
}

let nestedObject = {
    data:{
        info :{
            stuff :{
                thing :{
                    moreStuff:{
                        magicNUmber:44,
                        something:"foo2",
                        random:[4,5]
                    }
                },
                stuffValue:46
            }
        }
    }
}

let y = (searchValue(nestedObject));
console.log(answer,y);