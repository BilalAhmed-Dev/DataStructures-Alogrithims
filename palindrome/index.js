// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // solution 1
  let original = str;
  let palindrome = str.split("").reverse().join("");
  return original === palindrome;

  // solution 2
  //   let originalString = str;
  //   let reversedString = str.split("").reduce((rev, char) => {
  //     return char + rev;
  //   }, "");
  //   return originalString === reversedString;

  // solution 3
  //   return str.split("").every((currentval, i) => {
  //     return currentval === str[str.length - 1 - i];
  //   });
}

module.exports = palindrome;
