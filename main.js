// 함수 파라미터

function calculateCircleArea(r) {
  const radius = r || 1; //r이 정해지지 않았을 경우 기본값으로 1을 사용한다.
  return Math.PI *radius * radius;
}
// 1. 파라미터 기본값으로 설정하기
function calculateCircleArea(r = 1) {
  return Math.PI *r * r;
}
// 2. 화살표 함수로 만들기
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area);