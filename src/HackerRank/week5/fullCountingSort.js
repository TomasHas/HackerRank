function countSort(arr) {
  // Write your code here
  const indexArr = arr.map((e) => e[0]);
  const max = Math.max(...indexArr);
  const countArray = new Array(max + 1).fill(0);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // converts first half of arr to '-'
    if (i < arr.length / 2) {
      arr[i][1] = "-";
    }
  }

  // push modified array to newArr

  arr.forEach((e) => {
    newArr.push(e[1]);
  });
  // console.log(countArray);

  // console.log(newArr);

  return newArr;
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
