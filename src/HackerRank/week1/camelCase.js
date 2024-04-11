const text =
  "S;M;plasticCup()C;V;mobile phoneC;C;coffee machineS;C;LargeSoftwareBookC;M;white sheet of paperS;V;pictureFrameC;V;mobile phoneC;C;coffee machineS;C;LargeSoftwareBookC;M;white sheet of paperS;V;pictureFrame";
const pattern = /([A-Z]\(.*?\))?;[A-Z];/g;

const parts = text.split(pattern);

const resultArray = parts.map((part) => {
  return part;
});

// console.log(resultArray);

function processData(input) {
  let words = input.split(/(?=[SC];[CMV];)/);
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === "S") {
      if (words[i][2] === "M") {
        let transform = words[i]
          .slice(4, words[i].length - 2)
          .split(/(?=[A-Z])/)
          .map((e) => e.toLowerCase())
          .join(" ");
        result.push(transform);
      } else if (words[i][2] === "C") {
        let transform = words[i]
          .slice(4, words[i].length)
          .split(/(?=[A-Z])/)
          .map((e) => e.toLowerCase())
          .join(" ");

        result.push(transform);
      } else if (words[i][2] === "V") {
        let transform = words[i]
          .slice(4, words[i].length)
          .split(/(?=[A-Z])/)
          .map((e) => e.toLowerCase())
          .join(" ");

        result.push(transform);
      }
    } else if (words[i][0] === "C") {
      if (words[i][2] === "M") {
        let transform = words[i]
          .slice(4, words[i].length)
          .split(" ")
          .map((e) => e[0].toUpperCase().concat(e.slice(1, e.length)))
          .join("");

        const newTransform = transform
          .slice(0, 1)
          .toLowerCase()
          .concat(transform.slice(1, transform.length));
        result.push(newTransform.concat("()"));
      } else if (words[i][2] === "C") {
        let transform = words[i]
          .slice(4, words[i].length)
          .split(" ")
          .map((e) => e[0].toUpperCase().concat(e.slice(1, e.length)))
          .join("");

        result.push(transform);
      } else if (words[i][2] === "V") {
        let transform = words[i]
          .slice(4, words[i].length)
          .split(" ")
          .map((e) => e[0].toUpperCase().concat(e.slice(1, e.length)))
          .join(" ");

        result.push(
          transform
            .slice(0, 1)
            .toLowerCase()
            .concat(transform.slice(1, transform.length))
        );
      }
    }
  }
  // console.log(result);
}
processData(
  "S;M;plasticCup()C;V;mobile phoneC;C;coffee machineS;C;LargeSoftwareBookC;M;white sheet of paperS;V;pictureFrame"
);
processData("S;V;iPadC;M;mouse padC;C;code swarmS;C;OrangeHighlighter");

// processData([
//   "C;V;can of coke", // mobilePhone
//   "S;M;sweatTea()", //plasticCup()
//   "S;V;epsonPrinter", //
//   "C;M;santa claus", //
//   "C;C;mirror", //CoffeeMachine
// ]); // picture frame

// processData([
//   "S;M;plasticCup()",

//   "C;V;mobile phone",

//   "C;C;coffee machine",

//   "S;C;LargeSoftwareBook",

//   "C;M;white sheet of paper",

//   "S;V;pictureFrame",
// ]);

// processData("S;M;plasticCup()"); // plastic cup
// processData("C;M;white sheet of paper"); // whiteSheetOfPaper()

// processData("S;C;LargeSoftwareBook"); // large software book

// processData("S;V;iPad");
// processData("C;M;mouse pad");
// processData("C;C;code swarm");
// processData("S;C;OrangeHighlighter");

// const result = [];
// for (let i = 0; i < input.length; i++) {
//   if (input[i][2] === "V") {
//     if (input[i][0] === "C") {
//       const camelCase = input[i]
//         .slice(4)
//         .split(" ")
//         .map((w) => w[0].toUpperCase().concat(w.slice(1)))
//         .join("");
//       result.push(camelCase);
//       // console.log(camelCase[0].toLowerCase().concat(camelCase.slice(1)));
//     } else {
//       var regex = /(?=[A-Z])/;
//       let text = input[i].slice(4).split(regex);
//       let lowerText = text
//         .map((e) => e.toLowerCase())
//         .join(" ")
//         .slice(0);
//       result.push(lowerText);
//       // console.log(lowerText);
//     }
//   }

//   if (input[i][2] === "M") {
//     if (input[i][0] === "C") {
//       const text = input[i].slice(4).split(" ");

//       const capitalize = text
//         .map((w) => w.slice(0, 1).toUpperCase().concat(w.slice(1)))
//         .join("")
//         .concat("()");
//       let firstLetterLower = capitalize.replace(
//         capitalize[0],
//         capitalize[0].toLowerCase()
//       );

//       result.push(firstLetterLower);
//       // console.log(firstLetterLower);
//     } else {
//       const regex = /(?=[A-Z])/;
//       const text = input[i].slice(4, -2).split(regex).join(" ").toLowerCase();
//       result.push(text);
//       // console.log(text);
//     }
//   }

//   if (input[i][2] === "C") {
//     if (input[i][0] === "C") {
//       const text = input[i].slice(4).split(" ");

//       const capitalize = text
//         .map((w) => w.slice(0, 1).toUpperCase().concat(w.slice(1)))
//         .join("");
//       result.push(capitalize);
//       // console.log(capitalize);
//     } else {
//       var regex = /(?=[A-Z])/;

//       const text = input[i].slice(4).split(regex).join(" ").toLowerCase();
//       result.push(text);
//       console.log(text);
//     }
//   }
// }
// // console.log(result.join(" "));
// return result;
