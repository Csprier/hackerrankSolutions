/*
const modeOfArr = arr => {
  const modeObj = {};
  const mode = arr[0];
  const modeCount = 1;
  
  arr.map(el => {
      if (modeObj[el]) modeObj[el] = 1
      else modeObj[el]++
      if (modeObj[el] > modeCount) {
          mode = el;
          modeCount = modeObj[el]
      }
  });

  return mode;
};

const isValid = str => {
  const freq = {};
  let result;
  
  str.split('').map(char => {
      if (freq[char]) freq[char]++
      else freq[char] = 1
  });

  Object.values(freq)
    .filter(num => num !== modeOfArr(Object.values(freq)))
      .length > 1 ?
      result = 'NO' : result = 'YES';

  return result;
};
*/

function modeOfArr(arr) {
  const modeObj = {};
  const mode = arr[0];
  const modeCount = 1;

  arr.map(el => {
    if (modeObj[el]) {
        modeObj[el] = 1
    } else {
      modeObj[el]++
    }
    if (modeObj[el] > modeCount) {
      mode = el;
      modeCount = modeObj[el]
    }
  });
  return mode;
};

function isValid(s) {
  const freq = {};
  let result;

  s.split('').map(char => {
    if (freq[char]) {
      freq[char]++
    } else{
      freq[char] = 1
    }
  });

  let freqValues = Object.values(freq).filter(num => num !== modeOfArr(Object.values(freq)))

  if (freqValues.length > 1) {
    result = 'NO' 
  } else {
    result = 'YES';
  }
  console.log(result);
  return result;
};

isValid('aabbcd'); // NO
isValid('aabbccddeefghi'); // NO
isValid('abcdefghhgfedecba'); // YES
isValid('a'); // YES
isValid('aaaabbcc'); // NO