function countingValleys(steps, path) {
  // Write your code here
  let countArr = [];
  let count = 0;

  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      countArr.push(1), count++;
    }
    if (path[i] === "D") {
      countArr.push(-1), count--;
    }
    if (path[i] === "U" && count === 0) valleys++;
  }
  // console.log(valleys);
  return valleys;
}
countingValleys(8, "UDDDUDUU"); //1
countingValleys(10, "UDUUUDUDDD"); //0v
countingValleys(12, "DDUUDDUDUUUD"); //2

countingValleys(10, "DUDDDUUDUU"); //0
// countingValleys(10, "UDUUUDUDDD"); //0
// countingValleys(10, "UDUUUDUDDD"); //0
// countingValleys(10, "UDUUUDUDDD"); //0
// countingValleys(10, "UDUUUDUDDD"); //0
