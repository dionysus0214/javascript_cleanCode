// before
function getUserType(type) {
  if (type === 'ADMIN') {
    return '관리자';
  } else if (type === 'INSTRUCTOR') {
    return '강사';
  } else if (type === 'STUDENT') {
    return '학생';
  } else {
    return '해당 없음';
  }
}
// after-1: switch문으로 case 구분
function getUserType(type) {
  switch (key) {
    case 'ADMIN':
      return '관리자';
    case 'INSTRUCTOR':
      return '강사';
    case 'STUDENT':
      return '학생';
    default:
      return '해당 없음';
  }
}
// after-2: 분기문이 객체의 key와 value로 구성(BEST), 상수를 따로 관리할 때 용이
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '학생',
    UNDEFINED: '해당 없음',
  };
  return USER_TYPE[type] ?? USER_TYPE[UNDEFINED];
}
// afer-3: 내부에 지역변수를 만들지 않고 바로 객체를 return 가능
function getUserType(type) {
  return (
    {
      ADMIN: '관리자',
      INSTRUCTOR: '강사',
      STUDENT: '학생',
    }[type] ?? '해당 없음'
  );
}