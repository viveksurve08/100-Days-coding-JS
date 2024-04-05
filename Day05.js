// Programming Question: Sort an Array

//? Write a function to sort an array of numbers in an ascending order.

// 1st Method- using built-in method

// const sortAscending = (arr) => {
//   return arr.sort((a, b) => a - b);
// };

// 2nd Method- without using built-in method.

function sortAscending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const numbers = [5, 3, 1, 8];
  
  //Example usage:
  console.log(sortAscending(numbers)); // Output: [1,3,5,8]
  // console.log(sortAscending([5, 3, 10, 8])); // Output: [3,5,8,10]
  
  //Todo Requirements:
  //? The function should take an array of numbers as input.
  //? It should return a new array with the numbers sorted in ascending order.
  //? The original array should remain unchanged.
  //? You are not allowed to use the built-in sort() method.
  