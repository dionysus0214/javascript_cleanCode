// var: 함수 스코프
// let, const: 블록 스코프, TDZ -> 안전한 코드 작성

// var를 사용하면 재할당, 재선언이 가능하여 위험
var name = '이름';
var name = '이름2';
console.log(name); // 이름2

var global = '전역';
if (global === '전역') {
  var global = '지역';
  console.log(global); // 지역
}
console.log(global); // 지역

// let, const는 재선언이 안되므로 안전하게 변수 사용 가능
// let은 먼저 선언하고 재할당이 가능
let age;
age = 21;
age = 22;;

let global = '전역';
if (global === '전역') {
  let global = '지역';
  console.log(global); // 지역
}
console.log(global); // 전역

// const는 변수를 한 번 만들면 재할당할 수 없음
const city; // wrong
city = 'busan';
// let보단 const를 쓰는 게 좋은 이유: const는 재할당만 금지되므로 객체, 배열 같은 레퍼런스 객체를 조작할 땐 이상 없음