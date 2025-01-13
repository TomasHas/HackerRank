// const inputArray = [4, 3, 12, 1, 5, 5, 3, 9];

//& max - min + 1 when lowest num is not 0. if its not 0, calculate range.

const inputArray = [2, 5, 3, 0, 2, 3, 0, 3];
function countingSortExample(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max + 1;
  // console.log("range", range);

  const countArray = new Array(max + 1).fill(0);
  const outputArray = new Array(arr.length).fill(0);

  //count number of occurrances
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }
  for (let i = 1; i < max + 1; i++) {
    countArray[i] = countArray[i - 1] + countArray[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log("arr[i]", arr[i]);
    // console.log(countArray[arr[i]] - 1);
    outputArray[countArray[arr[i]] - 1] = arr[i];
    countArray[arr[i]]--;
    // console.log(outputArray);
  }

  // console.log("min", min);
  // console.log("max", max);
  // console.log(max - min + 1);
  // console.log("countArray", countArray);
  // console.log(outputArray);
}

countingSortExample(inputArray);
