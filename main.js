//즉시 실행 함수 IIFE

const a = 7
function double(){
  console.log(a * 2)
}
double();

//첫번째 방법
(
  function () {
    console.log(a * 2)
  })();
// 두번째 방법  
(
  function () {
    console.log(a * 2)
  }());

