function theBeatlesPlay(musicians, instruments) {
  var arrangments = [];
  for (z = 0; z < instruments.length; z++) {
    arrangments.push(`${musicians[z]} plays ${instruments[z]}`)
  }
  return arrangments
}

function johnLennonFacts(facts) {
  newFacts = [];
  for (i = 0; i < facts.length; i++) {
    newFacts.push(facts[i] + '!!!')
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var beatleLove = []
  do {
    beatleLove.push('I love the Beatles!')
    n++;
  } while (n < 15);
  return beatleLove
}
