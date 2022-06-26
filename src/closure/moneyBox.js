function monexBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};

const myMoneyBox = monexBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(5);


const anaMoneyBox = monexBox();

anaMoneyBox(10);
anaMoneyBox(10);
anaMoneyBox(10);