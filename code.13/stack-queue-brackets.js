"use strict";

function validateBrackets(str) {
  // Arguments: string
  // Return: boolean

  let arr = [];
  let test;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char == "[" || char == "(" || char == "{") {
      arr.push(char);
    }

    // if str is empty
    if (arr.length == 0) {
      return false;
    }

    if (char == ")") {
      test = arr.pop();
      if (test == "{" || test == "[") return false;
    } else if (char == "}") {
      test = arr.pop();
      if (test == "(" || test == "[") return false;
    } else if (char == "]") {
      test = arr.pop();
      if (test == "(" || test == "{") return false;
    }
  }

  return arr.length == 0;
}

module.exports = validateBrackets;
