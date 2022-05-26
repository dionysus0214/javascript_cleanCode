function sum(x, y) {
  x = x || 1;
  y = y || 2;

  return x + y;
}
sum(10, 20);

function createElement(type, height, width) {
  const element = document.createElement(type || 'div');

  element.style.height = height || 100;
  element.style.width = width || 100;

  return element;
}
createElement();

function sateParseInt(number, radix) {
  return parseInt(number, radix || 10);
}