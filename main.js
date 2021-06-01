const userAge ={
  name : 'Heropy',
  age: 85
}

const userEmail = {
  name :'Heropy',
  email : 'thesecon@gmail.com'
}

const target = Object.assign({},userAge, userEmail) // 맨 앞에 빈 객체 데이터 {}를 입력할 경우 합쳐진 데이터가 새로운객체데이터를 만든다.
console.log(target)
console.log(userAge)
console.log(target === userAge) //참조형 : 객체, 배열, 함수

const a = {k : 123}
const b = {k : 123}
console.log(a === b) //다른 메모리를 참조 하고 있다.


const user = {
  name : 'SUBIN',
  age: 80,
  email : 'tn9612@naver.com'
}
const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)