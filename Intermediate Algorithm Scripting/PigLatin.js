// Pig Latin
// Challenge: https://www.freecodecamp.org/challenges/pig-latin
// Codepen.io: https://codepen.io/danomanion/pen/67a66ff4327225110e09a564176d00e3

function translatePigLatin(str) {
  var vowelLocation = Number(firstVowelSpot(str));

  if (vowelLocation == 0) {
    return str + "way";
  } else {
    return str.substr(vowelLocation, str.length) + str.substr(0, vowelLocation) + "ay";
  }
}

// Should return a number.
function firstVowelSpot(str) {
  var VOWLES = ["a","e","i","o","u"];
  var strToArr = str.split("");

  for (var i in strToArr) {
    for (var v in VOWLES) {
      if (VOWLES[v] == strToArr[i]) {
        return i;
      }
    }
  }
}

console.log(translatePigLatin("consonant"));
