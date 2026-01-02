## Git & Basic Javascript Key Takeaways

### Git Undo

Undo actions: có 3 loại có thể undo

- **Thay đổi commit message**: `git commit --amend -m "New commit message"`

- **Thay đổi file từ vùng staging về working directory**: `git restore --staged <file>`

- Nếu restore toàn bộ file đã staged: `git restore --staged .`

- **Uncommit changes (reset commit but keep changes in working directory)**: `git reset HEAD~1` -> sẽ đưa commit cuối cùng về trạng thái unstaged changes.

- Nếu có nhiều commit muốn uncommit: `git reset HEAD~n` (với n là số commit muốn undo), nhưng commit đầu tiên sẽ không thể reset được.

> - Use `git status` to see the current state of the working directory and staging area.
> - Use `git log` to view the commit history.

### Branching

Git sử dụng branching để quản lý các tính năng mới, sửa lỗi, hoặc thử nghiệm mà không ảnh hưởng đến mã nguồn chính. Sau khi hoàn thành, các thay đổi có thể được hợp nhất (merged) trở lại nhánh chính.

- **Xem tất cả các nhánh trong repository. Dấu sao (\*) chỉ ra mình đang đứng nhánh nào hiện tại** : `git branch`

- **Tạo một nhánh mới**: `git branch <branch-name>`

- **Chuyển đổi sang nhánh khác**: `git checkout <branch-name>`

- **Vừa Tạo và chuyển sang nhánh mới**: `git checkout -b <branch-name>`

- **Xoá nhánh**: `git branch -D <branch-name>`

### Git Ignore File

- Tạo file `.gitignore` trong thư mục gốc của repository.
- Thêm các mẫu tên file hoặc thư mục mà bạn muốn Git bỏ qua vào file `.gitignore`.
- Ví dụ nội dung file `.gitignore`:
  ```
  # Bỏ qua tất cả các file .log
    -> *.log
  # Bỏ qua thư mục node_modules
    -> node_modules/
  # Bỏ qua file config.env
    -> config.env
  ```
- Dùng `git status` để kiểm tra xem các file/thư mục đã được bỏ qua chưa.

---

### Kiến thức bổ sung: Checkout về 1 commit cụ thể

- Dùng `git log` để lấy mã hash của commit mà bạn muốn checkout về.
- Sử dụng lệnh `git checkout <commit-hash>` để chuyển về commit đó.
- Lưu ý: Khi checkout về một commit cụ thể, bạn sẽ ở trạng thái "detached HEAD", có nghĩa là bạn không ở trên bất kỳ nhánh nào. Nếu bạn muốn tạo một nhánh mới từ commit này, bạn có thể sử dụng lệnh `git checkout -b <new-branch-name>`.

---

### Basic Javascript

- Conventions:

  - **snake_case**
  - **kebab-case** cho tên file, package và module.
  - **camelCase** cho tên biến và hàm.
  - **PascalCase** cho tên class.

- console.log() with backticks `` ` `` and `"` for string interpolation:

  ```javascript
  const name = "Alice";
  console.log(`Hello, ${name}!`);
  console.log("Hello, " + name + "!");
  console.log("Hello, ", name, "!");
  ```

- Object: đối tượng dùng để lưu trữ tập hợp các giá trị dưới dạng cặp key-value (thuộc tính - giá trị).

- Cú pháp:

```javascript
// Khai báo object
const person = {
  name: "Minh",
  age: 30,
  class: {
    name: "C0123",
    year: 2023,
  },
};
// Truy cập thuộc tính
console.log(person.name); // Minh
console.log(person.class.year); // 2023
console.log(person["age"]); // 30
console.log(person["class"]["name"]); // C0123
// Thêm thuộc tính mới
person.email = "minh@example.com";
console.log(person.email); // minh@example.com
// Xoá thuộc tính
delete person.age;
console.log(person.age); // undefined
```

- Array: mảng dùng để lưu trữ tập hợp các giá trị theo thứ tự.
- Cú pháp:

```javascript
// Khai báo mảng
const fruits = ["apple", "banana", "cherry"];
// Truy cập độ dài mảng
console.log(fruits.length); // 3
// Truy cập phần tử
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry
// Thêm phần tử
fruits.push("date");
console.log(fruits); // ["apple", "banana", "cherry", "date"]
// Xoá phần tử
fruits.pop("date");
console.log(fruits); // ["apple", "banana", "cherry"]
```

- Function: hàm dùng để đóng gói một đoạn mã có thể tái sử dụng.
- Cú pháp:

```javascript
// Khai báo hàm
function <functionName>(parameters) {
  // body
  return value; // optional
}
// Gọi hàm
<functionName>(arguments);
```

- Ví dụ:

```javascript
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
function countBeforeHello(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  sayHello("Alice");
}
countBeforeHello(10);
```

- Ví dụ về hàm tính tổng hai số:

```javascript
function sum(a, b) {
  return a + b;
}
const result = sum(5, 10);
console.log(result); // 15
console.log(sum(20, 30)); // 50
```

- getMax(a, b): hàm trả về số lớn hơn trong hai số a và b.

```javascript
function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(getMax(10, 20)); // 20
console.log(getMax(30, 15)); // 30
```

---

### Kiến thức bổ sung: Object với const

- Khi khai báo một object với từ khoá `const`, bạn không thể gán lại toàn bộ object đó, nhưng bạn vẫn có thể thay đổi các thuộc tính bên trong object.

```javascript
const person = {
  name: "Minh",
  age: 30,
};
person.age = 31; // Hợp lệ: thay đổi thuộc tính bên trong object
console.log(person.age); // 31
person = { name: "An", age: 25 }; // Lỗi: không thể gán lại toàn bộ object
```

### Kiến thức bổ sung: Thêm thuộc tính động cho Object

- Bạn có thể thêm thuộc tính cho một object một cách động bằng cách sử dụng dấu ngoặc vuông `[]` với tên thuộc tính được lưu trong một biến.

```javascript
let bike = {
  brand: "Yamaha",
  model: "YZF-R3",
};
bike.color = "Blue"; // Thêm thuộc tính color
bike["year"] = 2020; // Thêm thuộc tính year

console.log(bike);
// Kết quả: { brand: 'Yamaha', model: 'YZF-R3', color: 'Blue', year: 2020 }
```

### Kiến thức bổ sung: Xoá thuộc tính động cho Object

- Bạn có thể xoá thuộc tính của một object một cách động bằng cách sử dụng từ khoá `delete` cùng với dấu ngoặc vuông `[]` và tên thuộc tính được lưu trong một biến.

```javascript
let bike = {
  brand: "Yamaha",
  model: "YZF-R3",
  color: "Blue",
  year: 2020,
};
delete bike["color"]; // Xoá thuộc tính color
delete bike.year; // Xoá thuộc tính year
console.log(bike);
// Kết quả: { brand: 'Yamaha', model: 'YZF-R3' }
```
