//* Interview Question: Count Occurrences of Character

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// 1st Method
// const countChar = (word, char) => {
//   word = word.toLowerCase();
//   char = char.toLowerCase();
//   totalCount = word.split("").reduce((accum, curChar) => {
//     if (curChar === char) {
//       accum++;
//     }
//     return accum;
//   }, 0);
//   return totalCount;
// };

// --------------------------------------------------------

//   2nd Method--
// function countChar(word, char) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word.charAt(i) === char) {
//       count++;
//     }
//   }
//   return count;
// }

// 3rd Method
function countChar(word, char) {
    const characters = word.split("");
    const matchingCharacters = characters.filter((c) => c === char);
    return matchingCharacters.length;
  }
  console.log(countChar("MissIssippi", "p")); //Output:2
  
  //Todo Constraints:
  //? The function should be case-sensitive.
  //? The function should handle both lowercase to uppercase characters.
  //? The character parameter can be any printable ASCII character (the function shoud accept any character that is part of the ASCII character set ans is printable).
  