// Problem 9

// Solution:-

function root(a, b, c) {
    let root1, root2;
    let discriminant = b**2 - 4 * a * c

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = ((-b + Math.sqrt(discriminant)) / 2 * a).toFixed(2);
        root2 = ((-b - Math.sqrt(discriminant)) / 2 * a).toFixed(2);

        //result
       return ` ${root1}  ${root2}`;
    }
    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = (-b / 2 * a).toFixed(2);

        //result
        return ` ${root1}  ${root2}`;
    }
    // if roots are not real
    else {
        root1 = (-b / (2 * a)).toFixed(2);
        root2 = (Math.sqrt(-discriminant) / 2 * a).toFixed(2);
        //result
        return ` ${root1}  ${root2}`;
    }
}

// Driver program to test above functions
let ans = root(1,5,6);
console.log(ans);