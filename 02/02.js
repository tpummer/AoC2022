const { spawn } = require('child_process');
const fs = require('fs');
const { format } = require('path');
const { nextTick } = require('process');
const readline = require('readline');

const iRock = "A"
const iPaper = "B"
const iScissors = "C"
const eRock = "X"
const ePaper = "Y"
const eScissors = "Z"

async function processLineByLine() {
  //var array = fs.readFileSync('02\\testinput.txt').toString().split("\r\n");
  //var array = fs.readFileSync('02\\everyinput.txt').toString().split("\r\n");
  var array = fs.readFileSync('02\\input.txt').toString().split("\r\n");

  let result = 0

  array.forEach((item) => {
    console.log(item);
    score = 0
      if(item === "A X") score = 3
      if(item === "A Y") score = 4
      if(item === "A Z") score = 8
      if(item === "B X") score = 1
      if(item === "B Y") score = 5
      if(item === "B Z") score = 9
      if(item === "C X") score = 2
      if(item === "C Y") score = 6
      if(item === "C Z") score = 7
      result = result + score
      console.log(`Score: ${score} Result: ${result}`);
  });

}

processLineByLine();
