// Problem 10

// Solution:-

// input:  1. array = an array of number,  
//         2.  n= size of array.

function sortEvenArray(array, n){
    let evenArr=[];
    let oddArr=[];
    let result =[];
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
evenArr.push(array[i]);
        }else{
            oddArr.push(array[i]);
        }
    }
    evenArr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i%2 ==0){
            result.push(evenArr.shift())
        }else(
            result.push(oddArr.shift()) 
        )

    }
    return result;
}


// Driver program to test above functions
let ans = sortEvenArray([3,9,1,44,6],5);
console.log(ans);