function maxMin(k, arr) {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);
  let minDifference = Infinity;

  for (let i = 0; i <= sortedArr.length - k; i++) {
    const difference = sortedArr[i + k - 1] - sortedArr[i];

    minDifference = Math.min(minDifference, difference);
  }
  console.log(minDifference);
}

maxMin(3, [10, 100, 300, 200, 1000, 20, 30]); // 20
maxMin(2, [1, 2, 1, 2, 1]); // 0
maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]); // 3
maxMin(
  8,
  [
    6327, 571, 6599, 479, 7897, 9322, 4518, 571, 6677, 7432, 815, 6920, 4329,
    4104, 7775, 5708, 7991, 5802, 8619, 6053, 7539, 7454, 9000, 3267, 6343,
    7165, 4095, 439, 5621, 4095, 153, 1948, 1018, 6752, 8779, 5267, 2426, 9649,
    2190, 9103, 7081, 3006, 2376, 7762, 3462, 151, 3471, 1453, 2305, 8442,
  ]
); // 816
maxMin(
  5,
  [
    4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822,
    1784, 7802, 3142, 9739, 5629, 5413, 7232,
  ]
); // 1335

// const sortedArr = arr.sort((a, b) => a - b);

// let minDifference = Infinity;

// for (let i = 0; i <= sortedArr.length - k; i++) {
//   const difference = sortedArr[i + k - 1] - sortedArr[i];
//   minDifference = Math.min(minDifference, difference);
// }

// console.log(minDifference);
