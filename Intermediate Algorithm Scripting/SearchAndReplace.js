// Search and Replace
// Challenge: https://www.freecodecamp.org/challenges/search-and-replace
// Codepen.io:

function myReplace(str, before, after) {
  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
