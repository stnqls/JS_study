//Hoisting
//함수 또는 변수(var)가 선언시 최 상단으로 끌어 올려지는 현상
//const나 let은 호이스팅이 발생하지 않는다.
// 호이스팅은 최대한 피해서 작성해야한다.

myFunction();

function myFunction (){
  console.log('hello world');
}