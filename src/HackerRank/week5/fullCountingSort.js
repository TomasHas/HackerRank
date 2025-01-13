function countSort(arr) {
  // Write your code here
  const indexArr = arr.map((e) => e[0]);
  const max = Math.max(...indexArr);
  const countArray = new Array(max + 1).fill(0);
  const outputArray = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      arr[i][1] = "-";
    }
    countArray[indexArr[i]]++;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] = countArray[i - 1] + countArray[i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    outputArray[countArray[arr[i][0]] - 1] = arr[i][1];
    countArray[arr[i][0]]--;
  }

  // console.log(outputArray.join(" "));
}

countSort([
  [0, "ab"],
  [6, "cd"],
  [0, "ef"],
  [6, "gh"],
  [4, "ij"],
  [0, "ab"],
  [6, "cd"],
  [0, "ef"],
  [6, "gh"],
  [0, "ij"],
  [4, "that"],
  [3, "be"],
  [0, "to"],
  [1, "be"],
  [5, "question"],
  [1, "or"],
  [2, "not"],
  [4, "is"],
  [2, "to"],
  [4, "the"],
]);

// '- - - - - to be or not to be - that is the question - - - -'
