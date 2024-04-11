const inputQuery = "aba xzxb ab";
const inputString = "aba baba aba xzxb";

const splitQuery = inputQuery.split(" ");
const splitString = inputString.split(" ");

function matchingStrings(strings, queries) {
  let result = [];
  queries.forEach((q) => {
    result.push(strings.filter((i) => i === q).length);
  });
  //   console.log(result);
  return result;
}

matchingStrings(splitString, splitQuery);
