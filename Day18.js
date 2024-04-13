// 18: Write a function to check if a character is uppercase or lowercase.

// Constraints:

//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

// 1st Way s
// const isUpperCase = (char) => {
//   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     return true;
//   }
//   return false;
// };

// 2nd Way

const isUpperCase = (char) => {
    return char == char.toUpperCase();
  };
  
  // Example usage:
  console.log(isUpperCase("S")); //Output: true
  console.log(isUpperCase("b")); //Output: false
  
  // Note
  //? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
  //? Optimize the function to handle edge cases efficiently.
  