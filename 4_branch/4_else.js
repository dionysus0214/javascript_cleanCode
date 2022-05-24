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

// before
function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();
        return '로그인 성공';
      }
    } else {
      throw new Error('No Token');
    }
  }
}
// after: early return으로 함수를 미리 종료하고 사고하기 편한 방향으로 바꿈
function login() {
  refreshToken();
  return '로그인 성공';
}
function loginService(isLogin, user) {
  if (isLogin) {
    return;
  }
  if (!checkToken()) {
    throw new Error('No Token');
  }
  if (!user.nickName) {
    return registerUser(user);
  }
  login();
}

// before
function today(condition, weather, isJob) {
  if (condition === 'GOOD') {
    study();
    exercise();
    if (weather === 'GOOD') {
      laundry();
      sweep();
    }
    if (isJob === 'GOOD') {
      ealrySleep();
    }
  }
}
// after
function today(condition, weather, isJob) {
  if (condition !== 'GOOD') {
    return;
  }
  study();
  exercise();
  if (weather === 'GOOD') {
    laundry();
    sweep();
  }
  if (isJob === 'GOOD') {
    ealrySleep();
  }
}