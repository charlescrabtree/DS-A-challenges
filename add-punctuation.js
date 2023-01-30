// Higher Order Function

const addPunctuation = (punctuation) => {
  return (str) => str + punctuation
}

const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
console.log(addExcitement('Pokemon, catch em all'));

const addUnsure = addPunctuation('?!?');
console.log(addUnsure('Hello World'));
console.log(addUnsure('Pokemon, catch em all'));
