// 18: Write a function to convert a string to camelCase & snake_case.

// const toCamelCase = (str) => {
//   str = str.trim().split(" ");

//   str = str.map((curElem, index) => {
//     if (index === 0) {
//       return curElem.toLowerCase();
//     } else {
//       return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
//     }
//   });
//   console.log(str);
//   return str.join("");
// };

// // Example usage:
// console.log(toCamelCase("hello world deVeloper")); //Output: helloWorldDeveloper

// 2nd Example:

const toSnakeCase = (str) => {
    return str.replace(/\s+/g, "_").toLowerCase();
};

// console.log(toSnakeCase("helloWorldDeveloper"));

console.log(toSnakeCase("hello World Developer")); // Output: hello_world_developer