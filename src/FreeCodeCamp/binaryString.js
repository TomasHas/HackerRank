function binaryAgent(str) {
  const arr = str.split(" ");
  //   console.log(arr);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const decimalValue = parseInt(element, 2);
    const stringValue = String.fromCharCode(decimalValue);
    result.push(stringValue);
  }

  return result.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
