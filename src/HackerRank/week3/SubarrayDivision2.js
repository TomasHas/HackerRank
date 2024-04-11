function birthday(s, d, m) {
  // Write your code here

  if (s.length === 1) {
    if (s[0] === d) {
      return 1;
    } else return 0;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const section = s.slice(i, i + m);

    const reducedSection = section.reduce((a, c) => a + c, 0);
    console.log("s.length", s.length);
    console.log("s", s);
    console.log("reducedSection", reducedSection);
    console.log("section", section);

    console.log("reducedSection", reducedSection, d);
    if (reducedSection === d) {
      count++;
    } else s.shift();
  }

  return count;
}

// console.log("one", birthday([1, 1, 1, 1, 1, 1], 3, 2));
// console.log("two", birthday([4], 4, 1));
// console.log("three", birthday([1, 2, 1, 3, 2], 3, 2));
// console.log(
//   "four",
//   birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
// );
