// prototype 조작 지양하기(빌트인 객체 건들지 않기)
// 직접 만들어서 모듈화한 후 npm 배포하면 JS prototype를 확장성있게 사용 가능

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  sayName() {
    return this.brand + '-' + this.name;
  }
}
const casper = new Car('캐스퍼', '현대');