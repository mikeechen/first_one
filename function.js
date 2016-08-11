
function yell() {
  var x='hello!'
  for (var i=0; i<10; i++){
    if (i === 9){
      console.log(x.toUpperCase());
    } else {
      console.log(x);
    }
  }
}

function capWord(word) {
  console.log(word);
  var upper=word[0].toUpperCase();
  word=upper+word.slice(1);
  console.log(word);
}

function daysInMonth(month){
  var mon=[['January', 31],
       ['February',28],
       ['March',   31],
       ['April',   30],
       ['May',     31],
       ['June',    30],
       ['July',    31],
       ['August',  31],
       ['September',30],
       ['October', 31],
       ['November', 30],
       ['December',31]];
       console.log(mon[0][-1]);
  // for (var i = 0; i < mon.length; i++) {
  //   if (month.toLowerCase()===mon[i].toLowerCase()) {
  //     var days=mon[i][0];
  //   }
  // }
  // for ( i = 1; i <= days ; i++) {
  //   console.log(month+' '+i);
  // }
}

function average(arr){
  var tot=0;
  var avg;
  for (let i=0; i<arr.length; i++){
    tot=tot+arr[i];
  }
  avg=tot/arr.length;
  console.log(avg);
  return avg;
}


daysInMonth('January');
