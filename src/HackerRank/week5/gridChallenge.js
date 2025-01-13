function gridChallenge(grid) {
  // Write your code here
  //return
  let sortedGrid = [];
  for (let i = 0; i < grid.length; i++) {
    sortedGrid.push(grid[i].split("").sort());
  }
  // let sortedGrid = grid.map(row => row.split("").sort());

  for (let col = 0; col < sortedGrid.length; col++) {
    for (let row = 0; row < sortedGrid.length - 1; row++) {
      if (sortedGrid[row][col] > sortedGrid[row + 1][col]) {
        return "NO";
      }
    }
  }
  return "YES";
}

// gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]);
// gridChallenge(["kc", "iu"]); // YES
// gridChallenge(["ux", "ae"]); // NO

// console.log(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]));
// console.log(gridChallenge(["kc", "iu"]));
// console.log(gridChallenge(["ux", "ae"]));
