
const obj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
  }

  let url="https://localhost:400";

   let condition = true;

  for(const x in obj){
     let value = obj[x];

     if(condition == true){
     url = url + '?' + x + '=' + value;
     condition = false;
     }

     else{
        url = url + '&';
        url = url + x;
        url = url + '=';
        url = url + value;
     }
  }
//   https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three

  console.log(url);

  function generateQuery(obj) {
   const queryString = Object.entries(obj) // Array of key value pair//
     .map(([key, value]) => `${key}=${value}`)
     .join("&");
   
   return `${queryString}`;
 }
 
 // Example usage:
 const baseUrl = "https://localhost:400";
 const queryStringUrl = generateQuery(obj, url);
 console.log(baseUrl + `?`+ queryStringUrl);
 