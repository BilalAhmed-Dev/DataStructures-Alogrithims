// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // solution 1
  //   let charMap = {};
  //   let maxChar = "";
  //   let maxVal = 0;
  //   for (let char of str) {
  //     if (charMap[char]) {
  //       charMap[char]++;
  //     } else {
  //       charMap[char] = 1;
  //     }
  //   }
  //   for (let char in charMap) {
  //     if (charMap[char] > maxVal) {
  //       maxChar = char;
  //       maxVal = charMap[char];
  //     }
  //   }
  //   return maxChar;
  // solution 2
  //   let charMap = {};
  //   for (let char of str) {
  //     if (charMap[char]) {
  //       charMap[char]++;
  //     } else {
  //       charMap[char] = 1;
  //     }
  //   }
  //   console.log(charMap);
  //   return Object.keys(charMap).reduce((a, b) => {
  //     return charMap[a] > charMap[b] ? a : b;
  //   });
}

module.exports = maxChar;
