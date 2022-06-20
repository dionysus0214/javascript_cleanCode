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

// arrow function
// 화살표 함수는 lexical scope를 가지므로 this 조작법 주의해야함
const user = {
  name: 'dudu',
  getName: () => {
    return this.name;
  },
  newFriends: (...rest) => {
    const newFriendList = Array.from(arguments); // 화살표 함수에서는 arguments, call, apply, bind 등 사용 불가(rest parameter 사용)
    return this.name + newFriendList;
  },
};
user.getName(); // undefined
// 화살표 함수로 만든 함수는 생성자로 사용 불가
const Person = (name, city) => {
  this.name = name;
  this.city = city;
};
const person = new Person('juju', 'seoul'); // Person is not a constructor
// generator 함수에서 yield 사용 시 화살표 함수 지원 불가

// callback function
// before
function register() {
  const isConfirm = confirm(
    '회원가입 성공',
  );
  if (isConfirm) {
    redirectUserInfoPage();
  }
}

function login() {
  const isConfirm = confirm(
    '로그인 성공',
  );
  if (isConfirm) {
    redirectIndexPage();
  }
}
// after
function confirmModal(message, cbFunc) {
  const isConfirm = confirm(message);
  if (isConfirm && cbFunc) {
    cbFunc();
  }
}

function register() {
  confirmModal('회원가입 성공', redirectUserInfoPage);
}

function login() {
  confirmModal('로그인 성공', redirectIndexPage);
}