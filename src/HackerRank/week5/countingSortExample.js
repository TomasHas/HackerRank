// const inputArray = [4, 3, 12, 1, 5, 5, 3, 9];
const inputArray = [2, 5, 3, 0, 2, 3, 0, 3];

function countingSortExample(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  console.log("range", range);

  const countArray = new Array(max - min + 1).fill(0);
  //count number of occurrances

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[j] === i) {
  //       countArray[i]++;
  //     }
  //   }
  // }
  //countarray = [2,0,2,3,0,1]

  //
  // for (let i = 1; i < max; i++) {
  //   countArray[i] = countArray[i - 1] + countArray[i];
  //   console.log(countArray);
  // }

  console.log("min", min);

  console.log("max", max);
  console.log(max - min + 1);
  console.log(max + 1);
  console.log("countArray", countArray);
}

countingSortExample(inputArray);
