//배열 내장함수
// concat : 기존의 배열을 변화시키지 않고 새로운 배열을 생성한다.

const arr = [1,2,3];
const arr2 = [4,5,6];

const concated = arr.concat(arr2);
console.log(concated);

// join : 배열안의 값을 문자열로 바꿔준다.
const array = [1,2,3,4,5];
console.log(array.join()); //1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')) //1, 2, 3, 4, 5