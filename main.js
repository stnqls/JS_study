const str = '0123'

console.log(str.length)
// = console.log('01 23'.length)

const str2 = 'Hello world!'

console.log(str2.indexOf('HEROPY') !== -1)

console.log(str2.slice(0,3))

console.log(str2.replace(' world!',''))

const str3 = 'stnqls3938@gmail.com'

console.log(str3.match(/.+(?=@)/)[0]) //정규표현식

const str4 = '    Hello world   '
console.log(str4.trim()) //공백 제거