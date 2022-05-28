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