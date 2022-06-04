// before: unsyntactic break error
const orders = ['first', 'second', 'third'];

orders.forEach(function (order) {
  if (order === 'second') {
    break;
  }
  console.log(order);
});
// after: try ~ catch로 감싸기, for in 또는 for of 문 사용
// Array.prototype.every(), Array.prototype.some(), Array.prototype.find()를 사용해 조기에 반복 종료 가능 