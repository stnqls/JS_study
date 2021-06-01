//this
//일반 함수는 호출 위치에 따라 this정의
//화살표 함수는 자신이 선언된 함수 범위에서 this정의

const heropy = {
  name: 'Heropy',
  normal: function(){
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

heropy.normal()
heropy.arrow()

const amy = {
  name : 'Amy',
  normal : heropy.normal,
  arrow : heropy.arrow
}
amy.normal()
amy.arrow()




function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const Heropy = new User('Heropy')

Heropy.normal()
Heropy.arrow()



const timer = {
  name : 'Heropy!!',
  timeout : function(){
    //setTimeout(함수, 시간)
    setTimeout( ()=>{
      console.log(this.name)
    },2000)
  }
}
timer.timeout()