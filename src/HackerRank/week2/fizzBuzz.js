// function fizzBuzz(n) {
//   // Write your code here
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 !== 0 && i % 5 !== 0) {
//       console.log(i);
//     }
//   }
// }
// console.log("tomas");
// console.log(fizzBuzz(15));

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

function findMedian(arr) {
  // Write your code here
  const sortedArr = arr.sort().slice(arr.length / 2);

  //   console.log("sortedArr", sortedArr);
  return sortedArr;
}
// console.log(findMedian([0, 1, 2, 4, 6, 5, 3, 9, 11, 14, 45]));
