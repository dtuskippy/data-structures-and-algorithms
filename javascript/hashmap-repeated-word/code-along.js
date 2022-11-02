
// function repeatedWord(string) {
//   let newMap = new Map();
//   let tempString = '';
//   let repeatWord = '';

//   for(let i = string.length - 1; i >= 0; i--) 	{
//     if(string[i] !== '') {
//       tempString += string[i];
//     }
//     else {
//       if(newMap.has(tempString))
//         repeatWord = tempString;
//       else newMap.set(tempString, 1);
//       tempString = '';
//     }
//   }

//   if(newMap.has(tempString)) repeatWord=tempString;

//   if(repeatWord !== '')
//   {
//     repeatWord = [...repeatWord].reverse().join('');
//     console.log(repeatWord);
//   }
//   else
//     console.log('Amazing, but no repeating word!');
// }


////// ac above


// driver code
const u = "Ravi had been saying that he had been there";
const v = "Ravi had been saying that";
const w = "he had had he";
repeatedWord(u);
repeatedWord(v);
repeatedWord(w);

solve(u);
solve(v);
solve(w);



