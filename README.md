# 배열 내장함수 

## forEach
`forEach`는 for문과 마찬가지로 반복적인 기능을 수행할 때 사용한다.
```js
const array = [0,1,2,3,4,5,6,7,8,9];

array.forEach(function(element){
  console.log(element);
});
//화살표함수
array.forEach(element => console.log(element));
//결과 : 0 1 2 3 4 5 6 7 8 9
```
array 객체의 모든 요소들이 callback함수에 순서대로 호출된다.

---
## map
`map`은 배열 안의 각 원소를 변환 할 때 사용되며 새로운 배열이 만들어진다.
```js
const array = [1,2,3,4,5,6,7,8,9];
```
1. for문으로 사용하기
```js
const squared = [];
for (let i =0; i <array.length; i++) {
  squared.push(array[i] * array [i]);
}
console.log(squared);
```
2. forEach 사용하기
```js
const squared =[];
array.forEach (n => {
  squared.push(n * n);
});
console.log(squared);
```
3. map사용하기
```js
const square = n => n * n;
const squared = array.map(square);
// const squared = array.map(n => n * n);
console.log(squared);
```
결과 : [1, 4, 9, 16, 25, 36, 49, 64]
 
---
## indexOf
`indexOf`는 배열에서 지정된 요소를 찾을수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 `-1`을 반환한다.

```js
const beasts = ['ant', 'bison','camel','duck','bison'];
console.log(beasts.indexOf('bison')); // 1
const index = beasts.indexOf('ant');
console.log(index); //0
console.log(beasts.indexOf('bison',2))// 4 (start from index 2)
```
index값은 0부터 시작한다.

---
## findIndex
배열안에 있는 값이 객체이거나 또 다른 배열일경우 `findIndex`를 통해 배열의 첫 번째 요소에 대한 인덱스를 반환한다. 만족하는 요소가 없으면 `-1`을 반환한다. <br/>
> array.findIndex( callback ( element [, index [, array]]) [, thisArg] ) <br/>

`callback` : 3개의 인수를 취하여 배열의 각 값에 대해 실행할 함수 <br/>
`element` : 배열에서 처리중인 현재 요소 <br/>
`index` : 배열에서 처리중인 현재 요소의 인덱스 <br/>
`array` : findIndex함수가 호출된 배열 <br/>
`thisArg` : 선택사항, 콜백을 실행할 때 this로 사용할 객체

```js
const animals = [
  {
    id :1,
    name :'ant',
    age: 2
  },
  {
    id :2,
    name :'camel',
    age: 5
  },
  {
    id :3,
    name :'dog',
    age: 8
  },
  {
    id :4,
    name :'cat',
    age: 3
  },
]
const index = animals.findIndex(animal => animal.id === 3);
console.log(index);
// 결과 : 2
```
---
## find
`find` 함수는 `findIndex`와 비슷하지만, 인덱스 번호가아닌 첫 번째 요소의 값을 반환한다.
```js
const animals = [
  {
    id :1,
    name :'ant',
    age: 2
  },
  {
    id :2,
    name :'camel',
    age: 5
  },
  {
    id :3,
    name :'dog',
    age: 8
  },
  {
    id :4,
    name :'cat',
    age: 3
  },
]
const index = animals.find(animal => animal.id === 3);
console.log(index);
// 결과 : {id : 3, name : 'dog', age : 8}
```
---
## filter
`filter` 주어진 함수의 테스트(조건)를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// 결과 : Array ["exuberant", "destruction", "present"]
```
---
## splice
`splice`는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

- 제거하지 않고 2번 인덱스에 'drum'추가
```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2, 0, 'drum');
// 결과 : myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"]
```
- 3번 인덱스에서 한 개 요소 제거
```js
const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);
// 결과 : myFish = ["angel", "clown", "drum", "sturgeon"]
```
- 0번 인덱스에서 두 개 요소 제거하고 'parrot', 'anemone','blue'추가
```js
const myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
const removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// 결과 : myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
```
---
## slice
`slice`는 `splice`와 비슷하지만, 원본 배열은 바뀌지 않는다.
```js
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)
// 결과 : citrus = ['Orange','Lemon']
```
---
## shift 와 pop
`shift`는 배열에서 **첫 번째** 요소를 제거하고, 제거된 요소를 반환한다. (원본 배열이 변한다.)<br/>
빈 배열의 경우 `undefined`를 반환한다.
```js
const array = [1, 2, 3];
const firstElement = array.shift();

console.log(array);
// 결과 : Array [2, 3]
console.log(firstElement);
// 결과 : 1
```
`pop`은 배열에서 **마지막** 요소를 제거하고 그 요소를 반환한다.<br/>
빈 배열의 경우 `undefined`를 반환한다.
```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// 결과 : "tomato"
console.log(plants);
// 결과 : Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants);
// 결과 : Array ["broccoli", "cauliflower", "cabbage"]
```
---
## unshift
`unshift`는 `shift`의 반대로 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 배열을 반환한다.
```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// 결과 : 5
console.log(array1);
// 결과 : Array [4, 5, 1, 2, 3]

```
---
## concat
`concat`은 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다. (여러개의 배열을 하나로 합쳐준다.)<br/>
원본배열은 바뀌지 않는다.
```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// 결과 : Array ["a", "b", "c", "d", "e", "f"]
```
---
## join
`join`은 배열 안의 모든 요소를 연결해 하나의 문자욜로 만들어준다.
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// 결과 : "Fire,Air,Water"
console.log(elements.join(''));
// 결과 : "FireAirWater"
console.log(elements.join('-'));
// 결과 : "Fire-Air-Water"
```
---
## reduce
`reduce`는 배열의 각 요소에 대해 주어진 리듀서함수를 실행하고, 하나의 결과값을 반환한다. <br/>
리듀서 함수는 `누산기(acc)`, `현재 값(cur)`, `현재 인덱스(idx)`, `원본 배열(src)` 4개의 인자를 가진다.


