function countJewels(jewels, stones) {
  let stonesThatAreJewels = 0;
  for (let i = 0; i < stones.length; ++i) {
    for (let t = 0; t < jewels.length; ++t) {
      if (stones[i] === jewels[t]) {
        ++stonesThatAreJewels;
      }
    }
  }
  return stonesThatAreJewels;
}

console.log('Test Case One = 3', countJewels('aA', 'aAAbbbb'));
console.log('Test Case Two = 0', countJewels('z', 'ZZ'));
