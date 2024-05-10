// Conditional Statements -: if else if//
//if statement -:

let x = 10;
let y = 20;

if(x>=y){
    console.log("Yes X is bigger");
}
else{
    console.log("X is the smaller one");
}


//If else If statement//

if(x==y){
    console.log("Both are equal");
}
else if(x>y){
    console.log("x is greatest");
}

else{
    console.log("y is greatest");
}


//Logical Operator and their use in conditional Statement

if(x==1 && y==1){
    console.log("")
}

else{
    console.log("");
}
//------------------------------------------------------------------------------------------
//The JS loop provide concise way of Writing the loop structure
for(let i=0;i<=10;i++){
    console.log(i);
}

// There are different loop also such as do do while , while and for each loop//
//for in loop -: used to iterate over the properties of an object

//for-in loop-:
//loop used to iterate over the properties of an object
 
let myobj = {x:1,y:2};
for(let key in myobj){
    console.log(key,myobj[key]);
}

//for off loop
//used to iterate over the iterable object//