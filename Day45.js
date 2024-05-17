//* Programming Challenge: Password Validation Coding Problem

//? Create a function validatePassword that checks if a given string meets the following criteria:

//? Minimum Length: The password must be at least 8 characters long.
//? Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//?Numerical Requirement: The password must contain at least one digit.
//? Special Character Requirement: The password must have at least one special character from the set !@#$%^&*()-_+=.

//* Requirements
//? The function should return true if the password meets all the criteria, and false otherwise.
//? You are to implement this function using Javascript.

// 1st solution
// const validatePassword = (password) => {
//   const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
//   return regex.test(password);
// };

// 2nd Solution
const validatePassword = (password) => {
    if (password.length < 8) {
      return false;
    }
    let hasUpperCase = /[A-Z]/.test(password);
  
    let hasLowerCase = /[a-z]/.test(password);
  
    let hasDigit = /\d/.test(password);
  
    let hasSpeacialChar = /[!@#$%^^&*()-_+=]/.test(password);
  
    return hasUpperCase && hasLowerCase && hasDigit && hasSpeacialChar;
  };
  
  // Example 1
  console.log(validatePassword("Pass123!")); //Output: true
  
  // Example 2
  console.log(validatePassword("password")); //Output: false (fails due to lack of uppercase, digits, and special characters)
  
  // Example 3
  console.log(validatePassword("12345678")); //Output: false (fails due to lack of uppercase, digits, and special characters)
  
  // Example 4
  console.log(validatePassword("P@ssw0rd")); //Output: true
  