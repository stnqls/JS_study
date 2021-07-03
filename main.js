// spread연산자
//기존 객체를 복사하고 추가적인 값을 입력할때 사용한다.

const slime = {
  name: '슬라임'
}

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
}

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals, '비둘기'] // = animals.concat('비둘기');와 같다.

console.log(animals); //개, 고양이, 참새
console.log(anotherAnimals); // 개, 고양이, 참새, 비둘기

const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // 1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5