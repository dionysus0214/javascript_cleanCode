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

// 전역 공간은 window, global로 나뉨
// 브라우저 환경에서는 window, nodeJS 환경에서는 global이 최상위
// 전역 공간은 어디서나 접근이 가능하기 때문에 런타임에서 분리되지 않는 위험 존재
// -> 전역 변수를 만들지 않거나, 지역 변수를 만들거나, window 또는 global 영역을 조작하지 않아야 함
// 전역 공간 사용을 줄이기 위해선 IIFE, module, closure, const, let 등을 사용하는 것이 좋음

// 임시 변수: scope 안에서 전역변수처럼 활용되는 것
// 임시 변수가 함수 안에 생기면 CRUD 하고 싶은 유혹이 발생
function getElements() {
  const result = {    
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };

  return result;
}