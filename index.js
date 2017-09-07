function theBeatlesPlay(musicians, instruments) {
  var arrangments = [];
  for (i = 0; i < instruments.length; i++) {
    arrangments.push(`${musicians[i]} plays ${instruments[i]}.`)
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
