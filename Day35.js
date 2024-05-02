//* Check Object Emptiness

//? Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

//? Your task is to implement the isEmptyObject function using Javascript and return a message indicating whether the object is empty or not.

//* Constraints:

//? The input object may have any number of properties, including zero.
//? The function should return a message indicating whether the object is empty or not.
//? You should use the provided isEmptyObject function signature without any additional parameters.

// 1st way
// const isEmptyObject = (obj) => {
//   //   return obj.length === 0 ? `it's empty` : `it's not empty`; //Not Work
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return `it's not empty`;
//     }
//   }
//   return `it's empty`;
// };

// 2nd way
// const isEmptyObject = (obj) => {
//   let propertyNames = Object.getOwnPropertyNames(obj);
//   if (propertyNames.length == 0) {
//     return "it's empty";
//   } else {
//     return "it's not empty";
//   }
// };

// 3rd way
const isEmptyObject = (obj) => {
    for (let key in obj) {
      return "it's not empty";
    }
    return "it's empty";
  };
  
  // Check the condition true and false
  // const isEmptyObject = (obj) => {
  //   return Object.keys(obj).length === 0;
  // };
  
  console.log(isEmptyObject({ name: "Vivek" })); // Output: it's not empty
  console.log(isEmptyObject({})); // Output: it's empty
  console.log(isEmptyObject({ keyWithNull: null })); // Output: it's not empty
  console.log(isEmptyObject({ keyWithUndefined: undefined })); // Output: it's not empty
  