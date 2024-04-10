// 15: Write a function to calculate the sum of squre of all elements in an array. For example, given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

// 1st method using reduce method
// const sumOfSqures = (arr) => {
//   return arr.reduce((accum, curElem) => (accum = accum + curElem * curElem), 0);
// };

// 2nd for loop
const sumOfSqures = (arr) => {
    let sum = 0;
    for (let elem of arr) {
      sum = sum + elem * elem;
    }
    return sum;
  };
  
  // Example usage:
  console.log(sumOfSqures([1, 2, 3, 4])); //Output: 14
  