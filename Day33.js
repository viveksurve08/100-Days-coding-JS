// Random Hex Color Generator

//? Write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing random color in the format "#RRGGBB", where RR, GG, and BB are two-digit hexadecimal numbers representing the Red, Green, and Blue components of the color, respectively.

//? Your challenge is to amplement the randomHexColor function using Javascript and ensure that it produces a valid hexadecimal color code with a length of 7 characters (including the # symbol).

//* Constraints:
//? The output color code should always start with # foloowed by six hexadecimal characters (RRGGBB).
//? The function should not take any paramenters.
//? The generated color codes should be unique and evenly distributed across the range of possible hecadecimal color codes.

//* Hint:
//converts the random number into a hexadecimal staring representation.

// 1st Way - simple
// const randomHexColor = () => {
//   return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
// };

// 2nd Way
const randomHexColor = () => {
    const randomInt = Math.floor(Math.random() * 1234567);
    const heXColor = "#" + randomInt.toString(16).padStart(6, "0");
    return heXColor;
  };
  
  console.log(randomHexColor());
  