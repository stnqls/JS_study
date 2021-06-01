function sum(x,y){
  return x + y
}

const a = sum(1,3)
const b = sum(4,12)

console.log(a)
console.log(b)

// console.log(sum(1,2)) 함수의 호출 횟수를 최대한 줄이는게 좋다.

function fx(){
  console.log(arguments)
  return arguments[0] + arguments[1]
}
console.log(fx(7,3))