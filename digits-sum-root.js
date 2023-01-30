// Recursive Function

function rootDigit(n) {
  let sum = n
    .toString()
    .split("")
    .map((digit) => +digit)
    .reduce((a, b) => a + b);

  if (sum.toString().length > 1) {
    sum = rootDigit(sum);
  }
  return sum;
}

console.log(rootDigit(123));
console.log(rootDigit(4322));
console.log(rootDigit(999888777));