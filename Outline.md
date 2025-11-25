# Slide 1: Giới thiệu

- TOPIC Gitflow
- Họ tên, background
- Lý do: Dành cho các bạn năm 2, năm 3 chưa có nhiều kỹ năng git trong làm việc nhóm
- Mục tiêu: Tập trung chính vào gitflow chứ không đào sâu, mổ xẻ về các câu lệnh git

# Slide 2: Vấn đề thực tế - Tại sao cần Gitflow?

- Hỏi một số đứa năm 2 năm 3 xem tình trạng làm việc nhóm của chúng nó như thế nào? Có giống mình hồi ý không
- Tất cả một nhóm chỉ dùng một nhánh để phát triển dẫn đến
  - Xung đột code giữa các thành viên
  - Không biết ai đã làm những gì phần nào
  - Khó rollback khi có bug

# Slide 3: Gitflow

- Gitflow là gì: quy trình làm việc nhóm với Git, rồi phải đọc thêm chỗ này xem nó giải quyết các vấn đề gì

# Slide 4: Các môi trường làm việc của Git

- Sử dụng một hình ảnh để minh họa, có mũi tên chỉ các luồng di chuyển
  - Working Directory - thư mục đang làm việc
  - Staging Area - khu vực chuẩn bị
  - Repository - kho lưu trữ (local/remote)
- Hiểu được 3 môi trường này sẽ giúp hiểu rõ hơn các thao tác với Git

# Slide 5: Các lệnh Git cơ bản cần nắm khi làm việc nhóm với Git

- Khởi tạo & Cấu hình:
  - git init, git clone
  - git config
- Làm việc hằng ngày
  - git add, git commit
  - git push, git pull
  - git squash
  - git log
- Quản lý nhánh
  - git branch, git checkout
  - git merge
- Quản lý trạng thái
  - git status
  - git stash

# Slide 6: Cấu trúc các nhánh chính trong 1 dự án phần mềm

Show ra cái hình rồi giải thích
Giải thích ngắn gọn từng nhánh:

- main: Code production (đang chạy thật)
- develop: Code mới nhất đang phát triển
- feature: Làm tính năng mới (mỗi tính năng 1 nhánh)
- release: Test trước khi lên production
- hotfix: Sửa bug khẩn cấp trên production

# Slide 7: Demo 1 quy trình làm việc với git cơ bản (Github Server cho quen thuộc)

- Chuẩn bị sẵn 1 repo có 1 số file trong đó, có sẵn các nhánh, chuẩn bị sẵn label cho issue, có 2 contributor (dùng acc chính và acc phụ)
- Demo các quy trình sau:

# QUY TRÌNH LÀM VIỆC VỚI GITFLOW

## A. SETUP BAN ĐẦU (Leader làm 1 lần)

### 1. Khởi tạo repository

- Tạo repo trên GitHub/GitLab
- Tạo nhánh `main` và `develop`

### 2. Cấu hình project

- Setup labels cho issues: `feature`, `bug`, `enhancement`
- Invite team members làm collaborators

### 3. Phân tích và tạo tasks

- Leader phân tích WBS (Work Breakdown Structure)
- Tạo các issues chi tiết với:
  - Title rõ ràng
  - Mô tả chức năng
  - Link tài liệu thiết kế
  - Deadline
- Assign issues cho từng member

---

## B. QUY TRÌNH FEATURE (Lặp lại nhiều lần)

### 1. Nhận task & Tạo nhánh

- Team member nhận issue được assign
- Tạo nhánh mới từ `develop`

**Lưu ý về đặt tên nhánh:**

> Không có chuẩn chung, tùy tổ chức. Một số quy ước:
>
> - `develop-#<số issue>:<mô tả>` → VD: `develop-#5:login`
> - `feature/<tên-feature>` → VD: `feature/login`
> - `feature-by-<tên-member>` → VD: `feature-by-nam`

### 2. Phát triển tính năng

- Member code theo mô tả trong issue
- Commit thường xuyên với message rõ ràng
- Push code lên nhánh của mình
- Đánh label

### 3. Tạo Pull Request

- Tạo PR trên GitHub/GitLab
- Add Tech Leader làm reviewer
- Link PR với issue tương ứng

### 4. Code Review

- Leader review code, để lại comments nếu cần sửa
- Member sửa code theo góp ý

### 5. Xử lý conflict (nếu có)

**Tình huống:** Member A và B cùng sửa 1 file, A merge trước → B bị conflict

**Nguyên nhân:**

- Trước khi push chưa pull code mới về
- Code local và remote không đồng bộ

**Giải pháp:**

- Pull code mới nhất từ develop về
- Merge develop vào nhánh của mình
- Sửa conflict trong file
- Commit và push lại

**Best practices tránh conflict:**

- ✅ Luôn pull trước khi code mỗi ngày
- ✅ Merge develop vào feature branch thường xuyên (1-2 ngày/lần)
- ✅ Không để feature branch sống quá lâu (max 1 tuần)
- ✅ Chia nhỏ task để tránh 2 người sửa cùng file

### 6. Merge vào develop

- Leader approve PR
- Merge vào nhánh `develop`
- Xóa nhánh feature (optional)

---

## C. QUY TRÌNH RELEASE (Khi đủ tính năng)

### 1. Tạo nhánh release

- Sau khi các features đã merge vào `develop`
- Leader quyết định tạo nhánh `release/x.x` từ `develop`

### 2. Testing

- Tester test kỹ lưỡng trên nhánh release
- Deploy lên môi trường staging để test

### 3. Fix bug (nếu phát hiện)

- Tạo nhánh bugfix từ release
- Fix bug và merge lại vào release
- Tester test lại

### 4. Merge vào main & develop

- Sau khi test OK hoàn toàn
- Merge `release` vào `main` (production)
- Đánh tag version trên main (VD: v1.0)
- Merge `release` vào `develop` (để develop có các bug fixes)
- Xóa nhánh release

### 5. Deploy lên production

- Deploy code từ nhánh `main`
- Monitor hệ thống

---

## D. QUY TRÌNH HOTFIX (Khi production có bug)

### Tình huống:

- Hệ thống đang chạy trên production
- Phát hiện bug nghiêm trọng cần fix ngay

### Quy trình:

**1. Tạo nhánh hotfix**

- Tạo nhánh `hotfix/ten-bug` từ `main`

**2. Fix bug**

- Sửa bug trên nhánh hotfix
- Test kỹ

**3. Merge vào main & develop**

- Merge hotfix vào `main` → Deploy ngay lên production
- Đánh tag version mới (VD: v1.0.1)
- Merge hotfix vào `develop` (để develop cũng có fix)
- Xóa nhánh hotfix

---

## E. CHU KỲ LẶP LẠI

```
Phát triển nhiều features (B)
    ↓
Đủ tính năng → Release (C)
    ↓
Deploy production
    ↓
Tiếp tục phát triển features cho version tiếp theo (B)

(Nếu có bug production → Hotfix (D))
```

# Slide 8: Kết thúc

- Câu hỏi?
