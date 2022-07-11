// Problem 8

// Solution:-

const getStringLength = (string) => string == "" ? "Error" : string.split(' ').join("").length;


// Driver program to test above functions
let ans = getStringLength('Lorem Ipsum');
console.log(ans);



/*Doubt: In the question the given statement " (Print "Error" if N = negative value and 0 if N = 0) ".
What is the role of "N" here because as per question "Let "A" be a string" i.e. we are entering a string "A"  here
. Is it mistekenly added or what ? */
