// 전역 공간은 window, global로 나뉨
// 브라우저 환경에서는 window, nodeJS 환경에서는 global이 최상위
// 전역 공간은 어디서나 접근이 가능하기 때문에 런타임에서 분리되지 않는 위험 존재
// -> 전역 변수를 만들지 않거나, 지역 변수를 만들거나, window 또는 global 영역을 조작하지 않아야 함
// 전역 공간 사용을 줄이기 위해선 IIFE, module, closure, const, let 등을 사용하는 것이 좋음

// 임시 변수: scope 안에서 전역변수처럼 활용되는 것
// 임시 변수를 사용할 경우 명령형으로 가득한 로직이 나오고 어디서 어떻게 잘못되었는지 디버깅이 어렵다는 문제 발생
// 임시 변수가 함수 안에 생기면 CRUD 하고 싶은(추가적인 코드를 작성하고 싶은) 유혹이 발생
// 임시 변수를 제거하는 방법: 함수 나누기, 바로 return, 고차함수(map, reduce, filter) 사용, 선언형 코드로 변경
function getElements() {
  const result = {    
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };

  return result;
}

function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDay();
  const hour = targetDate.getHour();

  return {
    month: month >= 10 ? month : '0' + month,
    day: day >= 10 ? day : '0' + day,
    hour: hour >= 10 ? hour : '0' + hour,
  }
}

// 임시 변수를 줄이면 함수 추상화 가능
function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + '월 전',
    day: currentDateTime.day + '일 전',
    hour: currentDateTime.hour + '시 전',
  }
}