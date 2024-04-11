function rotateLeft(d, arr) {
  // Write your code here
  const FrontSlice = arr.slice(0, d);
  const backSlice = arr.slice(d, arr.length);
  // console.log(backSlice);
  // console.log(FrontSlice);
  return backSlice.concat(FrontSlice);
}
// console.log("left", rotateLeft(4, [1, 2, 3, 4, 5]));
