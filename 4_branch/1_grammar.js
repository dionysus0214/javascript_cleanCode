// 문법이 중요한 이유: 프로그래밍 '언어'이기 때문(컴퓨터를 이해시켜야 함)
ReactDOM.render(
  <div id="msg">Hello World!</div>,
  mountNode
);
// babel을 만나면 아래처럼 객체로 transformed
// 객체로 바뀌는 것 내부에는 값과 식만 넣을 수 있음(if, for, switch 등 넣을 수 없음)
ReactDOM.render(React.createElement('div', {
  id: 'msg',
}, 'Hello World!'), mountNode);

// before
function ReactComponent() {
  return (
    <tbody>
      {(() => {
        const row = [];
        for (let i = 0; i < objectRows.length; i++) {
          rows.push(<ObjectRow key={i} data={objectRows[i]} />);
        }
        return rows;
      })()}
    </tbody>
  );
}
// after: map 활용
function ReactComponent() {
  return (
    <tbody>
      {objectRows.map((obj, i) => (
        <ObjectRow key={i} data={obj} />
      ))}
    </tbody>
  );
}

// before
function ReactComponent() {
  return (
    <div>
      {(() => {
        if (conditionOne) return <span>One</span>;
        if (conditionTwo) return <span>Two</span>;
        else conditionOne;
        return <span>Three</span>;
      })()}
    </div>
  );
}
// after
function ReactComponent() {
  return (
    <div>
      {conditionOne && <span>One</span>}
      {conditionTwo && <span>Two</span>}
      {!conditionTwo && <span>Three</span>}
    </div>
  );
}

// 드모르간의 법칙
// before
const isValidUser = false;
const isValidToken = false;
if (!(isValidToken && isValidUser)) {
  console.log('로그인 실패');
}
// after
if (!isValidToken || !isValidUser) {
  console.log('로그인 실패');
}