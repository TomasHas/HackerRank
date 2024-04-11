function flippingBits(n) {
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    let split = n[i].toString().split("");
    // console.log(split[i]);
  }
}

flippingBits([67108864, 256, 268435456, 4096]);
flippingBits([2147483647, 1, 0]);

// function decimalTo32BitBinary(decimalNumber) {
//   if (decimalNumber < 0 || decimalNumber > 4294967295) {
//     return "Decimal number out of range for 32 bits.";
//   }

//   return (decimalNumber >>> 0).toString(2).padStart(32, '0');
// }

// const decimalNumber = 67108864;
// const binaryRepresentation = decimalTo32BitBinary(decimalNumber);
// console.log(`32-bit binary representation: ${binaryRepresentation}`);

// const binaryString = "00000000000000001000000000000000";
// const decimalNumber = parseInt(binaryString, 2);

// console.log(`Decimal representation: ${decimalNumber}`);
