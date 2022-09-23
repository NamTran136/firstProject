# Luồng hoạt động trong Git
* Khi tạo mới 1 file , sẽ ở vùng **working directory** (nơi đang làm việc). Khi này git vẫn chưa quản lý file đó.
* Tiếp theo khi chúng ta muốn quản lý file đó, thì sử dụng lệnh **git add** để đưa nó vào **Staging Area**.
* Cuối cùng chúng ta sẽ **git commit** để ghi lại thay đổi của file đó vào repository.

### Trạng thái của một file
![alt](https://images.viblo.asia/d40be0f7-9e7b-4848-bb99-7dc025be5f57.png)

* Untracked: tương ứng việc file mới bắt đầu trong Working Directory.
* Unmodified: Khi file đã được commit vào Repository và chưa có sự thay đổi gì. Khi có sự thay đổi sẽ chuyển sang trạng thái tiếp theo:
* Modified: File đã được thay đổi tuy nhiên chưa đưa vào Staging Area. Vì vậy chúng ta cần add lại trước khi commit để chuyển về trạng thái Unmodified.
* Staged: File đã trong Staging Area.