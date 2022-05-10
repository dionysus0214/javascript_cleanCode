// hoisting: 런타임 시 선언과 할당이 분리됨(선언을 최상단으로 끌어올림)
// var 사용 시 hoisting 위험
// 함수도 hoisting됨 -> const 사용 후 함수를 할당하는 것이 좋음
// 익명함수를 하나 만들어 변수에 할당하는 식
console.log(sum()); // cannot access 'sum' before initiation 에러
const sum = function () {
  return 1 + 2;
}