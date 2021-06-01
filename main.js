// 산술연산자

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

//할당 형산자

let num = 2
//a= a + 1
num += 1
// += -= *= /= %=
console.log(num)

//비교 연산자

const a = 1
const b = 1
const c = 2
console.log("a==b는 ", a == b)
console.log("a!==b는 ", a !== b)
console.log("a==c는 ",a == c)
// <, >, >=, <=, ==, !==, 

function isEqual(x,y){
  return x == y
}
console.log(isEqual(1,1))
console.log(isEqual(2,'2'))

//논리 연산자

const x = 1==1
const y = 'ab' == 'ab'
let z = true

console.log(x)
console.log(y)
console.log(z)

console.log('&&: ',x && y && z) //and연산자
 z = false
 console.log('&&: ',x && y && z)
 console.log('||: ',x || y || z) //or연산자
 console.log('!: ',!x) //not연산자

 //삼항 연산자
 const num1 = 1<2

 if(num1) {
   console.log('참')
 }else {
   console.log('거짓')
 }

 console.log(a ? '참' : '거짓')