// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// alphabet_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function rot13(str) {
  const alphabetArrayLower = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const newStr = str.split("");
  //   console.log(newStr);

  const cypher = (letter) => {
    const letterIndex = alphabetArrayLower.indexOf(letter);
    // console.log("letterIndex", letter);

    let cypheredLetterIndex = letterIndex + 13;

    if (cypheredLetterIndex >= 26) {
      cypheredLetterIndex = cypheredLetterIndex - 26;
    }
    // console.log("lastcypher", cypheredLetterIndex);

    return cypheredLetterIndex;
  };
  const cypheredString = [];
  for (let i = 0; i < newStr.length; i++) {
    let regex = /[^a-zA-Z0-9]/g;
    const letter = newStr[i];
    const cypheredLetter = cypher(letter);
    letter.match(regex)
      ? cypheredString.push(letter)
      : cypheredString.push(alphabetArrayLower[cypheredLetter]);
  }
  //   console.log(cypheredString.join(""));
  return cypheredString.join("");
}

rot13("SERR PBQR PNZC");

rot13("SERR PBQR PNZC"); //should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!"); //should decode to the string FREE PIZZA!
rot13("SERR YBIR?"); //should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
