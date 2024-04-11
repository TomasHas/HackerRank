function closestNumbers(arr) {
  // Write your code here
  const newArr = arr.sort(function (a, b) {
    return a - b;
  });
  let currentLowest = Infinity;
  let result = [];
  // console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    const currentPair = [newArr[i], newArr[i + 1]];

    const absoluteDifference = Math.abs(currentPair[0] - currentPair[1]);
    //   console.log(currentPair, absoluteDifference);
    // if (result.length === 0) {
    //   result.push(currentPair);
    // }

    if (absoluteDifference !== 0) {
      // console.log(currentPair);
      if (absoluteDifference === currentLowest) {
        result.push(currentPair);
      }
      if (absoluteDifference < currentLowest) {
        currentLowest = absoluteDifference;

        result = [currentPair];
      }
    }
  }

  // console.log(result.flat(), currentLowest);
  return result.flat();
}

closestNumbers([
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
]);

closestNumbers([-5, 15, 25, 71, 63, 55]);
closestNumbers([5, 2, 3, 4, 1]);
