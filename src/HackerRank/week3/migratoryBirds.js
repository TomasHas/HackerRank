function migratoryBirds(arr) {
  const elementCounts = {};
  arr.forEach((element) => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });
  let maxKey = null;
  let maxValue = 0;

  for (const key in elementCounts) {
    if (elementCounts.hasOwnProperty(key)) {
      const value = elementCounts[key];

      if (value > maxValue || (value === maxValue && key < maxKey)) {
        maxValue = value;
        maxKey = key;
      }
    }
  }

  return maxKey;
}
// console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
// console.log(migratoryBirds([4, 3, 2, 3, 1, 2, 1, 3, 3]));
// console.log(migratoryBirds([4, 3, 2, 3, 2, 2, 1, 2, 1, 3, 3]));
