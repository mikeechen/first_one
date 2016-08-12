 // var i=1;
// while (i<=10) {
//   console.log(i*i);
//   i++;
// }

// do {
//   console.log(i*i);
//   i++;
// } while (i<10);

var arr=[1, 2, 3, 4];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  arr[i]=arr[i]+1;
}
console.log(arr);

var i=1;
while (i<=10) {
  console.log(i, 11-i);
  i++;
}

function foo(arr){
  arr[0]=1;
}

var arr=[];
foo(arr);
console.log(arr);
