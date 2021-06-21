//배열 내장함수

const numbers = [10,20,30,40];
 
//shift : 원본을 변화시키며, 첫번째 원소를 추출한다.
const value = numbers.shift();
console.log(value); //10 

//pop : 원본을 변화시키며, 마지막 원소를 추출한다.
const value2 = numbers.pop();
console.log(value2);

//unshift : 제일 첫번째 자리에 값을 추가한다.
numbers.unshift(5);
console.log(numbers); // 5,10,20,30,40

//push : 제일 마지막 자리에 값을 추가한다.
numbers.push(50);
console.log(numbers) // 10,20,30,40,50