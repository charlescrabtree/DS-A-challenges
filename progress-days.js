function progressDays(miles) {
  let count = 0

  for (let i = 0; i < miles.length; i++) {
      if (miles[i] < miles [i + 1]) {
          count++
      }
  }

  console.log(count)
}

progressDays([10, 11, 12, 9, 10]);
progressDays([6, 5, 4, 3, 2, 9]);
progressDays([9, 9]);