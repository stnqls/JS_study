const user = {
  name : 'HEROPY',
  age : 85,
  emails : [
    "thesecon@gmail.com",
    'neo@zillinks.com'
  ]
}

// localStorage.setItem('user',user) 문자데이터로 변환해서 저장해야한다.
localStorage.setItem('user',JSON.stringify(user))

console.log(JSON.parse(localStorage.getItem('user')))

// localStorage.removeItem('user')
