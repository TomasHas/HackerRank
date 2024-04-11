function realTest(skill) {
  //adds total skills
  const sumSkills = skill.reduce((cur, acc) => cur + acc, 0);
  const haflLength = skill.length / 2;
  const number = sumSkills / haflLength;
  const modulo = sumSkills % haflLength;
  let pairs = [];

  // console.log(
  //   "sumSkills:",
  //   sumSkills,
  //   "haflLength;",
  //   haflLength,
  //   "number:",
  //   number,
  //   "modulo:",
  //   modulo
  // );
  if (modulo === 1) {
    return -1;
  }

  for (let i = 0; i < skill.length; i++) {
    for (let j = i + 1; j < skill.length; j++) {
      if (skill[i] + skill[j] === number) {
        // console.log(skill[i], skill[j]);
        pairs.push(skill[i] * skill[j]);
      }
    }
  }

  let result = pairs.reduce((a, c) => a + c, 0);
  // console.log(result);
  return result;
}
// console.log(realTest([2, 1, 1, 4, 3, 5]));
// console.log(realTest([5, 4, 2, 1]));
// console.log(realTest([1, 2, 3, 4]));
