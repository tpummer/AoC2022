const { spawn } = require('child_process');
const fs = require('fs');
const { format } = require('path');
const { nextTick } = require('process');
const readline = require('readline');

class Stack {
  constructor(...elements) {
    // Initializing the stack with given arguments 
    this.items = [...elements];
  }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
	
	// view hole stack
	print() {
		return this.items;
	}
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

function processLineByLine() {
  //var array = fs.readFileSync('05\\testmoves.txt').toString().split("\r\n");
  var array = fs.readFileSync('05\\inputmoves.txt').toString().split("\r\n");
  
	//    [D]    
	//[N] [C]    
	//[Z] [M] [P]
	//1   2   3 
  let teststacks=[new Stack("Z","N"),new Stack("M","C","D"),new Stack("P")]
  
  //[N] [G]                     [Q]    
  //[H] [B]         [B] [R]     [H]    
  //[S] [N]     [Q] [M] [T]     [Z]    
  //[J] [T]     [R] [V] [H]     [R] [S]
  //[F] [Q]     [W] [T] [V] [J] [V] [M]
  //[W] [P] [V] [S] [F] [B] [Q] [J] [H]
  //[T] [R] [Q] [B] [D] [D] [B] [N] [N]
  //[D] [H] [L] [N] [N] [M] [D] [D] [B]
  // 1   2   3   4   5   6   7   8   9 
  let inputstacks=[new Stack("D","T","W","F","J","S","H","N"), 
                   new Stack("H","R","P","Q","T","N","B","G"),
				   new Stack("L","Q","V"),
				   new Stack("N","B","S","W","R","Q"),
				   new Stack("N","D","F","T","V","M","B"),
				   new Stack("M","D","B","V","H","T","R"),
				   new Stack("D","B","Q","J"),
				   new Stack("D","N","J","V","R","Z","H","Q"),
				   new Stack("B","N","H","M","S")]

  
  let stacks = inputstacks

  array.forEach((item) => {
	  
	print(stacks)
	  
	let words = item.split(' ')
	  
	let count = Number(words[1])
	let from = Number(words[3])
	let to = Number(words[5])

	console.log(`count is [${count}] from is [${from}] to is [${to}]`)
	
	for ( let i=1; i<=count; i++ ) 
	stacks[to-1].add(stacks[from-1].remove());
  })
  
  print(stacks)
  
  let result = ""
  for (let item of stacks ) {
    result = result + item.peek()
  }
  console.log(result)
}

function print(stacks){
  for (let item of stacks ) {
    console.log("Stack: " + item.print())
  }
}

processLineByLine();


