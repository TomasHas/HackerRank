function gradingStudents(grades) {
  // Write your code here
  const rounded = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      if (grades[i].toString().split("")[1] === "3") {
        rounded.push(grades[i] + 2);
      } else if (grades[i].toString().split("")[1] === "4") {
        rounded.push(grades[i] + 1);
      } else if (grades[i].toString().split("")[1] === "8") {
        rounded.push(grades[i] + 2);
      } else if (grades[i].toString().split("")[1] === "9") {
        rounded.push(grades[i] + 1);
      } else {
        rounded.push(grades[i]);
      }
    } else {
      rounded.push(grades[i]);
    }
  }

  return rounded;
}

gradingStudents([73, 67, 38, 33]); //75 67 40 33
gradingStudents([37, 38]);
