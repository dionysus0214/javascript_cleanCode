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