function pickingNumbers(arr) {
  const sorted = arr.sort();

  console.log(sorted);
  let longest = 0;
  // let current = 0;
  let count = 0;
  let j = 0;

  for (let i = 0; i < sorted.length; i++) {
    // current = i;
    j = i;
    while (Math.abs(sorted[i] - sorted[j]) <= 1) {
      // console.log(i, sorted[i]);
      j++;
      count++;
    }
    longest = Math.max(longest, count);

    count = 0;
    // current++;
  }

  return longest;
}

// console.log("pick", pickingNumbers([4, 6, 5, 3, 3, 1]));
