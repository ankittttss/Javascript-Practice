function deepClone(obj) {
    // Check if obj is null or not an object
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    // Create a new object to hold the cloned properties
    let clone = Array.isArray(obj) ? [] : {};
    
    // Iterate over each property of the object
    for ( let key of Object.keys(obj)) {
      // Recursively clone nested objects
      clone[key] = deepClone(obj[key]);
    }
    
    return clone;
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
const clonedObj = deepClone(ankit);
clonedObj.ankit = 'sai';
console.log(ankit);
console.log(clonedObj)
  