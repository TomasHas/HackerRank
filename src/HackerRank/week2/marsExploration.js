function marsExploration(s) {
  // Write your code here
  let count = 0;
  let arr = [];
  const regex = /.{1,3}/g;
  const result = s.match(regex).filter((e) => e !== "SOS");
  // console.log("result", result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "SOS") {
      if (result[i][0] !== "S") {
        arr.push(result[i][0]);
        count++;
      }
      if (result[i][1] !== "O") {
        arr.push(result[i][0]);
        count++;
      }
      if (result[i][2] !== "S") {
        arr.push(result[i][0]);
        count++;
      }

      // console.log(result[i][0]);
    }
  }
  // console.log("arr", arr);
  // console.log(count);
  return count;
}
marsExploration("SOSSPSSQSSOR"); //3
marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"); //12
marsExploration("OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS"); //20
marsExploration("SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO"); //26
