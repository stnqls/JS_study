//배열 내장함수
// map
const array = [1,2,3,4,5,6,7,8];

//const squared = [];

// 반복문으로 사용한 방법
// for (let i =0; i < array.length; i++){
//   squared.push(array[i] * array[i]);
// }

// forEach 사용하기
// array.forEach(n => {
//   squared.push(n*n);
// })

const square = n => n*n;
const squared = array.map(square);

console.log(squared);

const items = [
  {
    id :1,
    text: 'hello'
  },
  {
    id :2,
    text: 'bye'
  }
];

const texts = items.map(item => item.text);
console.log(texts);