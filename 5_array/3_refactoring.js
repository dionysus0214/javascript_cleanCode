const price = [1000, 2000, 3000, 4000];
const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => price > 1000
function getWonPrice(priceList) {
  // let temp = [];
  // for (let i = 0; i < priceList.length; i++) {
  //   if (priceList[i] > 1000) {
  //     temp.push(priceList[i] + '원');
  //   }
  // }
  // return priceList;
  const isOverList = priceList.filter(isOverOneThousand);
  return isOverList.map(suffixWon);
}
const result = getWonPrice(price);
