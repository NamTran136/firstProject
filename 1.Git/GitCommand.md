# Các lệnh trong Git

## 1. git config: chỉnh sửa các biến cấu hình để quản lý toàn bộ các khía cạnh của Git

## 2. git init: tạo, khởi tạo một kho chứa Git mới ở local repository

## 3. git add: lưu thông tin chuẩn bị commit

## 4. git commit: giúp Git lưu lại các thay đổi trong thư mục trong quá trình làm việc với Git

## 5. git status: hiển thị trạng thái của Git Add và Git commit

## 5. git branch: tạo, xem , xóa các branch có trong git

## 6. git checkout: đổi branch khác

## 7. git merge: là lệnh hợp nhất các nhánh trong Git. Khi sử dụng lệnh hợp nhất trong Git, chỉ có nhánh hiện tại được cập nhật để phản ánh sự hợp nhất, còn nhánh đích sẽ không bị ảnh hưởng.

## 8. git remote: cho phép bạn tạo, xem và xóa kết nối giữa các Repo

## 9. git clone: tạo bản sao cục bộ của kho lưu trữ từ xa. Nó truy cập kho lưu trữ thông qua một URL. Thông thường, kho lưu trữ gốc được đặt trên một máy chủ từ xa, thường là từ một dịch vụ Git như GitHub, Bitbucket hoặc GitLab.

## 10. git pull: được sử dụng để tìm nạp (fetch) và tải xuống nội dung từ remote repository và cập nhật local repository sao cho phù hợp với nội dung đó.
### git pull origin = git fetch origin + git merge origin/master

## 11. git push: để đẩy các commit mới ở máy trạm (local repo) lên server (remote repo). Nguồn để đẩy lên là nhánh mà con trỏ HEAD đang trỏ tới (nhánh làm việc)

## 12. git stash: Khi file đã được đưa vào stage hoặc đã tồn tại trước đó( được committed), git stash sẽ đưa nội dung file về trạng thái ban đầu 

## 13. git log: xem lại thông tin lịch sự commit, nhằm giám sát sự thay đổi của dự án

## 14. git reset: để quay về một điểm commit nào đó, đồng thời xóa lịch sử của các commit trước nó.