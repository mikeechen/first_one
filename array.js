var myArray=['P', 'Pe', 'Pet', 'Pete', 'Peter'];
// console.log(myArray);
console.log(myArray);

var books = ['JavaScript: The Good Parts', 'Eloquent JS', 'You Don\'t Know JS'];
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

function arrmult(){
  var arr=[1,2,3,4];
  for (let i=0; i<arr.length; i++){
    arr[i]=arr[i]*2;
  }
  console.log(arr);
}

function adele(hel){
  var lines = [
    'it\'s me.',
    'can you hear me?',
    'from the other side',
    'from the outside'
    ];
    for (let i=0; i<lines.length; i++){
      if (i>1){
        console.log(hel+' '+lines[i]);
      } else{
      console.log(hel+', '+lines[i]);
      }
    }
}

// arrmult();
// adele('Hello');
var myArray=[];
myArray.push('PeterthePan');
console.log((((((((((((((myArray))))))))))))));
myArray.push('PeterthePan');
console.log(myArray);
myArray.pop();
console.log(myArray);
