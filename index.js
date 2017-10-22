function theBeatlesPlay(musicians, instruments){
  var array = {};
  let i = 0;

  for (i=0;i<musicians.length;i++){
    if (i===0){
      var array = [musicians[i] + " plays " + instruments[i] +" ."];
    } else {
      array = [...array, musicians[i] + " plays " + instruments[i] +" ."];
    }
  }
  return array;
}
