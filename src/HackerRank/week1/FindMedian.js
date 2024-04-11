function findMedian(arr) {
  // Write your code here
  const half1 = Math.floor(arr.length / 2);
  const half2 = Math.floor(arr.length - half1);

  const sortedAr = arr.sort((a, b) => a - b);

  const result = sortedAr.slice(half1, half2).join("");
  // console.log(result);
  return result;
}
findMedian([0, 1, 2, 4, 9, 6, 5, 3, 11]);
findMedian([0, 1, 6, 5, 3, 7, 9]);

// lekgdisnsbfdzpqlkg
// eagemhdygyv
// jwvwwnrhuai
// urcadmrwlqe
// mpgqsvxrijpombyv
// mpgqsvxrijpombyv
// urcadmrwlqe
// mpgqsvxrijpombyv
// eagemhdygyv
// eagemhdygyv
// jwvwwnrhuai
// urcadmrwlqe
// jwvwwnrhuai
// kvugevicpsdf
// kvugevicpsdf
// mpgqsvxrijpombyv
// urcadmrwlqe
// mpgqsvxrijpombyv
// exdafbnobg
// qhootohpnfvbl
// suffrbmqgnln
// exdafbnobg
// exdafbnobg
// eagemhdygyv
// mpgqsvxrijpombyv
// urcadmrwlqe
// jwvwwnrhuai
// lekgdisnsbfdzpqlkg
// mpgqsvxrijpombyv
// lekgdisnsbfdzpqlkg
// jwvwwnrhuai
// exdafbnobg
// mpgqsvxrijpombyv
// kvugevicpsdf
// qhootohpnfvbl
// urcadmrwlqe
// kvugevicpsdf
// mpgqsvxrijpombyv
// lekgdisnsbfdzpqlkg
// mpgqsvxrijpombyv
// kvugevicpsdf
// qhootohpnfvbl
// lxyqetmgdbmh
// urcadmrwlqe
// urcadmrwlqe
// kvugevicpsdf
// lxyqetmgdbmh
// urcadmrwlqe
// lxyqetmgdbmh
// jwvwwnrhuai
// qhootohpnfvbl
// qhootohpnfvbl
// jwvwwnrhuai
// lekgdisnsbfdzpqlkg
// kvugevicpsdf
// mpgqsvxrijpombyv
// exdafbnobg
// kvugevicpsdf
// lekgdisnsbfdzpqlkg
// qhootohpnfvbl
// exdafbnobg
// qhootohpnfvbl
// exdafbnobg
// mpgqsvxrijpombyv
// suffrbmqgnln
// mpgqsvxrijpombyv
// qhootohpnfvbl
// jwvwwnrhuai
// mpgqsvxrijpombyv
// qhootohpnfvbl
// lekgdisnsbfdzpqlkg
// eagemhdygyv
// jwvwwnrhuai
// kvugevicpsdf
// eagemhdygyv
// eagemhdygyv
// lxyqetmgdbmh
// qhootohpnfvbl
// lxyqetmgdbmh
// exdafbnobg
// qhootohpnfvbl
// qhootohpnfvbl
// exdafbnobg
// suffrbmqgnln
// mpgqsvxrijpombyv
// urcadmrwlqe
// eagemhdygyv
// lxyqetmgdbmh
// urcadmrwlqe
// suffrbmqgnln
// qhootohpnfvbl
// kvugevicpsdf
// lekgdisnsbfdzpqlkg
// lxyqetmgdbmh
// mpgqsvxrijpombyv
// jwvwwnrhuai
// lxyqetmgdbmh
// lxyqetmgdbmh
// lekgdisnsbfdzpqlkg
// qhootohpnfvbl

// function matchingStrings(strings, queries) {
//   const result = {};

//   for (const key of queries) {
//     result[key] = 0;
//   }

//   for (let i = 0; i < queries.length; i++) {
//     const wordPattern = `\\b${queries[i]}\\b`; // Create a pattern with word boundaries
//     const regex = new RegExp(wordPattern, "g");
//     for (let j = 0; j < strings.length; j++) {
//       const matches = strings[j].match(regex);
//       if (matches) {
//         result[queries[i]] += matches.length;
//       }
//     }
//   }
//   //   console.log(Object.values(result));
//   return Object.values(result);
// }

// // console.log(result); // Output: [2, 1, 0]

// matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]); //[2,1,0]
// matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]); //[1,0,1]
// matchingStrings(
//   [
//     "abcde",
//     "sdaklfj",
//     "asdjf",
//     "na",
//     "basdn",
//     "sdaklfj",
//     "asdjf",
//     "na",
//     "asdjf",
//     "na",
//     "basdn",
//     "sdaklfj",
//     "asdjf",
//   ],
//   ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
// ); //[1, 3, 4, 3, 2];
