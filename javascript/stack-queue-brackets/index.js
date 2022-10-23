'use strick';


function validateBrackets(string) {

  let stack = [];

  for(let i = 0; i < string.length; i++)
  {
    let x = string[i];

    if (x === '(' || x === '[' || x === '{')
    {

      stack.push(x);
      continue;
    }

    if (stack.length === 0)
      return false;

    let check;
    switch (x){
    case ')':
      check = stack.pop();
      if (check === '{' || check === '[')
        return false;
      break;

    case '}':
      check = stack.pop();
      if (check === '(' || check === '[')
        return false;
      break;

    case ']':
      check = stack.pop();
      if (check === '(' || check === '{')
        return false;
      break;
    }
  }


  return (stack.length === 0);
}


let string = '([{}])';
let string2 = '{}{Code}[Fellows](())';
let string3 = '[({}]';

console.log(validateBrackets(string));
console.log(validateBrackets(string2));
console.log(validateBrackets(string3));

module.exports = validateBrackets;

