// Your code here
function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`
}

let mondayWork = function(parameter="go to the office") {
    return `This Monday, I will ${parameter}.`
}

function wrapAdjective(symbol="*") {
    return function(string="special") {
        return `You are ${symbol}${string}${symbol}!`
    }
}

const Calculator = {
    add: function(a, b) {
      return a+b;
    },
    subtract: function(a, b) {
      return a-b;
    },
    multiply: function(a, b) {
      return a*b;
    },
    divide: function(a, b) {
      return a/b;
    }
  }
  
  function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }

// implement a function called wrapAdjective
// it should return a function - this inner function should - 
// take a single parameter that should default to "special"
// return a string of the form "You are ..."
// 

// what is the job of this function? is it supposed to return a string, modify an array?

// each function needs a single, clear purpose...............................................

// what data/info does it need in order to do it's job? what arguments, parameters is necessary?

// what am i expecting as a return value? Should be pretty distinct