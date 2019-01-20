// function alternatingCharacters(s) {
//    let count = 0;
//    for (let i=0; i < s.length; i++) {
//       (s[i] === s[i+1]) ?  count++ : count += 0;
//   }
//   return count;
// }

function alternatingCharacters(s) {
  let sArr = s.split('');
  let counter = 0, i;

  for(i = 0; i < sArr.length-1; i++) {
    if (sArr[i] === 'A' && sArr[i + 1] !== 'B') {
      counter++;
    }
    if (sArr[i] === 'B' && sArr[i + 1] !== 'A') {
      counter++;
    }
  }
  console.log(`Counter: ${counter}`);
}

alternatingCharacters('AAAA'); // 3
alternatingCharacters('BBBBB'); // 4
alternatingCharacters('ABABABAB'); // 0
alternatingCharacters('BABABA'); // 0
alternatingCharacters('AAABBB'); // 4
