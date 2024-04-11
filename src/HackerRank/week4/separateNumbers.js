// function separateNumbers(s) {
//   // Write your code here
//   const arr = s.split(" ");
//   console.log(arr);

//   let valueOne = 0;
//   let valueTwo = 0;
//   const result = [valueOne, valueTwo];
//   for (let i = 0; i < arr.length; i++) {
//     if (parseInt(arr[i][1]) - parseInt(arr[i][0]) === 1) {
//       valueOne = parseInt(arr[i][0]);
//     }
//     console.log(arr[i][0]);
//   }
//   console.log(result, valueOne);
//   return result;
// }
function separateNumbers(s) {
  for (let i = 1; i < s.length; i++) {
    // use BigInt for test cases with large numbers
    let curr = BigInt(s.slice(0, i));
    let temp = curr.toString();
    console.log("curr", curr);
    console.log("temp", temp);
    console.log(s);
    while (temp.length < s.length) {
      curr++;
      temp += curr.toString();
    }
    if (temp === s) {
      return console.log(`YES ${s.slice(0, i)}`);
    }
  }
  return console.log("NO");
}
