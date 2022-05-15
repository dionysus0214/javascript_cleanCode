// 사용자가 '명시적인 형 변환(타입)'을 해줘야 문제가 생기지 않음
// === strict equality
// 동등 연산자를 사용하면 형변환(type casting) 발생
'1' == 1 // true
1 == true // true
'1' === 1 // false
1 === true // false
// eslint에서 eqeqeq 설정

// parseInt 사용 시 뒤에 10을 넣어줘야 10진수라고 인식 가능
parseInt('9.9999', 10) // 9

Number.isInteger // 자바스크립트에서 숫자를 검사할 때 정수인지 여부 판단
// isNaN은 is not a number(숫자가 아니다)
isNaN(123) // false, 숫자가 숫자가 아닌 게 아니다(= 숫자가 맞다)
isNaN(123 + 'hi') // true
Number.isNaN(123 + 'hi') // false
// isNaN은 느슨한 검사, Number.isNaN은 엄격한 검사