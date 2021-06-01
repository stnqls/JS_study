export default function (data){
  return Object.prototype.toString.call(data).slice(8, -1);
} //default일 경우 함수 이름이 없어도 된다.
//하나의 모듈에서  default는 한번만 내보낼 수 있다.