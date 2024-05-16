function DeepClone(obj) {
    // Check if obj is null or not an object
    if (obj === null || typeof obj !== 'object') {
      console.log(obj)
      return obj;
    }
    
    // Create a new object to hold the cloned properties
    let Clone = Array.isArray(obj) ? [] : {};
    
    // Iterate over each property of the object
    for ( let key of Object.keys(obj)) {
      // Recursively clone nested objects
      Clone[key] = DeepClone(obj[key]);
    }
    
    return Clone;
  }
  
  // Example usage

  const ankit = {
    'ankit':'saini',
    'age':'20',
     item:{
        'ankit':'saini',
        'age':'20'
     },
     d:[2,3,{4:"ankit",5:"saini"}]
} 
const ClonedObj = DeepClone(ankit);
ClonedObj.ankit = 'sai';
// console.log(ankit);
// console.log(ClonedObj)
  
