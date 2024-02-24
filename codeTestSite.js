// this file is added as a play test area for JS code functionality

// const string = 'hello';
// const pad = string.padStart(6, ' ');
// console.log(pad(string, 24));

// const number = 123;
// const pad = String(number).padStart(5, ' ');
const pad = (string, size) => string.padStart(size, ' ');
const str = '123456785435'
console.log(pad(str, 24));

console.log('2'.padStart(2, 0))

const array = [1, 2, 3, 4, 5]
const result = array.splice(3, 1)
console.log(result, array)
