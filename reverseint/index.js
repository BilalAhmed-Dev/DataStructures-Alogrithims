// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //solution 1
  //   let val = Math.sign(n);

  //   return val === 1
  //     ? parseInt(n.toString().split("").reverse().join(""))
  //     : val === 0
  //     ? 0
  //     : -parseInt(n.toString().split("").reverse().join(""));

  // solution 2
  let reversed = parseInt(n.toString().split("").reverse().join(""));
  return n < 0 ? reversed * -1 : n > 0 ? reversed : 0;
}

module.exports = reverseInt;
