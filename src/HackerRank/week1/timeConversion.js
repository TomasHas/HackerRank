function timeConversion(s) {
  // Write your code here
  const hour = Number(s.slice(0, 2));

  const amPm = s.slice(s.length - 2, s.length);

  if (amPm === "PM") {
    if (hour === 12) {
      // console.log(`12:${s.slice(3, 5)}:${s.slice(s.length - 4, s.length - 2)}`);
      // return `12:${s.slice(3, 5)}:${s.slice(s.length - 4, s.length - 2)}`;
    } else {
      // console.log(
      //   `${hour + 12}:${s.slice(3, 5)}:${s.slice(s.length - 4, s.length - 2)}`
      // );
      return `${hour + 12}:${s.slice(3, 5)}:${s.slice(
        s.length - 4,
        s.length - 2
      )}`;
    }
  } else if (amPm === "AM") {
    if (hour === 12) {
      // console.log(`00:${s.slice(3, 5)}:${s.slice(s.length - 4, s.length - 2)}`);

      return `00:${s.slice(3, 5)}:${s.slice(s.length - 4, s.length - 2)}`;
    } else {
      // console.log(
      //   `${s.slice(0, 2)}:${s.slice(3, 5)}:${s.slice(
      //     s.length - 4,
      //     s.length - 2
      //   )}`
      // );
      return `${s.slice(0, 2)}:${s.slice(3, 5)}:${s.slice(
        s.length - 4,
        s.length - 2
      )}`;
    }
  }
}

// timeConversion("12:05:45PM");
// timeConversion("07:05:45PM");
// timeConversion("12:05:45AM");
// timeConversion("04:59:59AM");
// timeConversion("06:40:03AM");
