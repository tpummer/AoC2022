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

  array.forEach((item) => {
	  
	let value = 0
	console.log(item);
	let firstHalf = item.substring(0, item.length/2)
	let secondHalf = item.substring(item.length/2, item.length)
	console.log(`firstHalf: ${firstHalf} secondHalf: ${secondHalf}`);
	  
	firstHalf.split('').forEach(function(c) {
      if(secondHalf.includes(c)){
        value = score.indexOf(c)+1;
		console.log(`character: ${c} value: ${value}`);
		
	  }
    });
	result = result + value
  })
  console.log(result)
}

async function getValueFor(character){
	return 
}

processLineByLine();
