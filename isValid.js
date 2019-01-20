/**
 * 
 * valid if all characters of the string appear the same number of times
 * valid if he can remove just 1 character at 1 index in the string, 
    and the remaining characters will occur the same number of times
 *  
 */

Object.prototype.allZero = function() { 
  for (var i in this) {
    console.log('this[i]:', this[i])
    if (this[i] === 0) {
      return false;
    }
  }
  return true;
}

function isValid(s) {
  let sArr = s.split('');
  let sMap = {};
  let result = '';

  // Create the frequency map object out of the sArr variable
  sArr.forEach((char) => {
    if (sMap.hasOwnProperty(char)) {
      sMap[char]++
    } else {
      sMap[char] = 1;  
    }
  });
  // console.log('sMap object:', sMap); 

  // If the string is only 1 character long, it is a valid string
  if (s.length === 1) {
    result = 'YES';
    console.log(result);
    return result;
  }

  // 2 ways of making a string valid:
  // Remove all characters with the frequency of 2
  // Remove all characters with the frequency of 1
  for (char in sMap) {
    // console.log(`${char}: ${sMap[char]}`);
    if (sMap[char] === 2) {
      sMap[char] -= 2;
    }
    if (sMap[char] === 1) {
      sMap[char]--;
    }
  }
  // console.log('sMap after deleting 1\'s and 2\'s:', sMap);

  // Check if anything has a frequency
  for (let char in sMap) {
    if (sMap[char] !== 0) { 
      // console.log(sMap[char]);
      if ((sMap[char] - 1) % 2 === 0) {
        sMap[char]--;
        result = 'YES';
      } else {
        result = 'NO';
      }
    }
  }

  for (let char in sMap) {
    if(sMap[char] !== 0) {
      if (sMap[char] === 2) {
        result = 'YES';
      } else {
        result = 'NO';
      }
    }
  }
  console.log(sMap);
  console.log(result);
  // return result; 
} // End Function

isValid('aabbcd'); // NO
isValid('aabbccddeefghi'); // NO
isValid('abcdefghhgfedecba'); // YES
isValid('a'); // YES
isValid('aaaabbcc'); // NO