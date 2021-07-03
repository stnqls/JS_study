//scope
// 변수, 함수를 사용할때 해당하는 범위
//1. global : 전역범위, 코드의 모든 범위에서 사용가능하다.
//2. function : 코드의 특정 함수 내부에서 사용가능하다.
//3. block : if문 for문에 쓰이는 '{}' 안에서 사용 가능하다.

const value = 'hello!'; //global

function myFunction(){ 
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction(){
  console.log('otherFunction: ');
  const value = 'bye!'; //function
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);

function yourFunction(){
  const value = 'bye!';
if(true) {
  const value = 'world';
  console.log('block scope : ');
  console.log(value); //block
}
console.log('function scope: ');
console.log(value);
}

yourFunction();
console.log('global scope: ');
console.log(value); // hello!
console.log(anotherValue); // error