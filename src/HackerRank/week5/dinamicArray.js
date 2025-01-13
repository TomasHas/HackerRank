function dinamicArray(n, queries) {
  // Example size, you can change this value
  const arr = Array.from({ length: n }, () => []);
  let lastAnswer = 0;
  const answerArray = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i][0];
    const x = queries[i][1];
    const y = queries[i][2];

    let idx = (x ^ lastAnswer) % n;
    let xor = x ^ y;

    if (query === 1) {
      let idx = (x ^ lastAnswer) % n;
      arr[idx].push(y);
    } else if (query === 2) {
      let idx = (x ^ lastAnswer) % n;
      lastAnswer = arr[idx][y % arr[idx].length];

      answerArray.push(lastAnswer);
    }
  }
  return answerArray;
}

// console.log(
//   dinamicArray(2, [
//     [1, 0, 5],
//     [1, 1, 7],
//     [1, 0, 3],
//     [2, 1, 0],
//     [2, 1, 1],
//   ])
// );
