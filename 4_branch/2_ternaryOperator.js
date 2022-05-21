// 삼항 연사자를 사용할 경우 일관성이 중요
// 삼항 연산자는 값을 '반환'할 수 있을 때 사용하면 좋음
// 삼항 연산자는 3개의 피연산자를 필요로 함
// 조건 ? 참(식) : 거짓(식)
// 조건을 기준으로 참 혹은 거짓만 필요할 땐 truthy, falsy를 사용하는 것이 나음

// before
function example() {
  return condition1 ? value1
    : condition2 ? value2
      : condition3 ? value3
        : value4;
}
// after: 조건이 복잡한 경우 조건을 먼저 정리
function example() {
  const temp = condition1;
  switch (key) {
    case value:
      break;
    default:
      break;
  }
}

// before
const example = condition
  ? a === 0 ? 'zero' : 'positive'
  : 'negative';
// after: 사람을 위해 코드 쓰기(가독성)
const example = condition
  ? ((a === 0) ? 'zero' : 'positive')
  : 'negative';

// 삼항연산자는 분기로도 사용 가능(isLogin이 nullable한 경우도 고려)
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';
  return `안녕하세요 ${name}`;
}

// before
function alertMessage(isAdult) {
  isAdult
    ? alert('입장 가능')
    : alert('입장 불가');
}
// after: alert함수는 void를 반환(반환이 없음)
function alertMessage(isAdult) {
  if (isAdult) alert('입장 가능');
  else alert('입장 불가');
}