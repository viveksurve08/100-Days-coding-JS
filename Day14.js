//14: Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power ot two, and false otherwise.

// 1st Method
// const isPowerOfTwo = (num) => {
//   let op = false;
//   for (let i = 0; i < num; i++) {
//     if (2 ** i === num) {
//       op = true;
//     }
//   }
//   return op;
// };

// 2nd Method - Using Bitwise Operator
// const isPowerOfTwo = (num) => {
//   return num > 0 && (num & (num - 1)) === 0;
// };

// 3rd Method - Using Math Method
const isPowerOfTwo = (num) => {
    if (num <= 0) {
      return false;
    }
  
    const op = Math.log2(num);
    return Number.isInteger(op);
  };
  
  // Example Usage:
  console.log(isPowerOfTwo(8)); //Output: true
  console.log(isPowerOfTwo(7)); //Output: false
  console.log(isPowerOfTwo(16)); //Output: true
  console.log(isPowerOfTwo(0)); //Output: false
  
  //Note:
  
  // The input num will be a positive integer.
  // Zero (0) and negative integers are not considered powers of two.
  //The function should return true if the given number is a power of 2, and false otherwise.
  