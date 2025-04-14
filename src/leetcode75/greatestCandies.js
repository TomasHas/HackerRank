// var kidsWithCandies = function (candies, extraCandies) {
//   const max = Math.max(...candies);
//   const result = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= max) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }
//   console.log(result);
//   return result;
// };

// kidsWithCandies([2, 3, 5, 1, 3], 3);

//* //////////////////////////////////////////////////////////////////////////////////////
// var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0;

//   if (
//     flowerbed[flowerbed.length - 1] === 0 &&
//     flowerbed[flowerbed.length - 2] === 0
//   ) {
//     count++;
//     flowerbed[flowerbed.length - 1] = 1;
//   }
//   if (flowerbed[0] === 0 && flowerbed[1] === 0) {
//     count++;
//     flowerbed[0] = 1;
//   }
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 0) {
//       if (flowerbed.length === 1) {
//         count++;
//         flowerbed[i] = 1;
//       }
//       if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
//         count++;
//         flowerbed[i] = 1;
//       }
//     }
//   }

//   if (count >= n) {
//     console.log(true);

//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };

// canPlaceFlowers([1, 0, 0, 0, 1], 1);
// canPlaceFlowers([1, 0, 0, 0, 1], 2);

// canPlaceFlowers([0, 0, 1, 0, 1], 1);

// canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 1);
// canPlaceFlowers([0, 0, 0, 0], 3);
// canPlaceFlowers([0, 0, 1, 0, 1], 1);
// canPlaceFlowers([0, 0, 1, 0, 1], 1);
// canPlaceFlowers([0], 1);

//* //////////////////////////////////////////////////////////////////////////////////////
// var reverseVowels = function (s) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let vowelList = [];
//   let arr = s.split("");
//   let indexList = [];

//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       vowelList.push(s[i]);
//       indexList.push(i);
//     }
//   }
//   vowelList.reverse();

//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.includes(arr[i])) {
//       arr[i] = vowelList[0];
//       vowelList.shift();
//     }
//   }

//   return arr;
// };
// reverseVowels("IceCreAm");

//* //////////////////////////////////////////////////////////////////////////////////////
// var reverseWords = function (s) {
//   const arrTrimmed = s
//     .split(" ")
//     .filter((e) => e !== "")
//     .reverse()
//     .join(" ");
//   console.log(arrTrimmed);
//   return arrTrimmed;
// };
// reverseWords("the sky is blue");

// reverseWords("  hello world  ");
// reverseWords("a good   example");

//* ////////////////////////////////////////////////////////////////////////////////////////
// version one

//& 238. Product of Array Except Self

// var productExceptSelf = function (nums) {
//   let result = [];
//   let p = 1;
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums.splice(1, i));
//     console.log(nums);
//   }
//   console.log(result);

//   return result;
// };
// productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]
// productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]

//* //////////////////////////////////////////////////////////////////////////////////////
// var increasingTriplet = function (nums) {
//   let slices = [];
//   let result = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (i + 3 <= nums.length) {
//       // slices.push(nums.slice(i, i + 3));
//       slices = nums.slice(i, i + 3);
//       console.log(slices);

//       for (let i = 0; i < slices.length - 1; i++) {
//         if (i + 2 < slices.length) {
//           console.log(
//             slices[i] < slices[i + 1] && slices[i + 1] < slices[i + 2]
//           );

//           if (slices[i] < slices[i + 1] && slices[i + 1] < slices[i + 2]) {
//             // console.log(slices[i], slices[i + 1]);
//             console.log(true);

//             return true;
//           }
//         }

//         // if (slices[i], slices[i + 1]){}
//       }
//     }
//   }
//   console.log(false);

//   return false;
// };
// // increasingTriplet([1, 2, 3, 4, 5]); //true
// // increasingTriplet([5, 4, 3, 2, 1]); //false
// // increasingTriplet([2, 1, 5, 0, 4, 6]); //true

