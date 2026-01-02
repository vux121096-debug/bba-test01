# Git & Basic Javascript

### 1. Version Control System

> Hệ thống kiểm soát, quản lý các phiên bản

Việc quản lý các phiên bản sẽ giúp:

- Xem lại lịch sử thay đổi (thời gian, thay đổi gì, ai là người thay đổi..)
- Quay trở về bản thay đổi trước đó

Hệ thống quản lý phiên bản có 3 loại chính:

- **Local**: lưu ở máy cá nhân
- **Centralize**: lưu ở 1 máy chủ tập trung
- **Distributed**: lưu ở nhiều máy khác nhau

> Hiện nay, Git là DVCS (Distributed Version Control System) phổ biến nhất thế giới

### 2. Git

> Git có 3 trạng thái

- **Work Directory**: lưu các file mới, file có thay đổi
- **Staging**: các file đưa vào vùng chuẩn bị commit (tạo ra các version)
- **Repository**: các commit (versions)

**1. Khởi tạo repo (Làm 1 lần)**

- `git init`

**2. Tạo repo mới và liên kết tới repo local (Làm 1 lần)**

- `git remote add origin <url>`

**3. Add file có thay đổi**

- Add các file có thay đổi: `git add file1.txt file2.txt`
- Add tất cả file: `git add .`

  - Nếu file nằm trong 1 folder

    `git add folder/file3.txt`

  - Hoặc\
    `cd folder`\
    `git add file3.txt`

  - Nếu muốn cd ra ngoài cùng: `cd ..`

**4. Commit file**

- `git commit -m"first commit"`

**5. Push Code**

- `git push origin main`

> Tóm lại:
>
> > Nếu có file thay đổi, sẽ cần add lại file, và commit lại để push code lên repo.
> > Nếu tạo repo mới, thì cần git remote, add, commit

**6. Giới thiệu về Git - Cấu hình**

#### Git Config

`git config --global user.name`\
`git config --global user.email`

Hai lệnh này để đặt mặc định username và email cho toàn bộ các repo trên máy tính

Nếu cấu hình riêng\
`git init `\
`git config user.name`\
`git config user.email`

### 3. Basic JavaScript

#### Node JS

Khi chạy trên máy tính, chúng ta không có **browser enginne**, chúng ta sẽ cần công cụ khác để chạy, đó là **Node Js**

`node <relative path>`

- vd: `node tests/lesson-2/00-key-takeaways.md`

#### Javascript Comment

- Dùng comment 1 dòng: `//`
- Dùng comment nhiều dòng: `/* */`

#### Biến và Hằng

```javascript
var myName = "Minh";
let isLovePlaywright = true; //false

console.log(myName);
console.log(isLovePlaywright);
```

`var` & `let` giống nhau, nhưng var không an toàn bằng let -> luôn luôn dùng let

`const` hằng số

##### Khi nào dùng biến và khi nào dùng hằng???

- Dùng biến khi muốn thay đổi giá trị
- Mặc định dùng hằng, để code chặt chẽ hơn.

### JavaScript - Data Type

- Number: số nguyên, số thực, vô hạn, không phải là số (NaN)
- String: chuỗi
- Boolean: true/ false - giá trị logic
  > Note: dùng `typeof` để biết kiểu dữ liệu gì

```javascript
const age = 30;
const name = "Minh";
const isStudent = false;
console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
```

### JavaScript - Toán tử so sánh

- So sánh bằng: `==`(loose equality), `===` (strict equality)
  - e.g:
  ```javascript
  const no1 = "50";
  const no2 = 50;
  console.log(no1 == no2); // true - ép kiểu dữ liệu
  console.log(no1 === no2); // false - phải đúng kiểu dữ liệu
  ```
- So sánh không bằng: `!=`, `!==`
- So sánh lớn/ nhỏ hơn: `>`, `>=`, `<=`, `<`

### JavaScript - Toán tử Logic

- Toán tử logic để kết hợp nhiều điều kiện và trả về boolean
- `&&` AND - true nếu tất cả vế của mệnh đề đúng
- `||` OR - true nếu 1 trong các vế của mệnh đề đúng

### JavaScript - Toán tử 1 ngôi

- Prefix: toán tử nằm ở phía trước - tăng trước trả về sau
  - `++x`, `--x`
  - e.g:
  ```javascript
  let a = 10;
  b = ++a;
  console.log(b); // tăng a từ 10 -> 11, gán b = 11
  ```
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
  - `x++`, `x--`
  - e.g:
  ```javascript
  let c = 10;
  d = a++;
  console.log(d); // trả về d = 10, tăng d lên bằng 11
  ```

### JavaScript - Toán tử toán học họhọc

> +, -, \*, /

### JavaScript - Câu Điều Kiện

Dùng để kiểm tra 1 đoạn logic trước khi chạy. Nếu điều đúng thì mới chạy
Trong Js, có các loại câu điều kiện

- if
- if...else
- if...else if...else
- switch...case

Cú pháp:

```javascript
if (<condition>) {
  // code
}
```

e.g:

```javascript
let hour = 8;
if (hour <= 11 && hour >= 6) {
  console.log("Good morning");
}
if (hour > 11) {
  console.log("Good afternoon");
}
// Good morning
```

e.g: Kết hợp nhiều điều kiện - nested condition

```javascript
let hour1 = 8;
if (hour1 <= 11) {
  //Nested
  if (hour1 >= 6) {
    console.log("Good morning");
  }
}
```

### JavaScript - Vòng lặp

Dùng để lặp lại 1 đoạn logic
Có thể lặp 1 số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng

Trong Js, có các loại vòng lặp:

- for (i)
- for (of)
- forEach
- for (in)
- while
- do...while

Cú pháp:

```javascript
for (khởi_tạo; điều_kiện; cập_nhật) {
  // khối lệnh được lặp
}
```

e.g:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("xin chào");
} // in ra 5 dòng xin chào từ 0 đến 4
// i = 0,1,2,3,4
```

- **Khởi tạo**: chạy 1 lần đầu (thường là let i = 0)

- **Điều kiện**: còn đúng thì vòng lặp còn chạy, sai thì dừng

- **Cập nhật**: chạy sau mỗi vòng (thường là i++), để thay đổi giá trị của biến đếm.
