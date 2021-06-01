class Vehicle {
  constructor(name, wheel){
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel){
    super(name,wheel)
  }
}
const MyBicycle = new Bicycle('자전거',2)
console.log(MyBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const MyCar = new Car('자동차',4,true)
const daughterCar = new Car ('포르쉐',4, false)
console.log(MyCar)
console.log(daughterCar)