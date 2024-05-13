
const obj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
  }

  let Url="https://localhost:400"; // Given Url

  let condition = true;  // Applied condition just to tackle '&' //

  for(const x in obj){
     let value = obj[x];

     if(condition == true){
     Url = Url + '?' + x + '=' + value;
     condition = false;
     }

     else{
        Url = Url + '&';
        Url = Url + x;
        Url = Url + '=';
        Url = Url + value;
     }
  }
//   https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three  // final Url -: Answer//

console.log(Url);