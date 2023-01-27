const codes = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

function uniqueWords(words) {
  const split = words.map((word) => word.split(""));
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    arr.push(split[i].map((letter) => codes[letter]).join(""));
  }
  console.log([...new Set(arr)].length);
}

uniqueWords(["gin", "zen", "gig", "msg"]);
uniqueWords(["a"]);