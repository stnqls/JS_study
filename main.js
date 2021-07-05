// promise all, promise race

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
}

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
}

const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
}

// all : 요소중 1개라도 오류가 발생하면 오류가 발생한다.
async function process (){
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
  // const dog = await getDog();
  // console.log(dog);
  // const rabbit = await getRabbit();
  // console.log(rabbit);
  // const turtle = await getTurtle();
  // console.log(turtle);
  
  //각 각의 객체 요소 꺼내기
  const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}
process();

// race : 가장 빨리 끝난 함수가 반환된다. 가장빨리 끝난 요소가 에러일 경우에만 판별이 가능하다.
async function process2 (){
  
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process2();