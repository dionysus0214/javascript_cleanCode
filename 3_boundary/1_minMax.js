// 경계 다루기(min-max)
// 최소값, 최대값 포함 여부를 정의하는 것이 중요
// 혹은 네이밍에 최소값, 최대값 포함 여부를 정의
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(MIN_NUMBER, MAX_NUMBER); // 이렇게 하면 포함 여부 모호

const MAX_AGE = 20;
function isAdult(age) {
  if (age >= 20) {
    // ...
  }
}

const MIN_IN_NUMBER = 1; // 이하
const MAX_IN_NUMBER = 50; // 이상
const MIN_NUMBER_LIMIT = 1; // 미만
const MAX_NUMBER_LIMIT = 50; // 초과