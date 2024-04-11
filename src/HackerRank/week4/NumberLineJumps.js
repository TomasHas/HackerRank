function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  //   console.log(x1, v1, x2, v2);
  let posOne = x1;
  let posTwo = x2;
  let iterations = 0;

  if (x1 < x2 && v1 < v2) return "NO";
  if (x1 < x2 && v1 === v2) return "NO";

  let i = 0;
  while (posOne < posTwo) {
    posOne += v1;
    posTwo += v2;
    iterations++;
    i++;
  }
  // console.log("posOne", posOne);
  // console.log("posTwo", posTwo);
  // console.log("iterations", iterations);
  // console.log(posOne, posTwo, iterations);
  if (posOne === posTwo) {
    return "YES";
  } else {
    return "NO";
  }
}
// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(14, 4, 98, 2));
// console.log(kangaroo(0, 2, 5, 3));
