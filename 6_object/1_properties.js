// shorthand properties
// before
const firstName = 'jieun';
const lastName = 'kim';
const person = {
  firstName: 'jieun',
	lastName: 'kim',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
};
// after: key와 value가 동일한 형태, concise method 적용
const firstName2 = 'jieun';
const lastName2 = 'kim';
const person2 = {
  firstName2,
	lastName2,
	getFullName() {
		return this.firstName2 + ' ' + this.lastName2;
	}
};

// hasOwnProperty
const child = {
  name: 'dudu',
};
child.hasOwnProperty('name'); // true
child.hasOwnProperty('age'); // false

const foo = {
  hasOwnProperty: function () {
    return 'hasOwnProperty';
  },
  bar: 'string',
};
foo.hasOwnProperty('bar') // hasOwnProperty
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

// before: 모델에 쉽게 접근 가능함
const model = {
  isLogin: false,
  isValidToken: false,
};
function login() {
  model.isLogin = true;
  model.isValidToken = true;
}
function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}
someElement.addEventListener('click', login);
// after: 예측 가능한 코드 가능
const model2 = {
  isLogin: false,
  isValidToken: false,
};
function setLogin(bool) { // model에 대신 접근
  model.isLogin = bool;
}
function setValidToken(bool) { // model에 대신 접근
  model.isValidToken = bool;
}
function login() { // model에 직접 접근 X  
  setLogin(true);
  setValidToken(true);
}
function logout() { // model에 직접 접근 X  
  setLogin(false);
  setValidToken(false);
}
someElement.addEventListener('click', login);