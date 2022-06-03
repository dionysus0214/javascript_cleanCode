const price = [1000, 2000, 3000, 4000];

const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => price > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  // let temp = [];
  // for (let i = 0; i < priceList.length; i++) {
  //   if (priceList[i] > 1000) {
  //     temp.push(priceList[i] + '원');
  //   }
  // }
  // return priceList;
  return priceList
    .filter(isOverOneThousand) // filter로 원하는 조건에 맞는 배열 리스트 만들고
    .sort(ascendingList) // sort 정렬
    .map(suffixWon); // map 배열 요소들로 다시 정리
}
const result = getWonPrice(price); // ['1000원', '2000원', '3000원', '4000원']

// map vs forEach
// 리턴값 다름(map은 새로운 배열을 만들고 forEach는 매 요소마다 함수를 실행시킴)
