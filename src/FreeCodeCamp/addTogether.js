// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

function addTogether(x) {
  // Check if the first argument is a valid number
  if (typeof x !== "number") {
    // console.log("type", typeof x, x);
    return undefined;
  }

  // If the second argument is provided and it's a number, add the two
  if (arguments.length === 2 && typeof arguments[1] === "number") {
    // console.log("opt2", arguments[1]);
    return x + arguments[1];
  }
  // If the second argument is an array, add the first element
  if (arguments.length === 2 && Array.isArray(arguments[1])) {
    return undefined;
  }
  if (arguments.length === 2 && arguments[1] !== "number") {
    return undefined;
  }

  // If only one argument is provided, return a function to handle the second argument

  // Check if the second argument is a valid number
  return function (y) {
    if (typeof y === "number") {
      return x + y;
    } else return undefined;
  };
}

// // Example usage:
// console.log("2, 3", addTogether(2, 3)); //should return 5.
// console.log("(2)(3)", addTogether(2)(3)); // Outputs: 5
// console.log("(2)([3]", addTogether(2)([3])); // Outputs: 5

// console.log("2, '2", addTogether(2, "2"));
// console.log("(23.4, 30)", addTogether(23.4, 30));
// console.log("(5)", addTogether(5));
// console.log(addTogether(5, undefined));
// addTogether(2, "3");
// // should return a function. //should return 12. //should return undefined.

// console.log("(5)(7)", addTogether(5)(7));
