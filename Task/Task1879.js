function f(object, string = '') {  // We will take a default string as parameter
    let TempObject = {}; // Initialise our answer object
    for (let x in object) {
        if (object.hasOwnProperty(x)) {
            let NewKey = string?`${string}.${x}`:x;
            
            if (typeof object[x] === 'object' && object[x] != null) {
                Object.assign(TempObject, f(object[x], NewKey))
            }
            else {
                TempObject[NewKey] = object[x];
            }
        }
    }
    return TempObject;
}

const sh = {
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

  console.log(f(sh));
//   console.log()