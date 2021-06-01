// JSON 자바스크립트의 객체 표기법

import myData from './myData.json'

console.log(myData)

const user = {
  name : 'HEROPY',
  age : 85,
  emails : [
    "thesecon@gmail.com",
    'neo@zillinks.com'
  ]
}
console.log('user',user)

const str = JSON.stringify(user) //JSON 포맷인 문자데이터로 변환해준다.
console.log('str',str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)