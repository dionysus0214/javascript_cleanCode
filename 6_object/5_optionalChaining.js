// optional chaining(?.)
// ?. 왼쪽이 null, undefined면 undefined를 남겨줌
// 중첩된 object 자료에서 자료를 뽑을 시 reference error 없이 안전하게 뽑을 수 있음
// 중첩된 object가 아니라 그냥 object일 땐 굳이 ?.하지 않아도 undefined로 리턴함
let user = {
  data: {
    name: {
      firstName: 'je',
      // lastName: 'kim',
    },
  },
};
user.data?.name?.lastName; // undefined

// nullish coalescing 연산자(??)
// ?? 왼쪽이 undefined, null이면 오른쪽의 기본값을 보여주는 것
console.log(user.data?.name?.lastName ?? '로딩중'); // 로딩중

