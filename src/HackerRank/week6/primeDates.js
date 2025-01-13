function processData(input) {
  //Enter your code here
  const arr = input;
  arr.forEach((num) => {
    let count = 0;
    parsed = parseInt(num);
    for (i = 1; i <= parsed; i++) {
      if (parsed % i === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      console.log("NO");
    } else {
      console.log("YES");
    }
    count = 0;
  });
}

// processData(["02-08-2025", "04-09-2025"]);
