- Biến đếm đúng:
  - Sử dụng biến đếm i (iterator), j, k, m, n để đếm số lần lặp trong các vòng lặp.
    - Tránh sử dụng các biến không liên quan hoặc không rõ ràng để đếm số lần lặp.
    - Ví dụ: Sử dụng i cho vòng lặp ngoài, j cho vòng lặp trong.
  - Đảm bảo rằng biến đếm được khởi tạo đúng giá trị ban đầu (thường là 0 hoặc 1 tùy thuộc vào ngôn ngữ lập trình).

---

### JavaScript

- Phạm vi biến:
  Scope xác đinh nơi mà biến có thể truy cập được trong mã nguồn.
  - Biến toàn cục (global scope): Có thể truy cập từ bất kỳ đâu trong mã nguồn.

```javascript
var globalVar = "I am global";
let globalLet = "I am also global";
function exampleFunction() {
  console.log(globalVar); // Có thể truy cập
  console.log(globalLet); // Có thể truy cập
}
exampleFunction();
console.log(globalVar); // Có thể truy cập
console.log(globalLet); // Có thể truy cập
```

- Biến cục bộ (local scope): Chỉ có thể truy cập trong phạm vi hàm (function scope) hoặc khối (block scope) mà nó được khai báo.

```javascript
function exampleFunction() {
  var localVar = "I am local";
  let localLet = "I am also local";
  console.log(localVar); // Có thể truy cập
  console.log(localLet); // Có thể truy cập
}
exampleFunction();
console.log(localVar); // Lỗi: Không thể truy cập
console.log(localLet); // Lỗi: Không thể truy cập
```

- Phạm vi khối (block scope): Biến được khai báo với `let` hoặc `const` chỉ có thể truy cập trong khối mà nó được khai báo (ví dụ: trong cặp dấu ngoặc nhọn `{}`).

```javascript
{
  let blockLet = "I am block scoped";
  const blockConst = "I am also block scoped";
  console.log(blockLet); // Có thể truy cập
  console.log(blockConst); // Có thể truy cập
}
console.log(blockLet); // Lỗi: Không thể truy cập
console.log(blockConst); // Lỗi: Không thể truy cập
```

- **Note**: Sử dụng từ khóa `let` và `const` để khai báo biến với phạm vi khối (block scope) thay vì `var` để tránh các vấn đề về hoisting và phạm vi không mong muốn.

- Hoisting:
  - Hoisting là cơ chế trong JavaScript mà các khai báo biến được di chuyển lên đầu phạm vi của chúng trước khi code được thực thi.

```javascript
console.log(x); // Kết quả: undefined (chứ không phải lỗi)
var x = 5;
```

**JavaScript - Câu điều kiện nâng cao với break và continue:**

- Sử dụng `break` để thoát khỏi vòng lặp khi một điều kiện nhất định được thỏa mãn.

```javascript
for (let i = 0; i < 10, i++) {
  if (i===5) {
    break; // Thoát khỏi vòng lặp khi i bằng 5
  }
}
// Output: 0, 1, 2, 3, 4
```

