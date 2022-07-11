// Problem 1

// Solution:-

function factorial(n)
  {
      var res = 1, i;
      for (i = 2; i <= n; i++)
          res *= i;
      return res;
  }

   
      var num = 5;
      console.log("Factorial of " + num + " is " + factorial(5));
