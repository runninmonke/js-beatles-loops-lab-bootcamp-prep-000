function theBeatlesPlay(musicians, instruments) {
  var arrangments = [];
  for (i = 0; i < instruments.length; i++) {
    for (j = 0; j < musicians.length; j++) {
      arrangments.push(`${musicians[j]} plays ${instruments[i]}.`)
    }
  }
  return arrangments
}

function johnLennonFacts(facts) {
  newFacts = [];
  for (i = 0; i < facts.length) {
    newFacts.push(facts[i] + '!!!')
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  beatleLove = []
  do { 
    beatleLove.push('I love the Beatles!')
  } while (n < 15);
  return beatleLove
}

