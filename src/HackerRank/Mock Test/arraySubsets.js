//  const inputArr = [1,2,3,4,5]
const inputArr = [3, 7, 5, 6, 2];

function subsetA(arr) {
  // Write your code here

  let data = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let pair = [arr[i], arr[j]].reduce((acc, curr) => acc + curr, 0);
      let rest = arr
        .filter((n) => n !== arr[i] && n !== arr[j])
        .reduce((acc, curr) => acc + curr, 0);
      if (pair > rest) {
        // console.log(
        //   data[0] + data[1] < arr[i] + arr[j],
        //   data[0] + data[1],
        //   arr[i] + arr[j]
        // );
        if (data[0] + data[1] < arr[i] + arr[j]) {
          data = [arr[i], arr[j]];
        }
      }
    }
  }

  //   console.log(data.join(" "));

  //   console.log("result", result);
  //   return result;
}

subsetA(inputArr);
subsetA([4, 2, 5, 1, 6]);
