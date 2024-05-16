// const output = {
//     redirectTo: 'M1'
//    },
//    {
//      name: 'M1',
//      comp: 'C1',
//    },
//    .............
//    .............
//    {
//      name: 'M4',
//      subComp: [
//        {
//          redirectTo: 'M4B',
//        },
//        {
//          name: 'M4A',
//          comp: 'UN',
//        },
//        {
//          name: 'M4B',
//          comp: 'C4B',
//        },
//      ],
//    },
//    ..............
//    .............
//   ]

function SubscriptionHandlez(routes,subscription){
      let answer = [];
      for(let x in routes){
          if(subscription[x].isSub === true && subscription[x].hasOwnProperty('subMod') === true){
               let newobject = {
                name : subscription[x].name,
                subComp : []
               };

               const arr = subscription[x].subMod;
               const arr2 = routes[x].subComp;
               for(let i = 0;i<arr.length;i++){
                   if(arr[i].isSub === true){
                          let y = {
                            name:arr[i].name,
                            comp:arr2[i].comp
                          };
                          newobject.subComp.push(y);
                   }
                   else{

                   }
               }
               answer.push(newobject);
          }
          else if(subscription[x].isSub === true && subscription[x].hasOwnProperty('subMod') === false){
                      let temp = {name:subscription[x].name,comp:routes[x].comp}
                      answer.push({rediRectTo:subscription[x].name})
                      answer.push(temp);

           }

           else if(subscription[x].isSub === false && Array.isArray(routes[x]) === false && subscription[x].hasOwnProperty('subMod') === false){
            answer.push({name:subscription[x].name,comp:'UN'})
           }

           else if(subscription[x].isSub === false && subscription[x].hasOwnProperty('subMod') === true){
            answer.push({name:subscription[x].name,comp:'UN'})
           }
      }
      return answer;
}

const routes = [
    {
      name: 'M1',
      comp: 'C1',
    },
    {
      name: 'M2',
      comp: 'C2',
    },
    {
      name: 'M3',
      subComp: [
        {
          name: 'M3A',
          comp: 'C3A',
        },
        {
          name: 'M3B',
          comp: 'C3B',
        },
      ],
    },
    {
      name: 'M4',
      subComp: [
        {
          name: 'M4A',
          comp: 'C4A',
        },
        {
          name: 'M4B',
          comp: 'C4B',
        },
      ],
    },
    {
      name: 'M5',
      subComp: [
        {
          name: 'M5A',
          comp: 'C5A',
        },
        {
          name: 'M5B',
          subComp: [
            {
              name: 'M5BA',
              comp: 'C5BA',
            },
            {
              name: 'M5BB',
              comp: 'C5BB',
            },
            {
              name: 'M5BC',
              comp: 'C5BC',
            },
          ],
        },
        {
          name: 'M5C',
          comp: 'C5C',
        },
      ],
    },
  ];


  const subscription = [
    {
      name: 'M1',
      isSub: true,
    },
    {
      name: 'M2',
      isSub: false,
    },
    {
      name: 'M3',
      isSub: false,
      subMod: [
        {
          name: 'M3A',
          isSub: true,
        },
        {
          name: 'M3B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M4',
      isSub: true,
      subMod: [
        {
          name: 'M4A',
          isSub: false,
        },
        {
          name: 'M4B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M5',
      isSub: true,
      subMod: [
        {
          name: 'M5A',
          isSub: false,
        },
        {
          name: 'M5B',
          isSub: true,
  
          subComp: [
            {
              name: 'M5BA',
              isSub: false,
            },
            {
              name: 'M5BB',
              isSub: true,
            },
            {
              name: 'M5BC',
              isSub: false,
            },
          ],
        },
        {
          name: 'M5C',
          isSub: true,
        },
      ],
    },
  ];

  let count = 0;
  const Answer = SubscriptionHandlez(routes,subscription,count);
//   console.log(JSON.stringify(Answer));

// function updateComponent(routes, subscription) {
//     const updatedRoutes = [];
  
//     // Helper function to check if module is subscribed
//     function isSubscribed(name) {
//       const subModule = subscription.find(sub => sub.name === name);
//       return subModule ? subModule.isSub : false;
//     }
  
//     // Recursive function to update components
//     function updateComponents(module) {
//       const updatedModule = { ...module };
  
//       // Check subscription status
//       const subscribed = isSubscribed(module.name);
  
//       // Update component values based on subscription status
//       if (!subscribed) {
//         updatedModule.comp = 'UN';
//         if (updatedModule.subComp) {
//           updatedModule.subComp.forEach(subModule => {
//             subModule.comp = 'UN';
//           });
//         }
//       }
  
//       // Handle redirection
//       if (subscribed && !updatedRoutes.find(route => route.redirectTo)) {
//         updatedRoutes.push({ redirectTo: module.name });
//       }
  
//       // Recursively update sub-modules
//       if (updatedModule.subComp) {
//         updatedModule.subComp.forEach(subModule => {
//           updateComponents(subModule);
//         });
//       }
  
//       return updatedModule;
//     }
  
//     // Update components for each module
//     routes.forEach(module => {
//       updatedRoutes.push(updateComponents(module));
//     });
  
//     return updatedRoutes;
//   }
  
//   const updatedRoutes = updateComponent(routes, subscription);
//   console.log(JSON.stringify(updatedRoutes));
  



// //   console.log(Array.isArray(subscription[3].subMod));