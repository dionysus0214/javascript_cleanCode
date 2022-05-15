// === strict equality
// 동등 연산자를 사용하면 형변환(type casting) 발생
'1' == 1 // true
1 == true // true
'1' === 1 // false
1 === true // false
// eslint에서 eqeqeq 설정

// parseInt 사용 시 뒤에 10을 넣어줘야 10진수라고 인식 가능
parseInt('9.9999', 10) // 9

// 사용자가 '명시적인 형 변환(타입)'을 해줘야 문제가 생기지 않음