//비동기 처리
// Ajax Web API요청, 파일읽기, 암호화/복호화, 작업예약 에서 비동기를 사용한다.

//동기
function workSync() {
  const start = Date.now();
  for(let i = 0; i< 1000000000; i++) {

  }
  const end = Date.now();
  console.log(end-start + 'ms');
}

workSync();
console.log('다음작업')

//비동기
function workAsycn(callback) {
  setTimeout(() => {
    const start = Date.now();
    for(let i = 0; i< 1000000000; i++) {
  
    }
    const end = Date.now();
    console.log(end-start + 'ms');
    callback(end-start)
  },0)
}

console.log('작업시작!');
workAsycn((ms) => {
  console.log('작업이 끝났습니다.');
  console.log(ms + 'ms 걸렸습니다.');
});
console.log('다음작업!');
// 작업시작! 다음작업! 574ms 작업이 끝났습니다. 558ms걸렸습니다.