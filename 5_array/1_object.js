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