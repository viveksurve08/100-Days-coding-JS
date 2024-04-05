//* Programming Qyuestion: Longest Word in a String

// ? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraintes:
//? The input string may contain alphabetic charecters, digits, spaces, and puretuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
      return false;
    }
    words = str.split(" ");
  
    //1st scenario
    //   words = words.sort((a, b) => a.length - b.length);
    //   console.log(words);
    //   return words.at(-1);
  
    //2nd scenario
    //   words = words.sort((a, b) => b.length - a.length);
    //   console.log(words);
    //   return words[0];
  
    //3rd scenario
  
    return words.reduce(
      (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
      ""
    );
  };
  
  console.log(findLongestWord("Programming is fun and challenging"));
  