- Sử dụng `continue` để bỏ qua lần lặp hiện tại và chuyển sang lần lặp tiếp theo khi một điều kiện nhất định được thỏa mãn.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Bỏ qua lần lặp khi i bằng 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
```

- Ví dụ về việc sử dụng `break` và `continue` trong vòng lặp để kiểm soát luồng thực thi của chương trình.

```javascript
// Tìm số chẵn đầu tiên trong mảng và thoát vòng lặp khi tìm thấy
const numbers = [1, 3, 5, 7, 8, 9, 11];
let firstEven = null;
for (let num of numbers) {
  if (num % 2 === 0) {
    firstEven = num;
    break; // Thoát khỏi vòng lặp khi tìm thấy số chẵn đầu tiên
  }
}
console.log(firstEven); // Output: 8
```

```javascript
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua số chẵn
  }
  console.log(i); // Chỉ in ra số lẻ
}
// Output: 1, 3, 5, 7, 9
```

### JavaScript - Câu điều kiện nâng cao với if else:

- **Sử dụng cấu trúc `if...else` để kiểm tra nhiều điều kiện khác nhau và thực thi các khối code tương ứng.**

```javascript
let score = 75;
if (score >= 60) {
  console.log("Congratulations! You've passed");
} else {
  console.log("Try again next time.");
}
// Output: Congratulations! You've passed
```

- Ví dụ:

```javascript
let number = 15;
if (numnber % 2 === 0) {
  console.log("Favorite number is even");
} else {
  console.log("Favorite number is odd");
}
// Output: Favorite number is odd
```

**- Sử dụng `if...else...if` để kiểm tra nhiều điều kiện liên tiếp.**

```javascript
let score = 85;
if (score >= 90) {
  console.log("Master Grade");
} else if (score >= 80) {
  console.log("Excellent Grade");
} else if (score >= 70) {
  console.log("Good Grade");
} else if (score >= 60) {
  console.log("Average Grade");
} else {
  console.log("Fail Grade");
}
// Output: Excellent Grade
```

- Ví dụ:

```javascript
const today = 3;
if (today === 1) {
  console.log("Sunday");
} else if (today === 2) {
  console.log("Monday");
} else if (today === 3) {
  console.log("Tuesday");
} else if (today === 4) {
  console.log("Wednesday");
} else if (today === 5) {
  console.log("Thursday");
} else if (today === 6) {
  console.log("Friday");
} else if (today === 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day");
}
// Output: Tuesday
```

**- Ternary Operator (toán tử ba ngôi):**

- Cú pháp ngắn gọn của câu lệnh if...else.
- Cú pháp: `condition ? expressionIfTrue : expressionIfFalse`

```javascript
// cach dung if else
let age = 20;
let status = "";
if (age >= 18) {
  status = "Adult";
} else {
  status = "Child";
}
console.log(status); // Output: Adult

// cach dung toan tu ba ngoi
let age = 20;
let status = age >= 18 ? "Adult" : "Child";
console.log(status); // Output: Adult
```

- Ví dụ

```javascript
// Sử dụng toán tử ba ngôi để xác định ngày trong tuần, nên cẩn thận với việc lồng nhiều toán tử ba ngôi
const dayOfTheWeek =
  today === 1
    ? "Sunday"
    : today === 2
    ? "Monday"
    : today === 3
    ? "Tuesday"
    : today === 4
    ? "Wednesday"
    : today === 5
    ? "Thursday"
    : today === 6
    ? "Friday"
    : today === 7
    ? "Saturday"
    : "Invalid day";
console.log(dayOfTheWeek); // Output: Tuesday
```

**- Kết hợp nhiều điều kiện với toán tử logic (`&&`, `||`):**

```javascript
// Toán tử AND (&&)
let username = "admin";
let password = "123456";
if (username === "admin" && password === "123456") {
  console.log("Login successfully");
}

// Toán tử OR (||)
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
}

