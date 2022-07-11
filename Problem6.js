// Problem 6

// Solution:-

const getSum = (number) => number < 1 ? 'Enter a positive number' : number * (number + 1) / 2;

// Driver program to test above functions
let ans = getSum(10);
console.log(ans);