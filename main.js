const numbers = [1,2,3,4]
const fruits =['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) //2
console.log(fruits[2]) //Cherry

//length

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)
console.log([].length)

//concat

console.log(numbers.concat(fruits)) //원본에는 영향 x

//forEach

fruits.forEach(function (element, index, array) {
  console.log(element,index,array)
})

//map

const a = fruits.forEach((fruit,index) => {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map(function (fruit, i){ //반환된 값을 모아서 새로운 배열로 만들어 준다.
  return {
    id: i,
    name: fruit
  }
})
console.log(b)

//화살표 함수로 표현
// const b = fruits.map((fruit, i)=>({
//   id: i,
//   name: fruit
// }))
// console.log(b)


//filter

const a2 = numbers.map(number => {
  return number < 3
})
console.log(a2)

const b2 = numbers.filter(number => {
  return number < 3
})
console.log(b2)
console.log(numbers)


//find(), findIndex

const a3 = fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(a3)

const a4 = fruits.findIndex(fruit => {
  return /^C/.test(fruit)
})
console.log(a4)


//includes

const a5 = numbers.includes(3)
console.log(a5)

const a6 = fruits.includes('HEROPY')
console.log(a6);

//push , unshift 원본 수정됨 주의

numbers.push(5)//뒤에 데이터 추가
console.log(numbers)

numbers.unshift(0) //앞에 데이터 추가
console.log(numbers)

//reverse 원본 수정됨 주의

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)


//splice() 원본 수정됨 주의

numbers.reverse();fruits.reverse();

numbers.splice(2,1, 999)
console.log(numbers)

fruits.splice(2,0,'Orange')
console.log(fruits)