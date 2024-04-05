// Challenge: Factorial Finder

//Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer less that or equal to n. The factorial of 0 is defined as 1.

//Here are some examples of factorial calculations:

// factorial(0)=>1
// factorial(1)=>1
// factorial(2)=>2
// factorial(3)=>6
// factorial(4)=24
// factorial(5)=120
//Your function should work for any non-negative integer input.

// 1st Method
// const factorial = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };

// 2nd Method
const factorial = (num) => {
    if (num === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  };
  
  //Example usage:
  console.log(factorial(5)); //Output:120
  console.log(factorial(0)); //Output:1
  console.log(factorial(3)); //Output:6
  