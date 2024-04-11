//& Smallest Common Multiple LCM
//& Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

//& The range will be an range of two numbers that will not necessarily be in numerical order.

//& For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// LCM(a,b)= a*b/GCD(a,b)

function smallestCommons(arr) {
  // Function to calculate the GCD
  function gcd(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  // Function to calculate the LCM of an array of numbers
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Generate an array containing the range of numbers
  function range(min, max) {
    var arr = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  // Calculate the LCM for the entire range
  var rangeArr = range(Math.min(...arr), Math.max(...arr));

  var result = rangeArr.reduce(function (acc, curr) {
    return lcm(acc, curr);
  });

  return result;
}

// // Example usage:
// console.log(smallestCommons([1, 5])); // Output: 60
// console.log(smallestCommons([1, 3]));

// console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([5, 1])); // should return 60.
// console.log(smallestCommons([2, 10])); // should return 2520
// console.log(smallestCommons([1, 13])); //should return 360360.
// console.log(smallestCommons([23, 18])); //should return 6056820.
