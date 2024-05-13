// // Destructering works with arrays and objects//

// let person = {
//     firstname:"Ankit",
//     Seconname:"Saini"
// }


// const arr = [2,3,4,5];
// const newarr = [...arr];

// console.log(newarr);

// let {firstname,Seconname} = person // Destructering the objects//
// console.log(firstname);
// console.log(Seconname);

// let {firstname:fname,Seconname:lname} = person;
// console.log(firstname);
// console.log(Seconname);

// let {firstnamee,Seconnamee,middlename} = person;
// console.log(middlename);

// let newperson = {
//     first : "Ankit",
//     Second : "Saini",
//     cureentage:20
// }

// let {first,Second,cureentage:age=20,middlenamee = "notdefined"} = newperson
// console.log(middlenamee);

//----------------------------------------------------------------------------------
//Array Destrcutering//

// const arr = [1,2,3];
// let [x,...rest] = arr;

// console.log(x);
// console.log(rest) // Spread operator//

// // Skipping an item while Destructering//
// const arrvalue = ['one','two','three'];
// let [xx,,yy] = arrvalue;
// console.log(xx);
// console.log(yy); 


// Important Tip -: The variable with the spread Syntax Comma Cannot have a trailing Comma You shoudl use this
//Rest Element as the last variable  
// const arr = [2,3,4,5];
// const [...x,y] = arr; // Showing Error//

// let name1 = "Sonny";
// let name2 = "Jay";

// [name1,name2] = [name2,name1];  // Swapping the Variable

// console.log(name2);
// console.log(name1);

let member = {
    id:1,
    name:{
        firstname:"Ankit",
        secondname:"Saini"
    }
}

let {name:{firstname,secondname}} = member;
console.log(firstname);
console.log(secondname);

