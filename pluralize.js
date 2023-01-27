function pluralize(words) {
  let obj = {}
  for (const value of words) {
      obj[value] = (obj[value] || 0) + 1
  }

  const arr = []
  for (const prop in obj) {
      if (obj[prop] > 1) {
          arr.push(prop + 's')
      } else arr.push(prop)
  }
  
  console.log(arr)
}

pluralize(["cow", "pig", "cow", "cow"]);
pluralize(["table", "table", "table"]);
pluralize(["chair", "pencil", "arm"]);