// 프로토타입과 클래스
// ES6 class

class Animal {
  constructor(type, name, sound) { //constructor생성자라는 의미를 가지고 있다.
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say(){ //자동으로 prototype으로 변환해 준다.
    console.log(this.sound);
  }
}

// const dog = new Animal('개','멍멍이','멍멍');
// const cat = new Animal('고양이','야옹이','야옹');

class Dog extends Animal {
  constructor(name,sound) {
    super('개',name,sound);
  }
}
class Cat extends Animal {
  constructor(name,sound) {
    super('고양이',name,sound);
  }
}

const dog = new Dog('멍멍이','멍멍');
const cat = new Cat('야옹이','야옹');
dog.say();
cat.say();