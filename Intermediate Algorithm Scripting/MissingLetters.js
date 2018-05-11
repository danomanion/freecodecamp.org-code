// Challenge: https://www.freecodecamp.org/challenges/missing-letters
// Codepen.io: https://codepen.io/danomanion/pen/8991b3f1de1d1bc2b2923f52a0fa54ff

function fearNotLetter(str) {
  var numbers = str.split("").map(function(letter) {
    return letter.charCodeAt();
  });

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i+1] - numbers[i] > 1 ) {
      return String.fromCharCode(numbers[i] + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("bcd")); // should return undefined.
console.log(fearNotLetter("yz")); // should return undefined. 
