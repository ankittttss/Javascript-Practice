function f(arr, index, sum, target) {
    if (sum === target) {
        return 1;
    }
    
    if (index >= arr.length) {
        return 0;
    }

    if (index === arr.length - 1) {
        if (sum + arr[index] === target || sum - arr[index] === target) {
            return 1;
        }
        return 0;
    }

    return f(arr, index + 1, sum + arr[index], target) + f(arr, index + 1, sum - arr[index], target) + f(arr, index + 1, sum, target);
}

const arr = [-1, 9, 8, -3, 4];
let sum = 0;
let ans = f(arr, 0, sum, 5);
console.log(ans);
