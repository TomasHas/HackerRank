function lonelyinteger(a) {
  // Write your code here
  let ar = [];

  a.forEach((q) => {
    ar.push(a.filter((i) => i === q));
  });
  let result = ar.filter((e) => e.length < 2);
  // console.log(result.join(""));
  return result.join("");
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
// for (let i = 0; i < a.length; i++) {
//   const filteredResult = a.reduce((acc, cur) => acc === cur, 0);
//   console.log(filteredResult);
// }
// const uniqueValues = [...new Set(a)];
// const resultArray = [];

// for (const value of uniqueValues) {
//   const obj = {};
//   obj[value] = 0;
//   resultArray.push(obj);
// }
// //   console.log(resultArray);

// for (let i = 0; i < uniqueValues.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     console.log(uniqueValues[i], a[j]);
//     if (uniqueValues[i] === a[j]) {
//       resultArray[a[j]] += 1;
//     }
//   }
// }
// console.log(resultArray);
