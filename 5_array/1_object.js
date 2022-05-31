// javascript의 배열은 객체
const arr = [1, 2, 3];
const obj = {
  0: 1,
  1: 2,
  2: 3,
};

arr // [ 1, 2, 3 ]
obj // { 0: 1, 1: 2, 2: 3 }

const arr2 = '[1, 2, 3]';
Array.isArray(arr2); // false

// Array의 length는 배열의 길이라기 보단 배열의 마지막 인덱스에 가까움
// 배열의 길이를 보장하지 못함
const arr3 = [1, 2, 3];
arr3[3] = 4;
arr3.length // 4;
arr[9] = 10;
arr3 // [1, 2, 3, 4, , , , , , 10]
arr3.length // 10

function clearArray(array) {
  array.length = 0;
  return array;
}
const arr4 = [1, 2, 3];
clearArray(arr4); // []

// 배열 요소 접근
// before
const array = [1, 2, 3];
function operateTime(input, operators, is) {
  inputs[0].split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
  inputs[1].split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
}
// after: 구조 분해 할당 가능
function operateTime([firstInput, secondInput], operators, is) {
  firstInput.split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
  secondInput.split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
}

// before
function clickGroupButton() {
  const confirmButton = document.getElementsByTagName('button')[0];
  const cancleButton = document.getElementsByTagName('button')[1];
  const resetButton = document.getElementsByTagName('button')[2];
}
// after
function clickGroupButton() {
  const [confirmButton, cancleButton, resetButton] = document.getElementsByTagName('button');
}

// before
function formatDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0];
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
}
// after
function head(arr) {
  return arr[0] ?? ''
}
function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split('T'));
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
}

// 유사 배열 객체
const arrayLikeObject = {
  0: 'Hello',
  1: 'World',
  length: 2,
};
const arr = Array.from(arrayLikeObject); // ['Hello', 'World']
arr.length; // 2
Array.isArray(arr); // true
Array.isArray(arrayLikeObject); // false
