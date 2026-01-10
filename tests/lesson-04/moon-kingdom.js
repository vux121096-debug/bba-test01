// Bai 1:
/*
Tạo hàm createCharacters:
- Khai báo mảng các object: characters có các thuộc tính: name, level, health.
- Sử dụng hàm map để tạo ra mảng mới: characterPowerUp:
  - Thuộc tính name: UPPERCASE của mảng gốc
  - level: x2 của level gốc
  - health: x3 của health gốc
- Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là "possibleWinners"
*/

function createCharacters() {
  let characters = [
    { name: "Mario 1", level: 30, health: 450 },
    { name: "Mario 2", level: 20, health: 250 },
    { name: "Mario 3", level: 35, health: 300 },
    { name: "Mario 4", level: 15, health: 330 },
  ];
  let characterPowerUp = characters.map((el) => ({
    newName: el.name.toUpperCase(),
    newLevel: el.level * 2,
    newHealth: el.health * 3,
  }));
  let possibleWinners = characterPowerUp.filter((el) => el.newHealth > 1000);
  return possibleWinners;
}
console.log(createCharacters());

// Bài 2:
/*
Tạo hàm printLeaderboard:
- Nhận vào tham số: players là mảng có object: [{name: "Mario",score: 1000},..]
- Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp
- In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1,2,3, hãy thêm huy chương phía trước (gold, silver,bronze)
*/

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
];
function createLeaderboard(players) {
  // 1. Sắp xếp mảng theo score giảm dần
  players.sort((a, b) => b.score - a.score);
  // 2. Mảng huy chương cho 3 vị trí đầu
  const medals = ["🥇", "🥈", "🥉"];

  // 3. Tạo mảng kết quả từng dòng xếp hạng
  const result = players.map((player, index) => {
    // Nếu trong top 3 thì thêm huy chương
    const medal = medals[index] ? medals[index] + " " : "";
    return `${medal}${index + 1}. ${player.name} - ${player.score} pts`;
  });

  // 4. Ghép mảng thành chuỗi, mỗi người 1 dòng
  return result;
}
console.log(createLeaderboard(players));
