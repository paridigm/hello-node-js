// app/calc.js

function sum (arr) {
  return arr.reduce(function(a, b) {
    return a + b
  }, 0)
}

module.exports.sum = sum   // this puts the sum function
                           // into a blank object called module
