// const n = 6;
// const k = 3;
// const ar = [1, 3, 2, 6, 1, 2];

// const n = 100;
// const k = 22;
// const ar =
//   "43 95 51 55 40 86 65 81 51 20 47 50 65 53 23 78 75 75 47 73 25 27 14 8 26 58 95 28 3 23 48 69 26 3 73 52 34 7 40 33 56 98 71 29 70 71 28 12 18 49 19 25 2 18 15 41 51 42 46 19 98 56 54 98 72 25 16 49 34 99 48 93 64 44 50 91 44 17 63 27 3 65 75 19 68 30 43 37 72 54 82 92 37 52 72 62 3 88 82 71".split(
//     " "
//   );

const n = 100;
const k = 66;
const ar =
  "50 44 77 66 70 58 9 59 74 82 87 15 10 95 10 81 2 4 87 85 28 96 76 18 86 91 94 59 19 58 98 48 38 70 36 38 66 9 72 54 23 23 17 18 8 16 9 56 12 59 73 31 10 62 83 84 28 91 29 22 73 22 3 75 26 31 93 57 15 32 46 74 99 10 15 58 60 53 41 49 71 59 4 20 38 78 1 94 76 5 70 68 42 34 77 28 19 25 20 15"
    .split(" ")
    .map((n) => parseInt(n, 10));

// console.log(ar);
function divisibleSumPairs(n, k, ar) {
  // Write your code her

  let newAr = ar.map((n) => parseInt(n, 10)).sort((a, b) => a - b);
  // console.log(newAr);

  let pairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((newAr[i] + newAr[j]) % k === 0) {
        pairs += 1;
      }
    }
  }
  // console.log(pairs);
  return pairs;
}
divisibleSumPairs(n, k, ar);

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
