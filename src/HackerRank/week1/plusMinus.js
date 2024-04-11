function plusMinus(arr) {
  // Write your code here

  let plus = 0;
  let minus = 0;
  let zero = 0;
  // for loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) plus += 1;
    if (arr[i] < 0) minus += 1;
    if (arr[i] === 0) zero += 1;
  }

  const newArr = [plus, minus, zero].map((r) => (r / arr.length).toFixed(6));
  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    // console.log(element);
  }
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
