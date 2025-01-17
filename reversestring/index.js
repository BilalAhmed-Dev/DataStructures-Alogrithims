// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1
  //   return str.split("").reverse().join("");
  //   solution 2
  //   var reversed = "";
  //   for (let character of str) {
  //     reversed = character + reversed;
  //   }
  //   return reversed;

  //   Solution 3
  //   return [...str].reverse().join("");

  //   solution 4
  var reversedString = str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");

  return reversedString;
}

module.exports = reverse;
