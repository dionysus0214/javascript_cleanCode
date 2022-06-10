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
