console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');

// second
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 1000); // execute this code after 1000 ms
console.log('Third');


// fifth

setTimeout(() => console.log('one'), 1000);
setTimeout(() => console.log('Two'), 3000);
setTimeout(() => console.log('Three'), 5000);


setTimeout(() => console.log('one'), 1000);
setTimeout(() => console.log('two'), 5000);
setTimeout(() => console.log('three'), 3000)


funciton asyncForEach(){
  //
}
//  Output of the function below should be
// one
// three
//  1, 2, 3

console.log('one');
setTimeout(asyncForEach([1, 2, 3], (num) => console.log(num)))
console.log('three');