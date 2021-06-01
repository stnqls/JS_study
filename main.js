const heropy = {
  firstName : 'Heropy',
  lastName:'Park',
  getFullName: function (){
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy.getFullName())

const amy ={
  firstName: 'Amy',
  lastName : 'Clarke',
  getFullName: function (){
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())

const neo ={
  firstName: 'Neo',
  lastName : 'Smith',
  getFullName: function (){
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName())



// 클래스

function User(first, last) {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function (){
  return `${this.firstName} ${this.lastName}`
}

const subin = new User('subin','seon') //생성자 함수
const youngbin = new User('youngbin','seon')

console.log(subin.getFullName())
console.log(youngbin)