
function transform(obj, string = '') {
  const finalobject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newkey; // We will make newkey//
      if (string) { // if the string is not empty means there is nesting in it
        newkey = `${string}.${key}`
        console.log(newkey)
      }
      else {
        newkey = key;
      }
      if (typeof (obj[key]) === 'object' && obj[key] != null) {
        Object.assign(finalobject, transform(obj[key], newkey)); // Copies all non - enumerable Properties//
      }
      else {
        finalobject[newkey] = obj[key]
      }
    }
  }
  return finalobject;
}


const obj = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
}

const ans = transform(obj, '');
console.log(ans);

//   "keyOne": "value One",
//   "keyTwo": "value Two",
//   "keyThree":"value Three",
//   "keyFour.keyA": true,
//   "keyFour.keyB": false,
//   "keyFour.keyC.keyCOne": "key C one value",
//   "keyFour.keyC.keyCTwo": "key C two value",
//   "keyFour.keyC.keyCThree": 1234