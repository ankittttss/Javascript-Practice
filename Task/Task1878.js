

function Convert(source){
   const answer = {};

   for(let x in source){
       // we Need to find the batch id if it's present then it's fine else no

       if(!(x.batch_id in source)){
        answer[x.batch_id] = [] // we will create an array of batch id.
        }

        const allkeys = Object.keys(source); // We will find all of the keys and we will iterate
        //The Object.keys() static method returns an array of a 
        //given object's own enumerable string-keyed property names.

        // Now as in our array we will store array of object with every batch id so we will create an another temp object
        let temporary = {};

        for(let x = 1;x<allkeys.length;x++){
             let key = allkeys[x];
             let value = source[key];
             temporary[key] = value;
        }

        answer[x.batch_id].push(temporary)
   }
   return answer;
}


const source = [
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ]

  console.log(JSON.stringify(Convert(source)));
  