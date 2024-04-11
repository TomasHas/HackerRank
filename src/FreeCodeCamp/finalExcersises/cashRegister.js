// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	        Amount
// Penny	                $0.01 (PENNY)
// Nickel	                $0.05 (NICKEL)
// Dime	                    $0.1 (DIME)
// Quarter	                $0.25 (QUARTER)
// Dollar	                $1 (ONE)
// Five Dollars	            $5 (FIVE)
// Ten Dollars	            $10 (TEN)
// Twenty Dollars	        $20 (TWENTY)
// One-hundred Dollars	    $100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// const currencyValue = [
//   { name: "penny", value: 0.01 },
//   { name: "nickel", value: 0.05 },
//   { name: "dime", value: 0.1 },
//   { name: "quarter", value: 0.25 },
//   { name: "one", value: 1 },
//   { name: "five", value: 5 },
//   { name: "ten", value: 10 },
//   { name: "twenty", value: 20 },
//   { name: "one-hundred", value: 100 },
// ];
// See below for an example of a cash-in-drawer array:

function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let changeDue = cash - price;
  let changeArray = [];

  // Calculate the total amount in the cash drawer
  let totalCid = cid.reduce((total, currency) => total + currency[1], 0);
  totalCid = totalCid.toFixed(2);
  //   console.log(typeof totalCid);
  // Helper function to check if there is enough change in a specific currency unit

  for (let i = 0; i < cid.length; i++) {
    const el = cid[i];

    //call helper function
  }
}

// Otherwise, return {status: "OPEN", change: [...]},

// console.log(
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], // 0
  ["NICKEL", 2.05], // 1
  ["DIME", 3.1], // 2
  ["QUARTER", 4.25], // 3
  ["ONE", 90], // 4
  ["FIVE", 55], // 5
  ["TEN", 20], // 6
  ["TWENTY", 60], // 7
  ["ONE HUNDRED", 100], // 8
]);
// ); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// );

//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

// function hasEnoughChange(unit, amount) {
//     const unitValue = currencyUnitValues[unit]; //read value of the bill or coin of corresponding unit in object

//     const availableAmount = cid.find((item) => item[0] === unit)[1]; // finds current avaiable amount by matching the argument passed ass unit

//     const maxAvailableUnits = Math.floor(availableAmount / unitValue);
//     const neededUnits = Math.min(
//       Math.floor(amount / unitValue),
//       maxAvailableUnits
//     );
//     const changeAmount = neededUnits * unitValue;
//     return changeAmount;
//   }

//   // Case: Not enough change in the drawer
//   if (Number(totalCid) < changeDue) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   }

//   // Case: Closed, exact change in the drawer
//   if (Number(totalCid) === changeDue) {
//     return { status: "CLOSED", change: cid };
//   }

//   // Case: Open, calculate change

//   for (let unit of Object.keys(currencyUnitValues).reverse()) {
//     const unitChange = hasEnoughChange(unit, changeDue);
//     if (unitChange > 0) {
//       changeArray.push([unit, unitChange]);
//       changeDue = (changeDue - unitChange).toFixed(2);
//     }
//   }

//   // Check if the changeArray total matches the required change
//   const totalChange = changeArray
//     .reduce((total, change) => total + change[1], 0)
//     .toFixed(2);
//   if (Number(totalChange) < cash - price) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   }
//   console.log({ status: "OPEN", change: changeArray });
//   return { status: "OPEN", change: changeArray };
