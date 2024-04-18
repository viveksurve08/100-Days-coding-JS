// Write a javascript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

//Here's what the function should do:
//Accept an array of numbers as input.
// Create an empty object called  counts to shore the counts od each elements.
//Iterate through each number in the array.
//For each number, increment the count in the counts objects.
// If the count for a number does not exist yet, initialize it to 1.
//Return the counts object containing the counts of each element.

//Input
const numbers = [1, 2, 2, 3, 1, 4, 2];

// 1st way
// let count = {};
// for (let element of numbers) {
//   count[element] = (count[element] || 0) + 1;
// }

// 2nd way
// let count = {};
// numbers.forEach((numbers) => {
//   count[numbers] = (count[numbers] || 0) + 1;
// });

// 3rd way
// const count = numbers.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// 4th way
const count = new Map();
numbers.forEach((num) => {
  count.set(num, (count.get(num) || 0) + 1);
});
const output = Object.fromEntries(count);

console.log(output);

// Output
// {'1':2, '2':3, '3':1, '4':1 }

//? Constraints:
// The input array may contain positive integers only.
// You can assume that the input array is not empty.

//Help
// const obj = {};

// // Setting a property using squre brackets
// obj["name"] = "Vivek";
// console.log(obj); //Output : { name: 'Vivek' }

// // Accessing a property using squre brackets
// console.log(obj["name"]); //Output : "Vivek"
