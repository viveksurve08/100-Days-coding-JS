//* Write a function called repeatString that takes two parameters:

//? str: A string thaat needs to be repeated.
//? num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.

// 1st way using built-in method
// const repeatString = (str, num) => {
//   return num > 0 ? str.repeat(num) : str;
// };

// 2nd way
const repeatString = (str, num) => {
  if (typeof str !== "string" || typeof num !== "number" || num < 0) {
    return "Invalid input";
  }
  if (num === 0) {
    return str;
  }
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

// Example usage:
console.log(repeatString("abc", 5)); //Output: "abcabcabcabcabc"
console.log(repeatString("vs", 2)); //Output: "vsvsvs"
console.log(repeatString("vs", 0)); //Output: "vs"

//* Constraints:
//? The input string str will contain only alphanumeric character ans punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.
