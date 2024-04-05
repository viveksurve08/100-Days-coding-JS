// Write a function to detemine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// 1st Method
// const isPalindrome = (str) => {
//   str = str.toLowerCase().replace(/\W/g, "");
//   let r_str = str.split("").reverse().join("");
//   console.log(r_str);
//   return str === r_str ? true : false;
// };

// 2nd Method
function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }
  
  console.log(isPalindrome("A man, a plan, a canal, Panama")); //Output: true
  console.log(isPalindrome("racecar")); //Output: true
  console.log(isPalindrome("hello")); //Output: false
  
  // Constraints:
  
  // The input string may contain letters, digits, spaces, punctuation, and special characters.
  // The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered same.
  // Ignore spaces, punctuation, and special characters when determining if a string is a palinfrome.
  // The function should return true if the input string is a palindrome and false otherwise.
  
  // Note:
  //.replace(/\W/g, ""): Uses the replace() method with a regular expression (/\W/g) to remove all non-word characters from the string.
  //Here: \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).
  // The g flag performs a global search, meaning it replaces all occurrences of non-word characters in the string.
  //So, replace(/\W/g, "") replaces all non-word characters with an empty string, effectively removing them from the string.
  