//? 20: Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverseString = (str) => {
  let r_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    r_str = r_str + str[i];
  }
  return r_str;
};

// using built-in method
// const reverseString = (str) => {
//     return str.split("").reverse().join("");
//   };
  
  // Example Usage:
  console.log(reverseString("hello")); //Output: olleh
  