const { spawn } = require('child_process');
const fs = require('fs');
const { format } = require('path');
const { nextTick } = require('process');
const readline = require('readline');

const score = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

async function processLineByLine() {
  //var array = fs.readFileSync('03\\testinput.txt').toString().split("\r\n");
  var array = fs.readFileSync('03\\input.txt').toString().split("\r\n");
  let result = 0
  
  let count = 1
  let one = ""
  let two = ""
  let three = ""

  array.forEach((item) => {
	  
	if(count == 1) one = item
	if(count == 2) two = item
	if(count == 3) three = item
	  
	if(count != 3) {
		count++ 
	} else {
		count = 1
		
		let value = 0
		one.split('').forEach(function(c) {
		  if(two.includes(c) && three.includes(c)){
			value = score.indexOf(c)+1;
			console.log(`character: ${c} value: ${value}`);
			
		  }
		});
		result = result + value
	}
	 
  })
  console.log(result)
}

processLineByLine();
