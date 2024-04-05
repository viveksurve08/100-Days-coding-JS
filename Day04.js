// Interview Question:

//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// 1st Method
// const checkTriangleType = (a, b, c) => {
//   if (a === b && b === c) return "equilateral";
//   if (a === b || b === c || a === c) return "isosceles";
//   return "scalene";
// };

// 2nd Method

function checkTriangleType(a, b, c) {
    let vs = new Set([a, b, c].sort());
    return vs.size === 1
      ? "equilateral"
      : vs.size === 2
      ? "isosceles"
      : vs.size === 3
      ? "scalene"
      : "Invalid triangle";
  }
  
  console.log(checkTriangleType(3, 3, 3)); //Output: "equilateral"
  console.log(checkTriangleType(3, 4, 3)); //Output: "isosceles"
  console.log(checkTriangleType(5, 8, 6)); //Output: "scalene"
  
  //todo The function should adhere to the following rules:
  
  //? If all three sides are of equal length, return "equilateral".
  //? If only two sides are of equal, return "isosceles".
  //? If all three sides sides have different lengths, return "scalene".
  