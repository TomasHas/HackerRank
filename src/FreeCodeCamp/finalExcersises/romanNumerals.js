// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	                1000
// CM	                 900
// D	                 500
// CD	                 400
// C	                 100
// XC	                  90
// L	                  50
// XL	                  40
// X	                  10
// IX	                   9
// V	                   5
// IV	                   4
// I	                   1
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  const strNum = num.toString();

  let final = [];
  const changethousands = (n) => {
    let result = "";

    switch (parseInt(n)) {
      case 1:
        return (result = "M");
        break;
      case 2:
        return (result = "MM");
        break;
      case 3:
        return (result = "MMM");
        break;

      default:
    }
    return result;
  };

  const changehundreds = (n) => {
    let result = "";
    switch (parseInt(n)) {
      case 1:
        return (result = "C");
        break;
      case 2:
        return (result = "CC");
        break;
      case 3:
        return (result = "CCC");
        break;
      case 4:
        return (result = "CD");
        break;
      case 5:
        return (result = "D");
        break;
      case 6:
        return (result = "DC");
      case 7:
        return (result = "DCC");
      case 8:
        return (result = "DCCC");
        break;
      case 9:
        return (result = "CM");
        break;
      default:
    }
    return result;
  };

  const changeTens = (n) => {
    let result = "";
    switch (parseInt(n)) {
      case 1:
        return (result = "X");
        break;
      case 2:
        return (result = "XX");
        break;
      case 3:
        return (result = "XXX");
        break;
      case 4:
        return (result = "XL");
        break;
      case 5:
        return (result = "L");
        break;
      case 6:
        return (result = "LX");
      case 7:
        return (result = "LXX");
      case 8:
        return (result = "LXXX");
        break;
      case 9:
        return (result = "XC");
        break;
      default:
    }
    return result;
  };
  const changeOnes = (n) => {
    // console.log("n", n);
    let result = "";

    switch (parseInt(n)) {
      case 1:
        return (result = "I");
        break;
      case 2:
        return (result = "II");
        break;
      case 3:
        return (result = "III");
        break;
      case 4:
        return (result = "IV");
        break;
      case 5:
        return (result = "V");
        break;
      case 6:
        return (result = "VI");
      case 7:
        return (result = "VII");
      case 8:
        return (result = "VIII");
        break;
      case 9:
        return (result = "IX");
        break;
      default:
    }
    return result;
    // console.log("result", result);
  };

  if (strNum.length === 1) {
    final.push(changeOnes(strNum[0]));
    // return changeOnes(strNum[0]);
  }

  if (strNum.length === 2) {
    // console.log(strNum);
    final.push(changeTens(strNum[0]));
    final.push(changeOnes(strNum[1]));
    // return changeTens(strNum[0]);
  }
  if (strNum.length === 3) {
    final.push(changehundreds(strNum[0]));
    final.push(changeTens(strNum[1]));
    final.push(changeOnes(strNum[2]));
    // return changehundreds(strNum[0]);
  }
  if (strNum.length === 4) {
    final.push(changethousands(strNum[0]));

    final.push(changehundreds(strNum[1]));
    final.push(changeTens(strNum[2]));
    final.push(changeOnes(strNum[3]));

    // return changethousands(strNum[0]);
  }

  console.log("final", strNum, final.join(""));
  return final.join("");
}
// convertToRoman(2); // should return the string II.
// convertToRoman(3); // should return the string III.convertToRoman(4)); // should return the string IV.convertToRoman(5));convertToRoman(6)); // should return the string VI.
// // should return the string V.
// convertToRoman(36);
// convertToRoman(45); // should return the string XLV.
// convertToRoman(501); // should return the string DI

// console.log("2", convertToRoman(2)); // should return the string II.

// console.log("3", convertToRoman(3)); // should return the string III.
// console.log("4", convertToRoman(4)); // should return the string IV.
// console.log("5", convertToRoman(5));
// console.log("6", convertToRoman(6)); // should return the string VI.
// // should return the string V.
// console.log("36", convertToRoman(36));
// console.log("45", convertToRoman(45)); // should return the string XLV.
// console.log("501", convertToRoman(501)); // should return the string DI

// convertToRoman(9); // should return the string IX.
// convertToRoman(12); // should return the string XII.
// convertToRoman(16); // should return the string XVI.
// convertToRoman(29); // should return the string XXIX.
// convertToRoman(44); // should return the string XLIV.
// convertToRoman(68); // should return the string LXVIII
// convertToRoman(83); // should return the string LXXXIII
// convertToRoman(97); // should return the string XCVII
// convertToRoman(99); // should return the strin1g XCIX1
// convertToRoman(400); // should return the string CD
// convertToRoman(500); // should return the string D

// convertToRoman(649); // should return the string DCXLIX
// convertToRoman(798); // should return the string DCCXCVIII
// convertToRoman(891); // should return the string DCCCXCI
// convertToRoman(1000); // should return the string M
// convertToRoman(1004); // should return the string MIV
// convertToRoman(1006); // should return the string MVI
// convertToRoman(1023); // should return the string MXXIII
// convertToRoman(2014); // should return the string MMXIV
// convertToRoman(3999); // should return the string MMMCMXCIX

// console.log("n", n);
// if (parseInt(n) === 4) {
//   ones.push("IV");
// }
// if (parseInt(n) === 5) {
//   ones.push("V");
// }

// if (6 >= parseInt(n) <= 8) {
//   for (let i = 0; i < n - 5; i++) {
//     ones.push("I");
//   }
// }
// if (parseInt(n) <= 3) {

//   for (let i = 0; i < n; i++) {
//     ones.push("I");
//   }
// }
