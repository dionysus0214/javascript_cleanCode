// before
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const ryan = new Person('ryan', 30, 'korea');
// after-1: 구조 분해 할당
function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location ?? 'iceland';
}
const muji = new Person({
  name: 'muji',
  age: 30,
});
// after-2: name은 필수임을 명시적으로 표시
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const apeachOptions = {
  age: 30,
  location: 'swiss',
}
const apeach = new Person('apeach', apeachOptions);