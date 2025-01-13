// function createPhoneNumber(numbers) {
//   const firstThree = `(${numbers.slice(0, 3).join("")}) `;
//   const secondThree = `${numbers.slice(3, 6).join("")}-`;
//   const lastFour = `${numbers.slice(6).join("")}`;
//   const phoneNumbers = `${firstThree}${secondThree}${lastFour}`;

//   console.log(phoneNumbers);
// }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// function createFunctions(n) {
//   var callbacks = [];

//   for (var i = 0; i < n; i++) {
//     callbacks.push(() => i);
//   }

//   return callbacks;
// }
// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0]; // must return 0
// callbacks[3]; // must return 3

////////////////////////////////////////////////////////////////////////////
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// TTTTTTT  WW     WW    OOOOO      SSSS   UU   UU  MMM    MMM   SSSS
//   TTT    WW     WW   OO   OO    SS      UU   UU  MM M  M MM  SS
//   TTT    WW  W  WW  OO     OO    SSSS   UU   UU  MM  MM  MM   SSSS
//   TTT    WW W W WW   OO   OO        SS  UU   UU  MM      MM      SS
//   TTT     WW   WW     OOOOO     SSSSS   UUUUUUU  MM      MM   SSSS

// function twoSum(numbers, target) {
//   const numIndices = new Map();

//   for (let i = 0; i < numbers.length; i++) {
//     const complement = target - numbers[i];
//     console.log("complement", complement);

//     if (numIndices.has(complement)) {
//       console.log(`key`, [numIndices.get(complement), i]);
//       console.log("finally", numIndices);
//       return [numIndices.get(complement), i];
//     }
//     numIndices.set(numbers[i], i);
//     console.log("finally", numIndices);
//   }
// }

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length; j++) {
//       // console.log(numbers[i] + numbers[j]);

//       if (numbers[i] + numbers[j] === target) {
//         console.log([i, j]);

//         return [i, j];
//       }
//     }
//   }
// }
// twoSum([1, 2, 3], 4); // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6); // returns [1, 2] or [2, 1]
// twoSum([1234, 5678, 9012], 14690);
// twoSum([2, 2, 3], 4);
// twoSum([2, 3, 1], 3);
