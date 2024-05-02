//* Remove Diplicates from an Array

//? Write a function removeDuplicates that takes an array of elements as input and returns a new array with dulicate elements removed.

//? Your task is to implement the removeDuplicates function using Javascript and ensure that the returned array contains only unique elements from the input array. The order of elements in the output array should be the same as the original array, with the first occurrence of each unique element preserved.

//* Constraints:
//? The input array may contain elements of any data type.
//? The function should return a new array with duplicate elements removed, while preserving the order  of elements from the original array.
//? You should use the provided removeDuplicates function signature without any additional parameters.

// 1st way
// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };

// 1 Line code
// const removeDuplicates = (arr) => [...new Set(arr)];

// 2nd Way
const removeDuplicates = (arr) => {
    return arr.filter((elm, ind) => {
      return arr.indexOf(elm) === ind;
    });
  };
  
  // 3rd way  complex
  // const removeDuplicates = (arr) => {
  //   let uniqueElement = {};
  
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!uniqueElement.hasOwnProperty(arr[i])) {
  //       uniqueElement[arr[i]] = true;
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // };
  
  console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); //Output: [ 1, 2, 3, 4, 5 ]
  console.log(removeDuplicates(["a", "b", "c", "b", "a"])); //Output: [ 'a', 'b', 'c' ]
  