//* Programming Challenge: mail Address Validation

//? You're tasked with implementing a function to validate email addresses using a regular expression. Write a function validaterEmail(email) that takes a string email as input and returns true if the email address is valid according to the following rules:

//todo 1: The local part of the email address (before the "@") can contain:
//? Alphanumeric characters (A-Z, a-z, 0-9)
//? Special characters: period ".", underscore "_", percent "%", plus "+", or hyphen "-"
//? Consecutive periods are not allowed
//? Special charancters cannot appear at the beginning or end of the local part

//todo 2: The domain part of the email address (after the "@") can contain:
// Alphanumeric characters (A-Z, a-z, 0-9)
// Hyphen "-"
// Period "."
// Must contain at least one period
// The top-level domain(TLD) must consist of at least two alphabetic characters (e.g., "com", "org", "net", etc.)

const validaterEmail = (email) => {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(
      email
    );
  };
  
  console.log(validaterEmail("john.doe@example.com")); //true
  console.log(validaterEmail("invalid..dot@domain.com")); //false
  console.log(validaterEmail("missing@dotcom")); //false
  console.log(validaterEmail("no@domain")); //false
  