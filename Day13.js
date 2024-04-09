//13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).

// 1st method
// const countVowels = (str) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let arr = str.split("");
//   console.log(arr);
//   let count = 0;
//   for (let char of arr) {
//     if (vowels.includes(char.toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// };

// 2nd Method using match method
// const countVowels = (str) => {
//   let vowels = str.match(/[aeiou]/gi);
//   return vowels ? vowels.length : 0;
// };

//3rd Method- using filter method
// const countVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const char = str.toLowerCase().split("");
//   const vowelChar = char.filter((character) => vowels.includes(character));

//   return vowelChar.length;
// };

// 4th Method using reduce method
const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const char = str.toLowerCase().split("");
    const vowelCount = char.reduce((count, char) => {
      if (vowels.includes(char)) {
        return count + 1;
      }
      return count;
    }, 0);
    return vowelCount;
  };
  
  // Example usage:
  console.log(countVowels("Helloo world")); //Output:4
  console.log(countVowels("ThE quIck brOwn fOx")); //Output:5
  console.log(countVowels("Brrrp")); //Output:0
  
  //Constraints:
  
  //The input string may contain letters in both uppsecase and lowercase.
  //THe output should be a non-negative integer representing the count of vowels in the input string.
  