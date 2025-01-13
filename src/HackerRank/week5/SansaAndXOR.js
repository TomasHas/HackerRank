// function sansaXor(arr) {
//   // Write your code here
//   let n = 0;
//   let len = arr.length;

//   for (let i = 0; i < arr.length; i++) {}

//   // console.log(3 ^ 5);
// }
// sansaXor([
//   [1, 2, 3],
//   [4, 5, 6, 7],
// ]);

function sansaXor(arr) {
  const n = arr.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (((i + 1) * (n - i)) % 2 !== 0) {
      result ^= arr[i];
    }
  }

  return result;
}
// console.log(sansaXor([[(1, 2, 3)], [(4, 5, 6, 7)]]));
// console.log(sansaXor([3, 4, 5])); //6
// console.log(sansaXor([3, 4, 5, 6, 7])); //1
