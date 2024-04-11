// 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

// 1st Way
// const findMin = (arr) => {
//   arr = arr.sort((a, b) => {
//     if (a < b) return -1;
//   });
//   return arr[0];
// };

// 2nd Way
// const findMin = (arr) => {
//   if (Array.length === 0) return "Array is empty";
//   return Math.min(...arr);
// };

// 3rd Way
const findMin = (arr) => {
    if (arr.length === 0) {
      return undefined;
    }
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  };
  
  // Example usage:
  console.log(findMin([5, 10, 2, 8])); //Output: 2
  console.log(findMin([5, -3, 0, 12, -7])); //Output: -7
  console.log(findMin([])); //Output: undefined (or any suitable message for empty array)
  
  //*Note:
  //? Ensure the function handles edge cases gracefully, such as an epty input array.
  
  //? Consider using ES6 features like the spread syntax (...) for a concise implementation.
  
  //todo In javascript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
  
  //? For example, if arr is [5,10,2,8], then ...arr expands to 5,10,2,8.
  