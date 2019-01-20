/**
* It should return an integer representing the number of special palindromic substrings that can be formed from the given string.
*
* substrCount has the following parameter(s):
*
* n: an integer, the length of string s
* s: a string
*
 */

function palindrome(word, arr) {
  return word === word.split('').reverse().join('') && !arr.includes(word);
}

function substrCount(s) {
  let sArr = s.split('');
  let subArr = [];
  let sMap = {};

  sArr.forEach((char) => {
    if (sMap.hasOwnProperty(char)) {
      sMap[char]++
    } else {
      sMap[char] = 1;  
    }
  });
  console.log(JSON.stringify(sMap, null, 2));

  for (let i = 0; i < s.length; i++) {
    for (let x = 0; x < s.length - i; x++) {
      let subStr = s.substring(x, x + i + 1);
      // console.log(`subStr = s.substring(${x}, ${x + i + 1}) = '${subStr}'`);
      if (Object.keys(sMap).length === 1 && subStr.length !== 1) {
        subArr.push(subStr);
      }
      
      if (palindrome(subStr, subArr) && subStr.length !== 1) {
        subArr.push(subStr);  
      }
    }
  }

  for (let i = 0; i < sArr.length; i++) {
    subArr.push(sArr[i]);
  }
  console.log(subArr);
  console.log(subArr.length);
  return subArr.length;
}

substrCount('asasd'); // 7
substrCount('abcbaba'); // 10
substrCount('aaaa'); //10
