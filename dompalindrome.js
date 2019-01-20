const substrCount = (n, s) => {
  // all individual letters count once
  let count = n;
  const chars = s.split('');

  if (count === 1) {
    return 1;
  }

  for (let i = 0; i < n; i++) {
    let currentChar = chars[i];
    // check for case 2
    if (i > 0 && chars[i - 1] !== currentChar && chars[i - 1] === chars[i + 1]) {
      let j = i - 1, 
          k = i + 1, 
          initial = chars[j];
      while (j >= 0 && k < n && chars[j] === chars[k] && chars[j] === initial) {
        count++; 
        j--; 
        k++;
      }
    // check for case 1
    } else {
      let k = i + 1;
      while (k < n) {
        if (chars[k] === currentChar) {
          count++;
        } else {
          break;
        }
        k++;
      }
    }
  }
  return count;
};