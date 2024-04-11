function pageCount(n, p) {
  // Write your code here

  const half = n / 2;
  if (p === 1) return 0;
  if (p === n) return 0;
  if (n % 2 === 0 && n - p === 1) {
    return 1;
  }
  if (p < half) {
    if (p % 2 === 0) {
      return Math.ceil((p - 1) / 2);
    } else {
      return Math.ceil((p - 2) / 2);
    }
  } else {
    if (n & (2 !== 0) && n - p === 1) return 0;
    if ((n - p) % 2 === 0) {
      return Math.floor((n - p) / 2);
    } else {
      if (n - p === 1) return 1;
      return Math.floor((n - p) / 2);
    }
  }
}
// console.log("(6, 2)", pageCount(6, 2));
// console.log("(6, 4)", pageCount(6, 4));
// console.log("(5, 4)", pageCount(5, 4)); //0
// console.log("(5, 5)", pageCount(5, 5)); //0
// console.log("(7, 3)", pageCount(7, 3)); //1
// console.log("(5, 1)", pageCount(5, 1)); //0
// console.log("(6, 5)", pageCount(6, 5)); //1

// console.log("(21235, 17)", pageCount(21235, 17)); //8
// console.log("(18183, 18042)", pageCount(18183, 18042)); //70
// console.log(95073 - 17440);

// console.log("(95073, 17440)", pageCount(95073, 17440)); //8720
