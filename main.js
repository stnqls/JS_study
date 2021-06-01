//데이터 불변성
// 원시데이터 : String, Number, Boolean, undefined, null
let a = 1
let b = 4
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)

//참조형 데이터 : Object, Array ,Function
let x = {k : 1}
let y = {k : 1}
console.log(x, y, x === y)
x.k = 7
y = x
console.log(x, y, x === y)
let z = y
console.log(x, y, z, x === z)
x.k = 9
console.log(x, y, z, x === z)