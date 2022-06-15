// parameter: formal parameter(형식을 갖춘 매개변수)
function axios(url) {
  // some code
}
// argument: actual parameter(실제로 사용되는 인자)
axios('http://naver.com');

// 복잡한 인자 관리하기
// before
function createCar(name, brand, color, type) {
  return {
    name,
    brand,
    color,
    type
  };
}
// after: 객체 구조 분해 할당을 통해 함수의 parameter를 받을 수 있음
function createCar({ name, brand, color, type }) {
  var name = options.name;
  var brand = options.brand;
  var color = options.color;
  var type = options.type;
  return {
    name,
    brand,
    color,
    type
  };
}