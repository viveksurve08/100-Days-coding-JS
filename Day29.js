// Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:
// ? a: An integer representing the string number of the range.
// ? b: an integer representing the ending number of the range.

// ? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to b (inclusive).

//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b

const numberRange = (a, b, arr = []) => {
    // 1st way
    // while (a <= b) {
    //   // console.log(a);
    //   arr.push(a);
    //   a++;
    // }
    // return arr;
  
    // 2nd Way
    if (a > b) {
      throw new Error(
        "Starting number must be less than or equal to ending number."
      );
    }
    return Array.from({ length: b - a + 1 }, (_, index) => a + index);
  };
  
  // Example Usage:
  console.log(numberRange(0, 5)); //Output: [0, 1, 2, 3, 4, 5]
  console.log(numberRange(3, 7)); //Output: [3, 4, 5, 6, 7]
  console.log(numberRange(-2, 2)); //Output: [-2, -1, 0, 1, 2]
  