// // increasingTriplet([2, 4, -2, -3]); // false
// increasingTriplet([20, 100, 10, 12, 5, 13]); // true

//* //////////////////////////////////////////////////////////////////////////////////////

// var merge = function (nums1, m, nums2, n) {
//   console.log(
//     nums1
//       .concat(nums2)
//       .sort()
//       .filter((e) => e > 0)
//   );
// };
// // merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([0], 0, [1], 1);
// merge([1], 2, [], 0);

// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;
//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k--] = nums1[i--];
//     } else {
//       nums1[k--] = nums2[j--];
//     }
//   }

//   console.log(nums1);
// };
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// // merge([0], 0, [1], 1);
// // merge([1], 2, [], 0);

//* //////////////////////////////////////////////////////////////////////////////////////

// var removeElement = function (nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   console.log(nums);

//   return k;
// };
// removeElement([3, 2, 2, 3], 3);

// var removeDuplicates = function (nums) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i], "=", nums[i]);
//     if (nums[i] !== nums[i + 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// };

// removeDuplicates([1, 1, 2]);
// //                [1, 1, 2]
// // removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// var removeDuplicates2 = function (nums) {
//   let k = 2;

//   for (let i = 2; i < nums.length; i++) {
//     // console.log("i:", i, "k:", k);
//     if (nums[i] !== nums[k - 2]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   console.log(nums);
//   return k;
// };
// // removeDuplicates2([1, 1, 1, 2, 2, 3]); // [1, 1 , 2, 2, 3]
// removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]); //  [0, 0, 1, 1, 2, 3, 3]

//* //////////////////////////////////////////////////////////////////////////////////////

// var majorityElement = function (nums) {
//   const count = {};

//   for (let i = 0; i < nums.length; i++) {
//     count[nums[i]] = (count[nums[i]] || 0) + 1;
//   }
//   let max = 0; // console.log(Math.max(...Object.values(count)));
//   let result = "";
//   for (const key in count) {
//     if (count[key] > max) {
//       max = count[key];
//       result = key;
//     }
//   }
//   console.log(result);

//   return result;
// };
// majorityElement([3, 2, 3]); //
// majorityElement([2, 2, 1, 1, 1, 2, 2]); //

//* //////////////////////////////////////////////////////////////////////////////////////

// var rotate = function (nums, k) {
//   const rest = nums.length - k;
//   const firstHalf = nums.splice(rest, k);
//   const secondHalf = nums.splice(k, nums.length - k);

//   const result = firstHalf.concat(secondHalf);
//   console.log("firstHalf", firstHalf);

//   console.log("secondHalf", secondHalf);

//   console.log(result);

//   return result;
// };

// rotate([1, 2, 3, 4, 5, 6, 7], 3); //[ 5, 6, 7, 1, 2, 3, 4]
// rotate([-1, -100, 3, 99], 2); //[3,99,-1,-100]

// var rotate = function (nums, k) {
//   k %= nums.length;

//   //              (  0  ,  6  )
//   const reverse = (left, right) => {
//     while (left < right) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//       right--;
//       console.log(left, right);
//     }
//   };

//   reverse(0, nums.length - 1);

//   reverse(0, k - 1);
//   reverse(k, nums.length - 1);
//   console.log(nums);

//   return nums;
// };
// rotate([1, 2, 3, 4, 5, 6, 7], 3); //[ 5, 6, 7, 1, 2, 3, 4]
// rotate([-1, -100, 3, 99], 2); //[3,99,-1,-100]

// var maxProfit = function (prices) {
//   let buyPrice = prices[0];
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     console.log("buyPrice", buyPrice, "price", prices[i]);
//     let price = prices[i];
//     if (buyPrice > prices[i]) {
//       buyPrice = prices[i];
//     }
//     // console.log(profit, buyPrice - prices[i]);

