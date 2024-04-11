// const matrix = [
//   [-1, 1, -7, -8],
//   [-10, -8, -5, -2],
//   [0, 9, 7, -1],
//   [4, 4, -2, 1],
// ];
// const matrix = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
//   ];
const matrix = [
  [1, 2, 7],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalDifference(arr) {
  // Write your code here
  const len = arr.length;
  let arrA = [];
  let arrB = [];

  let sumA = 0;
  let sumB = 0;

  // console.log(arr);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) {
        arrA.push(arr[i][j]);
        sumA += arr[i][j];
      }
    }
  }

  for (let i = 0; i < len; i++) {
    // console.log(arr[i].reverse());
    for (let j = 0; j < len; j++) {
      if (i === j) {
        arrB.push(arr[i][j]);
        sumB += arr[i][j];
      }
    }
  }

  const result = Math.abs(sumA - sumB);
  // console.log(result);
  return result;
}

diagonalDifference(matrix);
