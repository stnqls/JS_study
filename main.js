// 변수 유효범위
// var let const

function scope(){
  if(true){
    const a = 123
    console.log(a)
  }
}
scope()
// let, const는 블록 레벨을 갖는다.
// var는 함수범위의 유효범위를 갖는다.