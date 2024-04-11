function maximumPerimeterTriangle(sticks) {
  // Write your code here

  sticks?.sort((a, b) => b - a);

  for (let i = 0; i <= sticks.length - 3; i++) {
    if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
      return [sticks[i + 2], sticks[i + 1], sticks[i]];
    }
  }

  return [-1];
}
// console.log("first", maximumPerimeterTriangle([1, 1, 1, 3, 3]));
// console.log("sec", maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]));

// console.log("thi", maximumPerimeterTriangle([3, 9, 2, 15, 3]));
// if (sticks[i] && sticks[j + 1] && sticks[k + 2])
//   console.log(sticks[i], sticks[j + 1], sticks[k + 2]);
// if they are all true, pass them through function to test triangle and push to array.
// if array has more than one element, chose the right one
// return sticks[i], sticks[j + 1], sticks[k + 2];
// let sticksTwo = [...sticks];
// // console.log(sticksTwo);
// let arr = [];
// let sum = 0;

// const helperFunction = (a, b, c) => {
//   // console.log("abc", a, b, c);

//   if (a + b > c && a + c > b && b + c > a) {
//     arr.push([a, b, c]);
//   }
//   const biggest = arr.map((e) => e.reduce((a, c) => a + c, 0));
//   console.log("biggest", biggest);
//   return biggest;
// };

// for (let i = 0; i < sticks.length - 2; i++) {
//   for (let j = i + 1; j < sticksTwo.length - 1; j++) {
//     // console.log("j", j);
//     for (let k = j + 1; k < sticksTwo.length; k++) {
//       if (
//         (sticks[i], sticks[j], sticks[k] && i !== j && j !== k && i !== k)
//       ) {
//         // console.log("index", i, j, k);
//         // console.log(sticks[i], sticks[j], sticks[k]);
//         helperFunction(sticks[i], sticks[j], sticks[k]);
//       }
//     }
//   }
// }

// return arr;
