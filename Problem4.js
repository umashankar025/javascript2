// Problem 4

// Solution:-

function dayCount(number) {
    if (0 < number && number <= 12) {
        let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        let previousIndex = number - 1
        return days[previousIndex]
    } else {
        return "Error"
    }
}

// Driver program to test above functions
let ans = dayCount(8);
console.log(ans);
