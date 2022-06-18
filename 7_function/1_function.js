// 함수
function func() {
  return this;
}

// 객체의 메서드
const obj = {
  method() {
    return this;
  }
}

// 생성자 함수
function Func() {
  return this;
}

// 함수는 1급 객체: 변수나 데이터에 담길 수 있음, 매개변수로 전달 가능(콜백 함수), 함수가 함수를 반환(고차 함수)
func(); // 전역변수를 바라봄

// 메서드: 객체에 의존성이 있는 함수
obj.method() // 호출된 객체를 바라봄

// 생성자 함수: 인스턴스를 생성
const instance = new Func(); // 생성될 인스턴스를 가리킴

// default value
// before
function createCarousel(options) {
  options = options || {};
  var margin = options.margin || 0;
  var center = options.center || false;
  var navElement = options.navElement || 'div';
  return {
    margin,
    center,
    navElement,
  }
}
createCarousel(); // { margin: 0, center: false, navElement: 'div }
// after: default paremeter 사용
function createCarousel({
  margin = 0,
  center = false,
  navElement = 'div'
} = {}) {
  return {
    margin,
    center,
    navElement,
  }
}
createCarousel(); // { margin: 0, center: false, navElement: 'div }

// void, return 등을 활용해 함수가 반환하는 것이 있는지를 체크해야 함
// javascript는 return이 없는 경우 undefined를 return
// before
function handleClick() {
  return setState(false); // setState()는 void 함수로 함수의 반환이 존재하지 않음
}
function showAlert(message) {
  return alert(message); // alert()는 void 함수로 함수의 반환이 존재하지 않음
}
// after
function handleClick() {
  setState(false);
}
function showAlert(message) {
  alert(message);
}
function testVoidFunc() {
  const arr = [1, 2];
  return arr.push(10);
}
testVoidFunc(); // 3