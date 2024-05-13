function numberofways(arr, index, sum, target,memo) {
   if (sum === target) { // If our sum is equal to the Target then return 1 as there is a Way we can achieve Target
       return 1;
   }


   if (index >= arr.length) {  // if the index is more than the array Length the return 0 we will never get the answer
       return 0;
   }


   if(memo[index][sum+target]!=undefined){
    return memo[index][sum+target]
   }

   return memo[index][sum+target] = numberofways(arr, index + 1, sum + arr[index], target,memo) + numberofways(arr, index + 1, sum - arr[index], target,memo) + numberofways(arr, index + 1, sum, target,memo);
}

let arr = [-1, 9, 8, -3, 4];
let sum = 0;
let target = 5;
let memo = Array.from({ length: arr.length + 1 }, () => Array(target * 2 + 1)); // Initialize memoization array with -1
let ans = numberofways(arr, 0, sum, target,memo);
console.log(ans);

// We can convert it into the Memoization just to optimise it//
// O(n * sum) Time Complexity of this code 