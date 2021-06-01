//타이머 함수
// setTimeout(함수, 시간) : 일정시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
//clearTimeout(): 설정된 Timeout 함수를 종료
//clearInterval(): 설정된 Interval 함수를 종료

setTimeout(function(){
  console.log('Heropy!')
}, 3000)

const timer = setTimeout(()=>{
  console.log('heropy!')
},3000);

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
});


const timerInterval = setInterval(()=>{
  console.log('heropy!')
},3000);

const h1ElInterval = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timerInterval)
});