// Toán tử NOT (!)
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in to continue");
}
```

### Javascript - Vòng lặp nâng cao

**for...in loop:**

- Sử dụng để lặp qua các thuộc tính (properties) của một đối tượng (object).

```javascript
// Với Object
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 30
// city: New York
```

> Note : for...in khi dùng với array sẽ lặp qua các chỉ mục (index) của mảng, không phải giá trị của mảng.
> Nên sử dụng for...of để lặp qua giá trị của mảng.

```javascript
// Với Array khi dùng for...in -> in ra index
const array = ["Millie", "Emma", "Sophia"];
for (let index in array) {
  console.log(index);
}
// Output:
// 0
// 1
// 2
----
// Với Array khi dùng for...of -> in ra giá trị
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue
```

- Vi du ve for...of

```javascript
const array = [-1, 0, 3, 10, 20, 30];
for (let item of array) {
  if (item > 0) {
    console.log(item);
  }
}
// Output:
// 3
// 10
// 20
// 30
```

## JavaScript - util functions

- Tạo các hàm tiện ích (utility functions) để tái sử dụng mã nguồn và giảm thiểu sự lặp lại.
  - String ultility functions
  - Array ultility functions

**String utility functions:**

- trim(): Loại bỏ khoảng trắng ở đầu và cuối chuỗi.

```javascript
let str = "   Hello World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello World!"
// OR without creating new variable
console.log(str.trim()); // Output: "Hello World!"
```

- toUpperCase() và toLowerCase(): Chuyển đổi chuỗi thành chữ hoa hoặc chữ thường.

```javascript
let str = "Hello World!";
console.log(str.toUpperCase()); // Output: "HELLO WORLD!"
console.log(str.toLowerCase()); // Output: "hello world!"
```

- includes(): Kiểm tra xem chuỗi có chứa một chuỗi con hay không, trả về giá trị boolean.

```javascript
let str = "Hello World!";
console.log(str.includes("World")); // Output: true
console.log(str.includes("world")); // Output: false
```

- replace(): Thay thế một chuỗi con bằng một chuỗi khác.

```javascript
let str = "Hello World!";
let newStr = str.replace("World", "JavaScript");
console.log(newStr); // Output: "Hello JavaScript!"
```

- split(): Chia chuỗi thành một mảng dựa trên một ký tự phân tách.

```javascript
let str = "apple,banana,cherry";
let arrFruits = str.split(",");
console.log(arrFruits); // Output: ["apple", "banana", "cherry"]
```

- substring(): Trích xuất một phần của chuỗi dựa trên vị trí bắt đầu (start index) và kết thúc (end index).
  Nếu in ra chuỗi con từ vị trí start index đến end index (không bao gồm end index: n-1).
  Nếu không cung cấp end index, nó sẽ trích xuất đến hết chuỗi.

```javascript
let str = "Hello World!";
console.log(str.substring(0, 5)); // Lay vi tri bat dau tu 0 den 5 (khong bao gom 5) Output: "Hello"
console.log(str.substring(6)); // Lay tu vi tri 6 den het Output: "World!"
```

- indexOf(): Tìm vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi. Nếu không tìm thấy, trả về -1.

```javascript
let str = "Hello World!";
console.log(str.indexOf("World")); // Output: 6
console.log(str.indexOf("world")); // Output: -1
```

**Array utility functions:**

- map(): Tạo một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng ban đầu. Trả về mảng mới có cùng độ dài với mảng gốc.

```javascript

```

- filter(): Tạo một mảng mới chứa các phần tử thỏa mãn điều kiện được định nghĩa trong hàm callback. Trả về mảng mới có thể có độ dài khác với mảng gốc.

```javascript

```

- find(): Tìm phần tử đầu tiên trong mảng thoả mãn điều kiện. Trả về phần tử đó hoặc undefined nếu không tìm thấy.

```javascript

```

- reduce(): Duyệt qua tất cả các phần tử trong mảng và tích lũy giá trị duy nhất (số, chuỗi, object...) dựa trên hàm callback. Trả về giá trị tích lũy cuối cùng.

```javascript

```

- some(): Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện không. Trả về giá trị boolean.

```javascript

```

- every(): Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện không. Trả về giá trị boolean.

```javascript

```

- forEach(): Thực thi một hàm cho mỗi phần tử trong mảng. Không trả về giá trị.

```javascript

```

- sort(): Sắp xếp các phần tử trong mảng theo thứ tự tăng dần hoặc giảm dần dựa trên hàm so sánh.

```javascript

```

- push(): Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.

```javascript

```

- pop(): Loại bỏ phần tử cuối cùng khỏi mảng và trả về phần tử đó.

```javascript

```

- shift(): Loại bỏ phần tử đầu tiên khỏi mảng và trả về phần tử đó.

```javascript

```

- unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.

```javascript

```

- forEach(): Thực thi một hàm cho mỗi phần tử trong mảng. Không trả về giá trị.

