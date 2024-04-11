function miniMaxSum(arr) {
  // Write your code here
  let minSum = arr
    .sort()
    .slice(0, arr.length - 1)
    .reduce((a, c) => a + c, 0);
  let maxSum = arr
    .sort()
    .slice(1)
    .reduce((a, c) => a + c, 0);

  // console.log(minSum, maxSum);
}
// console.log(miniMaxSum([1, 2, 3, 4, 5]));
// console.log(miniMaxSum([7, 69, 2, 221, 8974]));

// 7 69 2 221 8974
// 299 9271
