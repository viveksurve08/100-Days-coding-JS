//? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//todo In math, the mean is the average of a set of numbers, or the numeric value that represnts the center of a collection of numbers.

//? Constraints:
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.

// 1st way
// const calculateMean = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let sum = arr.reduce((accum, curElem) => accum + curElem, 0);
//   //   console.log(sum);
//   return sum / arr.length;
// };

// 2nd way
const calculateMean = (arr) => {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const Mean = sum / arr.length;
    return Mean;
  };
  
  // Example usage
  console.log(calculateMean([1, 2, 3, 4, 5])); //Output: 3
  console.log(calculateMean([10, 20, 30])); //Output: 20
  console.log(calculateMean([-1, 0, 1])); //Output: 0
  console.log(calculateMean([])); //Output: 0
  