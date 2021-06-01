const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2) //소수점 이하 자릿수
console.log(str)
console.log(typeof str)

const integer = parseInt(str) //문자 데이터를 정수로 변환
const float = parseFloat(str) //문자 데이터를 실수로 변환
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)


// Math

console.log('abs: ', Math.abs(-12))

console.log('min: ', Math.min(2,8))

console.log('max: ', Math.max(2,8))

console.log('ceil: ', Math.ceil(3.14)) //정수단위로 올림

console.log('floor: ', Math.floor(3.14))

console.log('round: ', Math.round(3.14)) //반올림

console.log('random: ', Math.random()) 