//

function pairElement(sequence) {
  var pairs = { T: 'A', A: 'T', G: 'C', C: 'G' };
  var arr = sequence.toUpperCase().split("");

  return arr.map(function(nucleobase) {
    return [nucleobase, pairs[nucleobase]];
  });
}

console.log(pairElement("GCG"));
