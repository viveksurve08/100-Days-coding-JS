// Convert Object to Array and vice versa

//* Your task is to implement two functions:
//? Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.

//? Convert Array to Object: Write a function arrayObject that takes an array of key-value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.

//? Ensure that the conversion functions work correctly for objects with various data tyoes as values, such as strings, numbers, and objects.

//* Constraints:

//? The input object may certain properties of any data type.
//? The input array must contain arrays with exactly two elements (key-value pairs).
//? The output object should have properties in the same order as the original object.
//? You should use the provided function signatures (objectToArray and arrayToObject) without any additional parameters.

const obj = {
    name: "VivEk",
    age: 25,
    city: "Pune",
  };
  //  1st way simple
  // Convert the object to an array of key-value pairs.
  // let entries = Object.entries(obj);
  // console.log(entries); // [ [ 'name', 'VivEk' ], [ 'age', 25 ], [ 'city', 'Pune' ] ]
  // console.log(entries.flat()); // [ 'name', 'VivEk', 'age', 25, 'city', 'Pune' ]
  
  // Convert the array ofkey-value pairs back to an object.
  // let newObj = Object.fromEntries(entries);
  // console.log(newObj); // { name: 'VivEk', age: 25, city: 'Pune' }
  
  // 2nd way
  const objectToArray = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc.push(key, value);
      return acc;
    }, []);
  };
  
  const arrayToObject = (arr) => {
    const newObj = {};
    for (let i = 0; i < arr.length; i += 2) {
      newObj[arr[i]] = arr[i + 1];
    }
    return newObj;
  };
  
  const arr = objectToArray(obj);
  console.log(arr);
  const newObj = arrayToObject(arr);
  console.log(newObj);
  