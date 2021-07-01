// 비구조화 할당 (구조분해)

//기본값 설정
const object = {a: 1};
const {a,b} = object;
console.log(a); //1
console.log(b); //undefined

function print({ a, b = 2}) {
  console.log(a); 
  console.log(b); 
}
print(object); // 1, 2

//이름바꾸기
const animal = {
  name :'멍멍이',
  type :'개'
};
const {name: nickname} = animal; // = const nickname = animal.name;
console.log(nickname);

//배열 비구조화 할당, 기본값 설정
const array = [1];
const [one, two = 2] = array; //const one = array[0]; const two = array[1];

console.log(one);
console.log(two);

//객체의 깊은 값꺼내기
const deepObject = {
  state: {
    information: {
      name: 'subin',
      languages: ['korean','english','chinese']
    }
  },
  value: 5
}

// 1. 비구조화 2번 사용하기
const {name, languages} = deepObject.state.information;
const {value} = deepObject;

//비구조화할당 1번 사용하기
const {
  state : {
    information :{
      name,
      languages : [first, second]
    }
  },
  value
} = deepObject;

const extracted = {
  name, // name : name, languages : languages 키의 값이 이미 있는경우 값을 생략해서 사용 가능하다.
  first,
  second,
  value
};
console.log(extracted);