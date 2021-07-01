//단축평가 논리 계산법

true && true; //true
true && false; //false
true || false; //true
true || true; // true

const dog = {
  name: '멍멍이'
};

function getName(animal) {
 /*
  if (animal) {
    return animal.name;
  } 
  return undefined;
  */
 return animal && animal.name;
}

const name = getName(dog);
console.log(name);

console.log(true && 'hello'); //hello가 출력된다.
console.log(false && 'hello') //flase
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); //null
console.log(undefined && 'hello')//undefined


const namelessDog = {
  name : ''
};

function getName2(animal) {
  const name = animal && animal.name;
  /*
  if (!name) {
    return '이름이 없는 동물입니다.';
  }
  return name;
  */
  return name || '이름이 없는 동물입니다.'
}

const name2 = getName2(namelessDog);
console.log(name2);

//값이 존재하지 않을때 대신해서 사용할때 유용하다.
console.log(false || 'hello'); //hello
console.log('' || 'hello'); //hello
console.log(null || 'hello'); //null
console.log(undefined || 'hello'); //hello

console.log(1 || 'hello'); //1
console.log(true || 'hello'); //true
