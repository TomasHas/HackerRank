function minimumAbsoluteDifference(arr) {
  // Write your code here
  const sorted = arr.sort((a, b) => a - b);
  let minimum = Infinity;
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const currPair = [sorted[i], sorted[j]];
      const absDiff = Math.abs(currPair[0] - currPair[1]);
      if (absDiff < minimum) {
        minimum = absDiff;
      }
      //   console.log(currPair);
    }
  }
  return minimum;
}
// console.log(
//   minimumAbsoluteDifference([
//     -558869845, -253368675, -200435086, -554647106, 817596793, 736821529,
//     -431448289, -594958331, -997417046, 577275288, -486732642, 714488978,
//     209855230, 208261360, -701577595, -36799266, 322217218, 950344570,
//     -942630463, 745540365, -248293785, -48424787, -861367652, 790856899,
//     34696697, 390522929, 772944769, 205568239, 92067485, 439178159, -615777531,
//     72471617, -80140032, -898298968, -674334641, -43710030, 921086278,
//     -814911521, 326433941, -267939666, -821675284, -628583029, 658506574,
//     -864249547, 58070554, -725595289, -581287035, -885020897,
//   ])
// );