//     if (profit < prices[i] - buyPrice) {
//       profit = prices[i] - buyPrice;
//     }
//   }

//   console.log("profit", profit);
//   return profit;
// };
// maxProfit([7, 1, 5, 3, 6, 4]);
// // maxProfit([7, 6, 4, 3, 1]);

//* //////////////////////////////////////////////////////////////////////////////////////

// 13. Roman to Integer

// var romanToInt = function (s) {
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     console.log(roman[s[i]], roman[s[i + 1]]);
//     if (roman[s[i]] < roman[s[i + 1]]) {
//       count -= roman[s[i]];
//     } else count += roman[s[i]];
//   }
//   console.log(count);
//   return count;
// };

// romanToInt("III"); // 3
// romanToInt("LVIII"); // 58

// romanToInt("MCMXCIV"); // 1994

// function zeroesToCenter(arr, num) {
//   let filtered = arr.filter((el) => el !== num); // Remove all occurrences of num
//   let zeroes = arr.filter((el) => el === num); // Collect all occurrences of num

//   let mid = Math.floor(filtered.length / 2); // Find the middle index

//   let result = [
//     ...filtered.slice(0, mid), // First half
//     ...zeroes, // Insert all zeroes in the middle
//     ...filtered.slice(mid), // Second half
//   ];
//   console.log(result);

//   return result;
// }

// zeroesToCenter([0, 4, 1, 3], 0); // [1,0,1,3]

// var maxProfit2 = function (prices) {
//   let buyPrice = prices[0];
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < prices[i + 1]) {
//       buyPrice = prices[i];
//       profit += Math.abs(buyPrice - prices[i + 1]);
//     }
//   }
//   // console.log(buyPrice);
//   // console.log(profit);
//   return profit;
// };
// maxProfit([7, 1, 5, 3, 6, 4]);

// var canJump = function (nums) {
//   let i = 0;
//   while (i < nums.length - 1) {
//     if (nums[i] === 0) {
//       console.log(false);
//       return false;
//     }
//     i += nums[i];
//   }
//   console.log(true);
//   return true;
// };

// canJump([2, 3, 1, 1, 4]); //true
// canJump([3, 2, 1, 0, 4]); //false
// canJump([2, 0]); //true
// canJump([0]); //true

// var canJump = function (nums) {
//   let goal = nums.length - 1;
//   let len = nums.length - 1;

//   for (let i = len; i >= 0; i--) {
//     const e = nums[i];

//     if (i + e >= goal) {
//       goal = i;
//     }
//     console.log(i, "+", e, "=", i + e, ">=", goal);
//   }
//   console.log("goal", goal);

//   console.log(goal === 0);

//   return goal === 0;
// };

// canJump([2, 3, 1, 1, 4]); //true

// canJump([3, 2, 1, 0, 4]); //false
// // // // // console.log("------------"); //true
// // canJump([2, 0]); //true
// // // // console.log("------------");
// // canJump([1, 1, 1, 0]); //true
// // // // // console.log("------------"); //true
// // canJump([0, 2, 3]); //false
//* /////////////////////////////////////////////////////////////////////////
// var jump = function (nums) {
//   let right = 0;
//   let left = 0;
//   let jump = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     right = Math.max(right, i + nums[i]);
//     if (left === i) {
//       console.log(i);

//       left = right;
//       jump++;
//     }
//   }
//   console.log(jump);

//   return jump;
// };

// jump([2, 3, 1, 1, 4]); //2

// jump([2, 3, 0, 1, 4]); //2
// console.log(i, "+", e, "=", i + e, ">=", goal);
//* /////////////////////////////////////////////////////////////////////////
// var jump = function (nums) {
//   let result = false;

//   for (let i = 0; i < nums.length - 1; i++) {
//     const e = nums[i];
//     if (nums[i] === 0) {
//       return false;
//     }
//     if (i + nums[i] === nums.length - 1) {
//       console.log(i + nums[i], nums.length);
//       console.log(true);

//       return true;
//     }
//   }
//   console.log(result);

//   return result;
// };

// // jump([2, 3, 1, 1, 4]); //2
// jump([3, 2, 1, 0, 4]); //2

//* /////////////////////////////////////////////////////////////////////////

// var hIndex = function (citations) {
//   let count = 0;
//   for (let i = 0; i < citations.length; i++) {
//     console.log("citations[i]=", "i + 1=", citations[i], i + 1);
//     if (citations[i] >= i + 1) {
//       count++;
//     }

//     console.log(count);
//   }
//   return count;
// };
// // hIndex([3, 0, 6, 1, 5]);
// hIndex([1, 3, 1]);

//* /////////////////////////////////////////////////////////////////////////

// var productExceptSelf = function (nums) {
//   let final = [];
//   for (let i = 0; i < nums.length; i++) {
//     let firstHalf = nums.slice(0, i);
//     let secondHalf = nums.slice(i + 1, nums.length);
//     // console.log(firstHalf, secondHalf);
//     let full = firstHalf
//       .concat(secondHalf)
//       .flat()
//       .reduce((acc, cur) => acc * cur, 1);
//     final.push(full);
//   }
//   console.log(final);
// };productExceptSelf([1, 2, 3, 4]);

//* /////////////////////////////////////////////////////////////////////////

// var productExceptSelf = function (nums) {
//   let final = [];
//   let i = 0;
//   while (i < nums.length) {}
//   console.log(final);
// };

// productExceptSelf([1, 2, 3, 4]);
//* /////////////////////////////////////////////////////////////////////////

var canCompleteCircuit = function (gas, cost) {
  let tank = 0;

  let start = 0;
  if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) {
    console.log(-1);
    console.log(
      gas.reduce((a, b) => a + b, 0),
      cost.reduce((a, b) => a + b, 0)
    );

    return -1;
  }
  console.log(
    gas.reduce((a, b) => a + b, 0),
    cost.reduce((a, b) => a + b, 0)
  );
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      start = i + 1;

      console.log("tank", tank, cost[i]);
    }
  }
  console.log("start", start);
  return start;
  // console.log("index", index);
};

// canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
// canCompleteCircuit([2, 3, 4], [3, 4, 3]);
canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]);

//* /////////////////////////////////////////////////////////////////////////

// var lengthOfLastWord = function (s) {
//   let arr = s.trim().split(" ");
//   console.log(arr);
//   return arr[arr.length - 1].length;
//   console.log(arr[arr.length - 1].length);
// };

// lengthOfLastWord("Hello World");

//* /////////////////////////////////////////////////////////////////////////

// var longestCommonPrefix = function (strs) {
//   let prefix = strs[0];

//   for (let i = 0; i < strs.length; i++) {
//     while (!strs[i].startsWith(prefix)) {
//       prefix = prefix.slice(0, -1);

//       if (prefix === "") {
//         console.log("empty string");

//         return "";
//       }
//     }
//   }
//   console.log(prefix);

//   return prefix;
// };
// longestCommonPrefix(["flower", "flight", "flow"]);
// longestCommonPrefix(["dog", "racecar", "car"]);
// longestCommonPrefix(["flower", "fkow"]);

// var strStr = function (haystack, needle) {
//   for (let i = 0; i < haystack.length; i++) {
//     let wordSlice = haystack.slice(i, needle.length + i);
//     console.log(wordSlice, needle);

//     if (wordSlice === needle) {
//       console.log(i);

//       return i;
//     }
//   }
//   console.log(-1);

//   return -1;
// };

// strStr("sadbutsad", "sad"); // 0
// strStr("hello", "ll"); //3
// // strStr("hello", "ll"); //3
// // strStr("hello", "ll"); //3
// // strStr("hello", "ll"); //3

// strStr("leetcode", "leeto"); //-1;
