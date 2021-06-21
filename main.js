//배열 내장함수

const numbers = [10,20,30,40];

//slice 원본 배열을 바꾸지 않는다.
const sliced = numbers.slice(0,2);
console.log(sliced); // 10,20
console.log(numbers); // 10,20,30,40

// splice: 특정항목을 제거할때 사용한다. 원본이 변한다.
const index = numbers.indexOf(30);
numbers.splice(index,1);
console.log(numbers); // 10,20,40
numbers.splice(index,2);
console.log(numbers); // 10,20