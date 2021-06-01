//콜백 Callback
//함수의 인수로 사용되는 함수

//setTimeout(함수,시간) 에서 사용된 함수를 콜백이라고 부른다.

function timeout(cb){
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  },3000)
}
timeout(() => {
  console.log('Done!')
})
