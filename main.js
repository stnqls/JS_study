//ES6 Classes

const heropy = {
  name: 'Heropy',
  normal(){ // = normal : function (){}, funcion생략 가능.
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

heropy.normal()
heropy.arrow()



class User {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropys = new User('Heropy', 'Park')

console.log(heropys)