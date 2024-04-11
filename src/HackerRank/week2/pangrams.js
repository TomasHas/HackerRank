function pangrams(s) {
  // Write your code here
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.toLowerCase().includes(alphabet[i])) {
      result.push(alphabet[i]);
    }
  }

  if (result.length === 26) {
    // console.log("pangram");
    return "pangram";
  } else {
    // console.log("not pangram");
    return "not pangram";
  }
}
pangrams("We promptly judged antique ivory buckles for the prize");
pangrams("We promptly judged antique ivory buckles for the next prize");
pangrams("We promptly judged antique ivory buckles for the next prize");
