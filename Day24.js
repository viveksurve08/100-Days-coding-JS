// ? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequenty).

// 1st way
// const findMode = (arr) => {
//   //Your code here
//   let count = {};
//   let maxNum = 0;
//   let mode;
//   for (let element of arr) {
//     count[element] = (count[element] || 0) + 1;
//     if (count[element] > maxNum) {
//       maxNum = count[element];
//       mode = element;
//     }
//   }
//   //   console.log(count);
//   return mode;
// };

// 2nd way
// const findMode = (arr) => {
//   let frequencyMap = new Map();
//   arr.forEach((num) => {
//     frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//   });
//   let maxNum = 0;
//   let mode;
//   frequencyMap.forEach((frequency, num) => {
//     if (frequency > maxNum) {
//       maxNum = frequency;
//       mode = num;
//     }
//   });
//   return mode;
// };

// 3rd way
const findMode = (arr) => {
    arr.sort((a, b) => a - b);
  
    let maxNum = 0;
    let currCount = 1;
    let mode = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        currCount++;
      } else {
        if (currCount > maxNum) {
          maxNum = currCount;
          mode = arr[i - 1];
        }
        currCount = 1;
      }
    }
    if (currCount > maxNum) {
      maxNum = currCount;
      mode = arr[arr.legnth - 1];
    }
    return mode;
  };
  
  // Example usage:
  
  console.log(findMode([1, 2, 2, 3, 1, 4, 2])); //Output: 2
  console.log(findMode([1, 2, 3, 4, 5, 5, 6, 6, 6, 7])); //Output: 6
  
  //* Constraints:
  //? The input array will always contain at least on element.
  //? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).
  