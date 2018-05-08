// Roman Numeral Converter
// https://codepen.io/danomanion/pen/goxojr?editors=0012

function convertToRoman(num) {
  var romanNumeral = ["M", "CM","D", "CD", "C","XC","L","XL","X","IX","V","IV","I"],
      latinNumbers = [1000, 900, 500, 400, 100, 90,  50, 40,  10,  9,  5,  4,   1],
      romanTxt = "";

  for (var i = 0; i < latinNumbers.length; i++) {
    while(num >= latinNumbers[i]) {
      romanTxt = romanTxt + romanNumeral[i];
      num = num - latinNumbers[i];
    }
  }

  return romanTxt;
}
console.log(convertToRoman(36));
