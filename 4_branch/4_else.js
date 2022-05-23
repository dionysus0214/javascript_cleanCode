const x = 1;
// before:  else if는 파이프라인처럼 흐르는 개념이 아님
if (x >= 0) {
  console.log('x는 0과 같거나 크다'); // here
} else if (x > 0) {
  console.log('x는 0보다 크다');
}
// after:명확하게 if로 나누는 것이 좋음, else if문이 늘어질 경우는 switch가 나음
if (x >= 0) {
  console.log('x는 0과 같거나 크다'); // here
}
if (x > 0) {
  console.log('x는 0보다 크다');
}

// before
function getActiveUserName() {
  if (user.name) {
    return user.name;
  } else {
    return '이름 없음';
  }
}
// after
function getActiveUserName() {
  if (user.name) {
    return user.name;
  }
  return '이름 없음';
}