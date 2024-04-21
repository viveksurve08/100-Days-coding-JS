// * Write a function to calculate the factorial of a number. (using Recursion)

//* Recursion:
//? Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's function that calls itself with smaller or simpler input until it reaches a base case.

//* Base Case:
//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

//* Recursion Case:
//? The recursive case is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.

// Formula:
// 5 =>5*4*3*2*1
// num=> num * num -1 * num -2 * num-3 * num -4

const factorial = (num) => {
    // 1st way
    //   if (num === 1) {
    //     return 1;
    //   } else {
    //     return num * factorial(num - 1);
    //   }
  
    //   2nd way
    //Base case: if num is 0 or 1, return 1
    //   if (num === 0 || num === 1) {
    //     return 1;
    //   }
    //   //Recursion case: num * factorial(n-1)
    //   else {
    //     return num * factorial(num - 1);
    //   }
  
    //  3rd way
    return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
  };
  
  // Example usage:
  console.log(factorial(5)); //Output: 120
  console.log(factorial(6)); //Output: 720
  