// 1. TWO SUM

//  00000000000000   000       000   000000000000     000000000000000  0000      0000   0000     0000
//  00000000000000   000       000   000000000000     000000000000000  0000      0000   00000   00000
//       0000        000   0   000   0000    0000     0000000          0000      0000   0000000000000
//       0000        000  000  000   0000    0000     000000000000000  0000      0000   0000000000000
//       0000        000 00000 000   0000    0000           000000000  0000      0000   0000 000 0000
//       0000        00000   00000   000000000000     000000000000000  00000000000000   0000  0  0000
//       0000        0000     0000   000000000000     000000000000000  00000000000000   0000     0000

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

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i, j);
        return i, j;
      }
    }
  }
};
// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);
