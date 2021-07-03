// rest연산자
//객체와 함수의 파라미터로 사용할 수 있다.

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest} = purpleCuteSlime;
console.log(color); //purple
console.log(rest); // name: 슬라임, attribute: cute

const { attribute, ...slime } = rest;
console.log(slime); // name: 슬라임

//배열에서 사용하기
//배열에서의 rest는 맨 마지막에 사용한다.

const numbers = [0,1,2,3,4,5,6];

const [one, ...rest2] = numbers;
console.log(one); //0
console.log(rest2); // 1,2,3,4,5,6

//함수 파라미터에서 사용하기

function sum (...rest3) {
 return rest3.reduce((acc, current) => acc+current,0);
}
console.log(sum(1,2,3,4,5,6,7,8)); //36

//함수 인자에서 사용하기

function mul(...rest4) {
  return rest4.reduce((acc, current) => acc*current,1);
}
const numbers2 = [1,2,3,4,5,6,7,8];
console.log(mul(...numbers2)); //40320