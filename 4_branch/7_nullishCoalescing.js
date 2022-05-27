function createElement(type, height, width) {
  const element = document.createElement(type || 'div');

  element.style.height = (height || 100) + 'px';
  element.style.width = (width || 100) + 'px';

  return element;
}

// after: null 병합 연산자를 사용(null, undefined일 때)
function createElement(type, height, width) {
  const element = document.createElement(type ?? 'div');

  element.style.height = (height ?? 100) + 'px';
  element.style.width = (width ?? 100) + 'px';

  return element;
}

// null 병합 연산자는 우선순위가 낮으므로 명시적으로 괄호로 표시해주는 것이 좋음
(null || undefined) ?? 'foo' // foo