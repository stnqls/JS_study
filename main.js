// 얕은 복사
 const user = {
   name : 'Heropy',
   age : 85,
   emails : ['thesecon@gmail.com']
 }
 const copyUser = {...user}
 console.log(copyUser === user)

 user.age = 22
 console.log('user',user)
 console.log('copyUser', copyUser)

 console.log('------')
 console.log('------')

 //갚은 복사
 user.emails.push('neo@zillinks.com')
 console.log(user.emails === copyUser.emails)
 console.log('user', user)
 console.log('copyUser', copyUser)