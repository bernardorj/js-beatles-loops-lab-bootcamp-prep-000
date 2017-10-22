function theBeatlesPlay(musicians, instruments){
  var array = {};
  let i = 0;

  for (i=0;i<musicians.length;i++){
    if (i===0){
      var array = [musicians[i] + " plays " + instruments[i]];
    } else {
      array = [...array, musicians[i] + " plays " + instruments[i]];
    }
  }
  return array;
}

function johnLennonFacts(facts){
  let i = 0;
  while (facts.length !== undefined){
    facts = [...facts[i] + "!!!"];
    i++;
  }
  return facts;
}
