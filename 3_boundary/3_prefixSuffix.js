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