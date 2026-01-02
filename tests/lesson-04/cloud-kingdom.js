const playerName = "Mario";
const currentLives = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;

function findAverage(a, b, c) {
  let totalCoins = a + b + c;
  let average = totalCoins / 3;
  if (totalCoins % 3 !== 0) {
    console.log(`So coin du khi chia cho 3 la: ${totalCoins % 3} `);
  }
  return average;
}
let avg = findAverage(level1, level2, level3);
console.log(`Gia tri trung binh coin cua 3 level la:`, avg);
