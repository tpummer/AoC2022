const { spawn } = require('child_process');
const fs = require('fs');
const { format } = require('path');
const { nextTick } = require('process');
const readline = require('readline');

async function processLineByLine() {
  //var array = fs.readFileSync('01\\testinput.txt').toString().split("\n");
  var array = fs.readFileSync('01\\input.txt').toString().split("\n");

let dwarf = 0;
let amount = 0;
let result = new Array();

array.forEach((item) => {
  console.log(item);
    if(isNumeric(item)){
      amount = amount + Number(item);
    } else {
      result.push(amount);
      amount = 0;
    }
      console.log(`Result: ${result}`);
});
if(amount != 0) result.push(amount);

result.sort(function(a, b) {
  return b - a;
});

  console.log(`Result: ${result[0] + result[1] + result[2]}`);

}

//this is why js is kind a hell
function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


processLineByLine();
