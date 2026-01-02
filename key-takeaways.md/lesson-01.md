# Mark Down Syntax

### 1. Bold & Italic & Strikethrough

**bold** or **bold** \
_italic_ or _italic_\
~~strikethrough~~

### 2. Code in line

`code in line`

### 3. Unordered List & Ordered List

- Note 1
  - A
  - B

1. Step 1
2. Step 2
   - abc
   - def

### 4. Hyperlink

[link](https://www.google.com/)

![Hinh anh tu link]()

![Hinh anh tu folder]()

## 5. Code Block

```typescript
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});
```

### 6. Block quotes

> Quote: use for Note
>
> > Nested block quotes
> >
> > > Nested block quotes

### 7. Horizontal line

---

or

---

or

---

### 8. Table

| Test ID | Test Description | Test Steps | Expectation                  | Status |
| ------- | ---------------- | ---------- | ---------------------------- | ------ |
| TC_000  | Verify login     | Step       | Login successfully           | Pass   |
| TC_001. | Verify logout    | Step       | Logout successfully          | Pass   |
| TC_002. | Verify Forgot PW | Step       | Change password successfully | Fail   |

### 9. Todo list / Checkbox (Github support)

[ ] Checkbox
[x] Checked
