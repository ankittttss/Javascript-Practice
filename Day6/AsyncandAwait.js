
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
  resolve("Hi");
})

async function handle(){
    // JS Engine was waiting for Promise to resolve
    const val = await p;
    console.log(val);
}

handle();