// 1. TWO SUM

//  00000000000000   000      000   000000000000     0000000000000  0000     0000   0000     0000
//  00000000000000   000      000   000000000000     0000000000000  0000     0000   00000   00000
//       0000        000      000   0000    0000     000000         0000     0000   0000000000000
//       0000        000  00  000   0000    0000     0000000000000  0000     0000   0000000000000
//       0000        000 0000 000   0000    0000           0000000  0000     0000   0000 000 0000
//       0000        0000    0000   000000000000     0000000000000  0000000000000   0000  0  0000
//       0000        0000    0000   000000000000     0000000000000  0000000000000   0000     0000

// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexit

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log(i, j);
//         return i, j;
//       }
//     }
//   }
// };
// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);

//&& ///////////////////////////////////////////////////////////////////////////////////////////////////

// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (key in cache) {
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// memoize([[2, 2], [2, 2], [], [1, 2], []]);

// memoize([[2], [3], [2], [], [3], []]);
// memoize([[5], []]);

//&& ///////////////////////////////////////////////////////////////////////////////////////////////////

// var cancellable = function (fn, args, t) {
//   const start = setTimeout(fn(args), t);
//   const cancelFn = clearTimeout(start);
//   const stop = setTimeout(cancelFn, cancelTimeMs);

//   return cancelFn;
// };

//&& ///////////////////////////////////////////////////////////////////////////////////////////////////

// var chunk = function (arr, size) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += size) {
//     // console.log(i, size);

//     newArr.push(arr.slice(i, size + i));
//   }

//   return newArr;
// };

// console.log("one", chunk([1, 2, 3, 4, 5], 1)); //[[1],[2],[3],[4],[5]]
// console.log("two", chunk([1, 9, 6, 3, 2], 3)); //[[1,9,6],[3,2]]

// console.log("three", chunk([8, 5, 3, 2, 6], 6)); //[[8,5,3,2,6]]
// console.log("four", chunk([], 1)); //[]

// const last = function (arr) {
//   // const last = arr.findLast((e) => e);
//   const last = arr[arr.length - 1];
//   console.log(last);

//   if (last) {
//     return last;
//   } else if (this.length === 1) {
//     return last;
//   } else {
//     return -1;
//   }
// };

// console.log("five", last([1, 2, 3, 4, 0]));

// var join = function (arr1, arr2) {
//   // if no repeat arr1.concat arr2
//   // if repeated arr2 wins
//   // if repeated and diff prop, include prop in new arr

//   const newArr = arr1.concat(arr2);
//   const merged = {};
//   for (let i = 0; i < newArr.length; i++) {
//     const obj = newArr[i];
//     const id = obj[id];

//     if (!merged[id]) {
//       merged[i] = { ...obj };
//     } else {
//     }
//   }
//   console.log(newArr);
// };
// join(
//   [
//     { id: 1, x: 1 },
//     { id: 2, x: 9 },
//   ],
//   [{ id: 3, x: 5 }]
// );
// join(
//   [
//     { id: 1, x: 2, y: 3 },
//     { id: 2, x: 3, y: 6 },
//   ],
//   [
//     { id: 2, x: 10, y: 20 },
//     { id: 3, x: 0, y: 0 },
//   ]
// );
// join(
//   [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//   [{ id: 1, b: { c: 84 }, v: [1, 3] }]
// );

// function factorial(n) {
//   // if we found the target doll rtn true
//   // else  keep looking
//   console.log(n);
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(4));

// var ArrayWrapper = function(nums) {
//   this.nums = nums
//   };

//   /**
//    * @return {number}
//    */
//   ArrayWrapper.prototype.valueOf = function() {
//       return reduce((acc, curr)=> acc+ curr, this.nums)
//   }

//   /**
//    * @return {string}
//    */
//   ArrayWrapper.prototype.toString = function() {

//   }

//   ArrayWrapper([[1,2],[3,4]])
//   ArrayWrapper([[23,98,42,70]])

//   ArrayWrapper([[],[]])

// function reducer(nums) {
//   return nums.flat().reduce((acc, curr) => acc + curr, 0);
// }
// console.log(
//   reducer([
//     [1, 2],
//     [3, 4],
//   ])
// );

// var isPalindrome = function (x) {
//   console.log(
//     x.toString().split("").join("") ===
//       x.toString().split("").reverse().join("")
//   );
//   console.log(x.toString().split("").join(""));
//   console.log(x.toString().split("").reverse().join(""));
//   return     x.toString().split("").join("") ===
//   x.toString().split("").reverse().join("")
// };

// console.log(isPalindrome(121));
