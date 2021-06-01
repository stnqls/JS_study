const user = {
  name : 'HEROPY',
  age : 85,
  emails : [
    "thesecon@gmail.com",
    'neo@zillinks.com'
  ]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)

obj.age = 22
console.log(obj)

localStorage.setItem('user', JSON.stringify(obj))