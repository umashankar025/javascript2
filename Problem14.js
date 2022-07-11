// Problem 14

// Solution:-

function leftRotateArray(arr, k) {
    let temp = [];
    for (let i = 0; i < k; i++) {
       temp.push(arr.shift());
    }
    //concatinate the temp array with arr
    arr = arr.concat(temp);
    return arr;
 }
 
 
 // Driver program to test above functions
 arr = [1, 2, 3, 4, 5, 6, 7]
 let ans = leftRotateArray(arr, 3);
 console.log(ans);