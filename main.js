//배열 내장함수
// reduce : 배열안에 있는 모든 값을 이용해서 연산을 한다.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current , 0);
console.log(sum); //15

const avg = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length -1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
},0 ); //0은 accumulator의 기본값이다.
console.log(avg); //3

const alphabets = ['a','a','a','b','c','c','d','e'];
const counts = alphabets.reduce((acc,current) => {
  if (acc[current]) {
    acc[current] += 1;
  }else {
    acc[current] =1;
  }
  return acc;
},{})
console.log(counts); //{a: 3, b: 1, c: 2, d: 1, e: 1}