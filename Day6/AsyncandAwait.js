
// const p = new Promise((resolve,rejected)=>{
//       resolve("Promise Reserved a value");
// })

// async function dosomething(){
//     return p;
// }

// const dataPromise = dosomething();
// dataPromise.then((res)=>console.log(res))

//----------------------------------------------------
// Let's try Async and Await//
// Async and Await Combo is used to Handle the Promises//

const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Hi");
  },10000)
})

// // async function handle(){
// //     const val = await p;
// //     //Await can only be used inside function body//
// //     //and you write it infront of the Promise//
// //     console.log(val);
// // }

// // handle();

// function getData(){
//     p.then((res)=>console.log(res));
//     console.log("Namaste Javascript")
// }

// getData()

async function handlePromise(){
     const val = await p;
     console.log("Namaste Javascript");
     console.log(val);
     
}

//o/p-: "Namaste Js ",val