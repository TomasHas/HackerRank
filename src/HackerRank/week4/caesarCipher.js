function caesarCipher(s, k) {
  // Write your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letterRegex = /^[a-zA-Z]$/;
  let letterRegexLower = /^[a-z]$/;
  let encryptedText = [];
  let rotation = k;
  let result = "";
  if (k >= 26) {
    rotation = k % 26;
  }
  const cypherProcessor = (c) => {
    const index = alphabet.indexOf(c.toLowerCase());
    let newIndex = index + rotation;

    if (newIndex >= 26) {
      newIndex = newIndex % 26;
    }
    if (letterRegexLower.test(c)) {
      result = alphabet[newIndex];
    } else {
      result = alphabet[newIndex].toUpperCase();
    }

    // console.log(index, rotation, result);

    encryptedText.push(result);
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (letterRegex.test(char)) {
      cypherProcessor(char);
    } else {
      encryptedText.push(char);
    }
  }

  // console.log(encryptedText.join(""));
  return encryptedText.join("");
}

caesarCipher("middle-Outz", 2); //okffng-Qwvb
caesarCipher("159357lcfd", 98); //159357fwzx

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5); //Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj

// check if its a-z
// locate original index
// add encription

// check loop throgh letters
