const { spawn } = require('child_process');
const fs = require('fs');
const { format } = require('path');
const { nextTick } = require('process');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('01\\input.txt');
  //const fileStream = fs.createReadStream('01\\testinput.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let biggest = 0;
  let amount = 0;
  for await (const line of rl) {
    amount = amount + Number(line);
    //console.log(`line = ${line}; biggest=${biggest}; amount=${amount}`)
    if(!isNumeric(line)){
      if(biggest < amount){
        biggest = amount;
      }
      amount = 0;
    }
  }
  if(biggest < amount){
    biggest = amount;
  }
  amount = 0;

  console.log(`Result: ${biggest}`);

}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}


processLineByLine();
