//전개 연산자

const fruits = ['Apple', 'Banana', 'Cherry','Orange']
console.log(fruits)
console.log(...fruits) //String 형태로 출력된다. = console.log('Apple','Banana','Cherry')

function toObject(a,b, ...c) {
  return {
    a: a, 
    b: b, 
    c: c
  }
}
console.log(toObject(...fruits)) //= console.log(toObject(fruits[0], fruits[1], fruits[2]))

// = const toObject= (a,b, ...c)=> {a,b,c}