function changeEnough(coins, amount) {
  const values = [25, 10, 5, 1];

  const coinsValues = coins.map((num, index) => num * values[index]);

  console.log(coinsValues.reduce((a, b) => a + b) >= amount * 100);
}

changeEnough([25, 20, 5, 0], 4.25);
changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);
changeEnough([30, 40, 20, 5], 12.55);
changeEnough([10, 0, 0, 50], 3.85);
changeEnough([1, 0, 5, 219], 19.99);