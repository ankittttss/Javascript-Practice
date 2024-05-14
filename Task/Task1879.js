function f(obj, string = '') {
    let tempobject = {};
    for (let x in obj) {
        if (obj.hasOwnProperty(x)) {
            let newkey = string?`${string}.${x}`:x;
            
            if (typeof obj[x] === 'object' && obj[x] != null) {
                Object.assign(tempobject, f(obj[x], newkey))
            }
            else {
                tempobject[newkey] = obj[x];
            }
        }
    }
    return tempobject;
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