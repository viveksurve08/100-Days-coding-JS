//* Programming Challenge: FizzBuzz Challenge

//? Write a function fizzbuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on the following rules:

//? For each number i in the range from startNum to endNum (both inclusive):
//? If i is dividible by the both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.

const fizzbuzz = (sNum, eNum) => {
    let arr = [];
    for (let i = sNum; i <= eNum; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("fizzbuzz");
      } else if (i % 3 === 0) {
        arr.push("fizz");
      } else if (i % 5 === 0) {
        arr.push("buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  };
  // Example 1
  console.log(fizzbuzz(1, 15));
  // Output: [  1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',  11, 'fizz', 13, 14,'fizzbuzz']
  
  // Example 2
  console.log(fizzbuzz(12, 20));
  // Output: [ 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz' ]
  