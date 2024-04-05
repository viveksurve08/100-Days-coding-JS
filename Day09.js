//Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

//You function shoulf:
//Accept an array of numbers as input.
//Calculate the sum of all the numbers in the array.
//Divide the sum by the total number of elements in the array to find the average.
//Return the calculated average.

// 1st Approach
// const calculateAverage = (arr) => {
//   let total = arr.reduce((accum, curElem) => accum + curElem, 0);
//   //   console.log(total);
//   return total / arr.length;
// };

// 2nd Approach
const calculateAverage = (arr) => {
    let total = 0;
  
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;
  };
  
  //Example usage:
  
  console.log(calculateAverage([10, 20, 30, 40, 50, 60])); //Output: 6.25
  
  // rough Practice
  // function func2() {
  //   for (var i = 0; i < 3; i++) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, 2000);
  //   }
  // }
  // func2();
  