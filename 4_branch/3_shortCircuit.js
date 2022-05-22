// and
true && true && '도달 O' // 도달 O
true && false && '도달 X' // false

// or
false || false || '도달 O' // 도달 O
true || true || '도달 X' // true

// before
function fetchData() {
  if (state.data) {
    return state.data;
  } else {
    return 'Fetching...';
  }
}
// after
function fetchData() {
  // state.data가 true면 보여주고, false면 우항으로 넘어가서 'Fetching'이 문자열이라 truthy여서 true
  return state.data || 'Fetching...';
}

// before
function favoriteDog(someDog) {
  let favoriteDog;
  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = '냐옹';
  }
  return favoriteDog + '입니다';
}
// after
function favoriteDog(someDog) {
  return (someDog || '냐옹') + '입니다';
}

// before
function getActiveUserName(user, isLogin) {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return '이름없음';
      }
    }
  }
}
// after
function getActiveUserName(user, isLogin) {
  if (isLogin && user) {
    return user.name || '이름 없음';
  }
}