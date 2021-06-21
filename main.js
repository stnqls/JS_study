//배열 내장함수
// for-each
const superheroes= ['아이언맨','캡틴아메리카','토르','닥터 스트레인지'];

// for반복문사용
// for (let i =0; i < superheroes.length ; i++) {
//   console.log(superheroes[i]);
// }

function print(hero) {
  console.log(hero);
}

superheroes.forEach(print);

// 더 간단하게 만들기
superheroes.forEach(function(hero) {
  console.log(hero);
});