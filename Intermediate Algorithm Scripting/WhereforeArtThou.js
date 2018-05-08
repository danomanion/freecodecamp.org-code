// Wherefore art thou
// Challenge: https://www.freecodecamp.org/challenges/wherefore-art-thou

function whatIsInAName(collection, source) {
  var arr = collection.filter(function(item) {
    for (let i in source) {
      if (source[i] != item[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
