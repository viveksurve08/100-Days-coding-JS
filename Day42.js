//* Programming Challenge: Validate a Credit Card Number (Luhn Algorithm)

//? Write a function to validate credit card numbers using the Lihn Algorithm.

//* Requirements:
//? Write a function validateCreditCard that takes a credit card umber as a string.
//? The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
//? Ensure the function can hanle numbers as strings, which may include spaces and dashes.

//* Luhn Algorithm Steps:
//Steps of Luhn Algorithm
// Prepare the number:
// Start with the digits of the number. For example, if validating the number 79927398713.
// Reverse the Digits:
// Reverse the digits of the number. For the example, it becomes 3178937997.
// Double Every Second Digit:
// Starting from the first digit, double every second digit.
// For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
// Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
// Subtract 9 from Numbers Higher Than 9:
// 16 = 16 - 9 = 7
// 16 = 1 + 6 =7

// 14 = 14 - 9 = 5
// 14 = 1 + 4 = 5

// If doubling the number results in a number greater than 9, subtract 9 from it.
// Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.

// Sum All Digits:
// Add all the digits together.
// 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.

// Check Module 10:
// If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.

// 1st Solution
// const validateCreditCard = (str) => {
//   // initial step
//   str = str.replace(/\D/g, "");

//   // step 1: Reverse the Digits:
//   let revNum = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revNum = revNum + str[i];
//   }
//   //   console.log(revNum);

//   // Step 2: Double Every Second Digit
//   let doubleNum = revNum
//     .split("")
//     .map((curDigit, index) => {
//       if (index % 2 !== 0) {
//         curDigit = curDigit * 2;
//         if (curDigit > 9) {
//           curDigit = curDigit - 9;
//         } else {
//           curDigit = curDigit;
//         }
//       }
//       return curDigit;
//     })
//     .reduce((accum, curElem) => accum + Number(curElem), 0);
//   return doubleNum % 10 === 0;
// };

// 2nd Solution

const validateCreditCard = (cardNumber) => {
    cardNumber = cardNumber.replace(/[-\s]/g, "");
    if (!/^\d+$/.test(cardNumber)) return false;
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = parseInt(cardNumber[i], 10);
      if ((cardNumber.length - i) % 2 === 0) digit *= 2;
      sum += digit > 9 ? digit - 9 : digit;
    }
    return sum % 10 === 0;
  };
  
  // Example Usage:
  console.log(validateCreditCard("4539 1488 0343 6467")); //Output: true
  console.log(validateCreditCard("8273 1232 7352 0569")); //Output: false
  