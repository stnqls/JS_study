// async / await

function sleep(ms) {
  return new Promise(resolve => 
    setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000);
  console.log('반갑습니다!');
  return true; // 함수의 결과는 promise를 반환하게 된다.
}

process().then(value => {
  console.log(value);
})
//결과 : 안녕하세요! 반갑습니다! true

async function makeError(){
  await sleep(1000);
  const error = new Error();
  error.name = 'make Error';
  throw error;
}

async function process2() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process2();