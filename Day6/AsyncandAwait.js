
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
  },5000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("Hi val2");
    },10000)
})

async function handle(){
    // Javascript Engine waiting for promise to resolve
    console.log("Hello World");
    const val = await p;
    console.log("Val");
    console.log("Hello World");
    console.log(val);

    console.log("Hello World");
    const val2 = await p2;
    console.log("Val2");
    console.log("Hello World");
    console.log(val2);
}

handle();


async function fetchTheData(){
    try{
     const data = fetch();
     const datavalue = await data.json();
    }catch(err){
      console.log(err);
    }
}
//o/p-: "Namaste Js ",val