// 삼항연산자 condition ? true : false

const array =[];
/*
let text = '';
if (array.length ===0) {
  text = '배열이 비어있습니다.';
}else {
  text = '배열이 비어있지 않습니다.';
}
*/
let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
console.log(text);

const condition1 = false;
const condition2 = false;
const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'foo'; //중첩해서 사용할 경우,if문이 더 좋다.
console.log(value);