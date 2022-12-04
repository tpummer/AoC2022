const { spawn } = require('child_process');
const fs = require('fs');
const { format } = require('path');
const { nextTick } = require('process');
const readline = require('readline');

const score = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

async function processLineByLine() {
  //var array = fs.readFileSync('04\\testinput.txt').toString().split("\r\n");
  var array = fs.readFileSync('04\\input.txt').toString().split("\r\n");
  let result = 0

  array.forEach((item) => {
	  
	let twoElves = item.split(',')
	let first = twoElves[0].split('-')
	let second = twoElves[1].split('-')

	console.log(`First is [${first[0]}],[${first[1]}] Second is [${second[0]}],[${second[1]}]`)
	
	let amin = Number(first[0])
	let amax = Number(first[1])
	let bmin = Number(second[0])
	let bmax = Number(second[1])
	
	if(amin >= bmin && amin <= bmax ||
       amax >= bmin && amax <= bmax	||
	   bmin >= amin && bmin <= amax ||
	   bmax >= amin && bmax <= amax){
		result++
	}
	//if((first[0] >= second[0] && first[1] <= second[1])){
	//	console.log("Erste im Zweiten")
	//	result++
	//} else if((second[0] >= first[0] && second[1] <= first[1])){
	//	console.log("Zweite im Ersten")
	//	result++
	//} else {
	//	console.log("nix")
	//}
	
  })
  
  console.log(result)
}


processLineByLine();
