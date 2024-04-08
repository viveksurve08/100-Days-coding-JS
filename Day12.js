//12: Write a function that takes an array of integers as input removes any duplicate elements, returning a new array with only the unique elements.

// 1st Solution
// const removeDuplicates = (arr) => {
//   let newArr = [...new Set(arr)];
//   //   console.log(newArr);
//   return newArr;
// };

// 2nd Solution
// const removeDuplicates = (arr) => {
//   return Array.from(new Set(arr));
// };

// 3rd Solution- using for loop
// const removeDuplicates = (arr) => {
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// };

// 4th Solution- using filter method
// const removeDuplicates = (arr) => {
//   return arr.filter((val, ind) => arr.indexOf(val) === ind);
// };

// 5th Solution - using reduce method
// const removeDuplicates = (arr) => {
//   return arr.reduce((uniqueArray, currentValue) => {
//     if (!uniqueArray.includes(currentValue)) {
//       uniqueArray.push(currentValue);
//     }
//     return uniqueArray;
//   }, []);
// };

// 6th Solution - using temporary object
const removeDuplicates = (arr) => {
    let uniqueElements = {};
    let uniqueArray = [];
    for (let element of arr) {
      if (!uniqueElements[element]) {
        uniqueElements[element] = true;
        uniqueArray.push(element);
      }
    }
    return uniqueArray;
  };
  
  //Example usage:
  console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); //Ouput: [1,2,3,4]
  console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); //Ouput: [5,6,7,8,9]
  console.log(removeDuplicates([1, 2, 3, 4])); //Ouput: [1,2,3,4]
  console.log(removeDuplicates([])); //Ouput: []
  
  //The new Set() method in javascript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.
  
  //Constraints:
  //The input array may contain both positive and negative integers.
  //The input array may be empty.
  //The elements in the input array are not guaranteed to be sorted.
  //The output array should retain the original order of elements form the input array.
  