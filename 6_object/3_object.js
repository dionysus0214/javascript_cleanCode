// before
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const ryan = new Person('ryan', 30, 'korea');
// after-1: 구조 분해 할당
function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location ?? 'iceland';
}
const muji = new Person({
  name: 'muji',
  age: 30,
});
// after-2: name은 필수임을 명시적으로 표시
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const apeachOptions = {
  age: 30,
  location: 'swiss',
}
const apeach = new Person('apeach', apeachOptions);

// Object.freeze
const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
});
STATUS.PENDING = 'P2';
console.log(STATUS.PENDING); // PENDING

Object.isFrozen(STATUS); // true

// Object.freeze는 깊은 복사에는 관여하지 못함
const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: {
    BLUE: 'BLUE',
    RED: 'RED',
  },
});
console.log(STATUS.OPTIONS); // false
//  depth가 들어가는 곳에서는 중첩 freeze 필요(lodash, 직접 유틸 함수 생성, typescript에서 readonly 사용)
const STATUS = deepfreeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: {
    BLUE: 'BLUE',
    RED: 'RED',
  },
});
function deepfreeze(targetObj) {
  // 1. 객체를 순회
  // 2. 값이 객체인지 확인
  // 3. 객체면 재귀, 그렇지 않으면 Object.freeze 사용
  return Object.freeze(targetObj);
}