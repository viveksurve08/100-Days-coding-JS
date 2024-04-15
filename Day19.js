//  19: Write a function to check if a given string starts with a specific substring.

// Input :
//? str: A string (e.g, "Hello world").
//? subStr: A substring to check  if it starts the given string(e.g,"Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

// Using Built-in method
// const startWith = (str, substr) => {
//   return str.toLowerCase().startsWith(substr.toLowerCase());
// };

// without using built in method
const startWith = (str, substr) => {
    return str.toLowerCase().slice(0, substr.length) == substr.toLowerCase();
  };
  
  // Example Usage:
  console.log(startWith("Hello world", "hello")); //Output: true
  console.log(startWith("Hello world", "World")); //Output: false
  