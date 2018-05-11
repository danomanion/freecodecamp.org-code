// Challenge: https://www.freecodecamp.org/challenges/boo-who
// Codepen.io: https://codepen.io/danomanion/pen/wjjmVp?editors=0012

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool === true || bool === false;
}

console.log(booWho(null)); // false
console.log(booWho(true)); // true
console.log(booWho(false)); // fasle
