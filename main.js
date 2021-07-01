// 프로토타입과 클래스
// 객체 생성

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;

 /* this.say= function () {
    console.log(this.sound);
  }*/
}

Animal.prototype.say = function() { //공유할수 있는 값이나 함수를 prototype으로 설정한다.
  console.log(this.sound);
}

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();