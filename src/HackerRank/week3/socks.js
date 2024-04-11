function sockMerchant(n, ar) {
  // Write your code here
  let numPairs = 0;
  let sortedArr = ar.sort();

  // Iterate over the sorted array
  for (let i = 0; i < sortedArr.length - 1; i++) {
    // Check if the current element is equal to the next one
    if (sortedArr[i] === sortedArr[i + 1]) {
      // If a pair is found, increment the count and skip the next element
      numPairs++;
      i++;
    }
  }

  return numPairs;
}

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
