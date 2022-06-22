// pure function은 side effect를 일으키지 않는 것
// before: 비순수함수
let num1 = 10;
let nem2 = 20;

function impureSum1() {
  return num1 + num2;
}

function impureSum2(numNum) {
  return num1 + newNum;
}

impureSum1(); // 30
num1 = 30;
impureSum1(); // 50

impureSum2(30); // 40
num1 = 100;
impureSum2(30); // 130
// after
function pureSum(num1, num2) {
  return num1 + num2;
}
pureSum(10, 20); // 30

// closure
function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  }
}
const addOne = add(1);
const addTwo = add(2);
addOne(3); // 4

function add(num1) {
  return function (num2) {
    return function (calculateFn) {
      return calculateFn(num1, num2);
    }
  } 
}
function sum(num1, num2) {
  return num1 + num2;
}
function multiple(num1, num2) {
  return num1 * num2;
}
const add = add(5)(2);
const sumAdd = add(sum); // 7
const sumMultiple = add(multiple); // 10