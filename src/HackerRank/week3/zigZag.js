function processData(input) {
  //Enter your code here
  //   console.log(input);
  const sorted = input.sort((a, b) => a - b);

  const lastHalf = sorted.slice(sorted.length / 2 + 1, sorted.length);

  const firstHalf = sorted.slice(0, sorted.length / 2 + 1);
  //   console.log(lastHalf, firstHalf);

  return firstHalf.concat(lastHalf.reverse());
}

// console.log(processData([1, 2, 3, 4, 5, 6, 7]));
