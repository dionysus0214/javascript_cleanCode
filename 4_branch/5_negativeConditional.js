// 부정 조건문을 지양해야 하는 이유
// 1. 생각을 여러 번 해야 함
// 2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행
// 부정 조건문은 early return, 유효성 검증(form validation) 시 사용하면 좋음

const isCondition = true;
const isNotCondition = false;

// 숫자일때만
function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number';
}

if (isNumber(3)) {
	console.log('숫자입니다'); // 숫자입니다
}