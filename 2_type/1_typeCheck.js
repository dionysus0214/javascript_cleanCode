// typeof는 피연산자를 판단한 후에 '문자열로 반환'
// typeof는 함수처럼 사용 가능
// primitive type은 typeof로 타입 검사가 용이하나 peference type은 typeof로 감별 어려움
const str = new String('문자열')
typeof '문자열' // 'string'
typeof 123 // 'number'
typeof Symbol() // 'symbol'
typeof str // 'object' 
typeof null // 'object' 언어적인 오류임

// javascript는 동적 언어기 때문에 타입도 동적으로 변함
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const rocco = new Person('chill', 90);
rocco instanceof Person // true

Object.prototype.toString.call(new String('')) // '[object String]'