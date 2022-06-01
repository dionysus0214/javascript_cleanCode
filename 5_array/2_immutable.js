// 불변성을 지키는 법
// 1. 배열 복사const originArray = ['12', '34', '56'];
const newArray = [...originArray];

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);
originArray // [0, '12', '34', '56', 10, 11, 12]
newArray // ['12', '34', '56']

// 2. 새로운 배열을 반환하는 메서드를 활용
// filter, map, slice 메서드는 새로운 배열 객체를 반환(원본 배열은 바뀌지 않음)
function copyArray(originArray) {
  return newArray;
}
const originArray2 = ['12', '34', '56'];
const newArray2 = copyArray(originArray2);

originArray2.push(10);
originArray2.push(11);
originArray2.push(12);
originArray2.unshift(0);
originArray2 // [0, '12', '34', '56', 10, 11, 12]
newArray2 // ['12', '34', '56']