// prefix로 use가 붙은 react 함수는 Hook의 기능을 함 ex) useState, useEffect, useContext 등
// jquery도 $를 prefix로 사용해 api에 접근 가능
// javascript에서는 private field를 # prefix로 사용 가능
function FactoryFunction(name) {
  this._name = name;
}

class FactoryFunction {
  #name = name;
}
// vue 등에서 컴포넌트 네이밍 시 일관된 prefix를 적용하길 추천 ex) AppButton.vue, AppTable.vue

// 변수명 작성 시 네트워크 상태를 suffix로 사용 가능
export const STARRED_REQUEST = 'STARRED_REQUEST';
export const STARRED_SUCCESS = 'STARRED_SUCCESS';
export const STARRED_FAILURE = 'STARRED_FAILURE';

// 매개변수의 순서가 경계
// 호출하는 함수의 네이밍과 인자 순서의 연관성을 고려해야
// 매개변수는 2개를 넘지 않는 것이 좋dma
// 2개를 넘을 경우: arguments parameter, rest parameter, 매개변수를 객체에 담아서 넘김, 랩핑하는 함수 사용
genRandomNum(1, 50);
getDates('2022-01-01', '2022-04-30');
shuffleArray(1, 5);
