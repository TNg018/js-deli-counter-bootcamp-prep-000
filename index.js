var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
 }

   var line = []

  function currentLine(katzDeli) {
    if (katzDeli.length === 0) {
      return "The line is currently empty.";
    }
    
      const numbersAndNames = []

     for (let i = 0, l = line.length; i < l; i++) {
       numbersAndNames.push(`${i + 1}. ${line[i]}`)
     }

     return `The line is currently: ${numbersAndNames.join(', ')}`
   };
