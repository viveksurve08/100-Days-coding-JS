//11: Write a function takes a number as input and returns the sum of its digits.

// 1st Approach
// const sumOfDigits = (num) => {
//   //   console.log(typeof num);
//   let arr = Array.from(String(num), Number);
//   console.log(arr);
//   return arr.reduce((accum, curElem) => (accum += curElem), 0);
// };

//2nd Approach - using for loop

const sumOfDigits = (num) => {
    let arr = num.toString();
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    return sum;
  };
  
  //Example usage:
  console.log(sumOfDigits(1234)); //Output: 10
  console.log(sumOfDigits(4321)); //Output: 10
  console.log(sumOfDigits(123456)); //Output: 21
  
  //Contraints:
  //The input number will always be a positive integer.
  //The input number can have multiple digits.
  //The output should be the sum of all the digits in the input number.
  