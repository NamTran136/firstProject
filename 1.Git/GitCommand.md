# Các lệnh trong Git

## git config

[Trang-nguyen] cho phép bạn xem hoặc chỉnh sửa các biến cấu hình để quản lý toàn bộ các khía cạnh của Git như giao diện hay hoạt động.
[Cedrus-Nguyen] git config dùng dể cấu hình (cài đặt) cho repo (kho lưu trữ).

có một số option khi config là: **--local** và **--global**

- local (cục bộ) : chỉ cấu hình cho repo hiện tại
- global (toàn cục): cấu hình cho toàn bộ repo đối với người dùng
- system: cấu hình cho toàn bộ máy (gồm nhiều người dùng)

## git init

[John-Nguyen]
>* **Tác dụng:** commit nghĩa là một action để Git lưu lại một snapshot của các sự thay đổi trong thư mục làm việc. Và các tập tin, thư mục được thay đổi đã phải nằm trong Staging Area. Mỗi lần commit nó sẽ được lưu lại lịch sử chỉnh sửa của code kèm theo tên và địa chỉ email của người commit. Ngoài ra trong Git bạn cũng có thể khôi phục lại tập tin trong lịch sử commit của nó để chia cho một branch khác, vì vậy bạn sẽ dễ dàng khôi phục lại các thay đổi trước đó.
>* **Cách sử dụng:** 
>```php
>git commit -m ”Đây là message, dùng để note những thay đổi để sau này dễ dò lại, chú ý là note lại bằng những câu ngắn gọn có nghĩa và note chung bằng tiếng anh ”
>```
>***
## git branch


## git checkout

[Cedrus-Nguyen]

- dùng để đổi qua lại giữa các nhánh
- dùng git checkout -b name_branch: để tạo ra nhánh mới đồng thời chuyển qua nhánh đó

## git remote


## git clone

[Cedrus-Nguyen] dùng để tạo một bản sao của remote repo và tải bản sao đó máy local, lệnh này cũng đồng thời liên kết remote repo và local repo tương ứng

cú pháp: git clone url_remote_repo

[Stanley-Tran]

> Copy một remote repo về thư mục local.
>
> Lệnh thực thi:
>
> ```
> git clone <remote_repo_url>
> ```
[John-Nguyen]
>* **Tác dụng:** Copy 1 git repository từ remote source.
>* **Cách dùng:**
>```php
>git clone <:clone git url:>
>```
>***
## git pull

[John-Nguyen]
>* **Tác dụng:** Lệnh git pull lấy về thông tin từ remote và cập nhật vào các nhánh của local repo.
>* **Thi hành lệnh:**
>```php
>git pull
>```
> hoặc chỉ rõ remote
>```php
>git pull origin
>```
> Thì nó tải về thông tin và ngay lập tức merge cho nhánh đang làm việc, nó tương đương với lệnh
>```php
>git fetch origin
>git merge origin/master
>```
>>* *origin: tên remote*
>>* *master: tên nhánh*
>
> Bạn có thể viết lại lịch sử commit của nhánh đang làm việc, cập nhật toàn bộ nhánh remote là base của nó thì thực hiện
>```php
>git pull --rebase origin
>```
>***
## git push

[John-Nguyen]
>* ***Tác dụng:*** lệnh này có thể dùng để đẩy các commit mới ở máy trạm(local repo). Nguồn để lấy lên là nhánh mà con trỏ **Head** đang trỏ tới (nhánh làm việc). Đích mà nó đẩy lên (ghi vào nhánh nào) có thể tùy chọn trong tùy chọn của lệnh, tuy nhiên cũng không cần chỉ định nếu có thiết lập giữa nguồn và đích trước. Lệnh *git push* cũng có thể xóa đi các nhánh của remote.
>* **Một số tham số hay dùng như:**
>> 1. *--all* đẩy tất cả các nhánh lên server
>> 2. *--tags* đẩy tất cả các tag lên server
>> 3. *--delete* xóa một nhánh chỉ ra trên server
>> 4. *-u* đẩy và tạo một upstream (luồng upload tương ứng với nhánh của local), hay sử dụng cho lần đầu đẩy lên server
>* ***Cách sử dụng:***
>1. **Đẩy lên sever lần đầu tiên:** Nếu là lần đầu tiên đẩy Local Repo lên Remote Repo mới khởi tạo thì cần tạo ra một theo dõi kết nối, upstream giữa local và remote, vậy hãy dùng tham số *-u*. Ví dụ đẩy lên remote có tên origin và tạo upstream cho nhánh master
>```php
>git push -u origin master
>```
>2. **Đẩy lên sever:** 
>* Sau khi có upstream mỗi lần cần đẩy dữ liệu lên remote của nhánh master chỉ cần thực hiện lệnh:
>```php
>git push
>```
> * hoặc có thể đẩy một nhánh cụ thể, ví dụ đẩy lên một nhánh beta lên remote có tên là origin
>```php
>git push origin beta
>```
> 3. **Đẩy lên Sever tất cả cách nhánh** :
>* đẩy tất cả các nhánh lên remote có tên là origin
>```php
>git push origin --all
>```
> 4. **Xóa một nhánh trên remote**:
> * ví dụ bạn cần xóa một nhánh beta trên remote có tên là origin
>```php
>git push origin --delete beta
>```
> * kiểm tra các nhánh trên remote bằng lệnh
>```php
>git branch -a
>```
>***
> Dùng để gửi commit đến kho lưu trữ từ xa, sử dụng 2 tham số: kho lưu trữ từ xa và nhánh mà push dành cho

    git push <remote URL/ remote_name> <branch>
## git stash
[Cedrus-Nguyen] dùng để tạm thời đưa các thay đổi của repo (các thay đổi chưa commit) và một bộ nhớ tạm

- git stash pop: đưa các thay đổi trên từ bộ nhớ tạm quay lại

```
thường sử dụng khi bạn đang code dở, nhưng cần quay về commit gần nhất nhưng vẫn muốn lưu giữ lại lượng code đó để sau này lấy ra code tiếp
```

> Dùng khi muốn lưu lại các thay đổi chưa commit, thường rất sử hữu dụng khi bạn muốn đổi sang 1 branch khác mà lại chưa hoàn thành ở branch hiện tại

    git stash save

> Có thể xem danh sách các lần lưu bằng lệnh

    git stash list

> Xem nội dung chi tiết của lần thay đổi

    git stash list -p
    git stash show stash@{1}

> Apply lại thya đổi từ stash _lần 1_

    git stash apply stash@{1}

> Xoá các thay đổi không cần thiết

    git stash pop stash@{1}

[John-Nguyen]
> **Tác dụng tổng quát:** có thể xem lệnh *git stash* như là một nút "tạm dừng" cho tiến trình công việc. Lệnh này khá giống như lệnh *git reset --hard*, nó cung cấp một branch sạch sẽ nhưng nó cũng ghi lại các thay đổi đầy đủ bên trong.// lệnh *git - seset* sẽ nói sau.
>![alt](https://images.viblo.asia/82ce364c-11c6-401e-9662-7d072289eecc.png)
>1. **git stash save**

## git log

> Dùng để xem lại lịch sử các commit, nhằm giám sát sự thay đổi của dự án

[Cedrus-Nguyen] dùng để xem lại lịch sử các commit, nhằm giám sát sự thay đổi của dự án.
## git reset


> Dùng để quay lại một điểm commit nào đó, đồng thời xoá lịch sử của các commit trước đó. Những thay đổi sẽ được lưu vào local repo

[Cedrus-Nguyen] dùng để đưa hánh hiện tại về một commit trước đó và xóa các nhánh phía sau

[John-Nguyen]
>**Tác dụng tổng quát**: Cách sử dụng lệnh `git reset` để undo, hủy commit cuổi hoặc hủy đưa vào vùng staging
>1. Hủy commit cuối bằng lệnh `git reset`
>* Khi đã thực hiện commit, commit đó chưa public (chưa đẩy lên Remote Repo bằng lệnh `git push`) thì bạn có thể hủy(undo) commit đó với hai trường hợp bằng lệnh `git reset` như sau:
>>**git resset** với tham số `--soft`
>>* Trường hợp này sẽ hủy commit cuối, con trỏ `HEAD` sẽ chuyển về commit cha. Đồng thời những thay đổi của commit cuối được chuyển vào vùng staging nhằm để có cơ hội commit lại hoặc sửa đổi, cú pháp lệnh như sau:
>>```php
>>git reset --soft HEAD~1
>>```
>> ![alt](https://raw.githubusercontent.com/xuanthulabnet/learn-git/master/docs/git005.png)
>
>>**git reset** với tham số `--hard`
>>* Khi dùng tham số --hard thì kết quả giống với dùng tham số --soft, chỉ có một khác biết là nội dung thay đổi của commit cuối không đưa đưa vào staging mà bị hủy luôn. Trường hợp này dùng khi bạn quyết định hủy hoàn toàn commit cuối
>> ```php
>>git reset --hard Head~1
>>```
>>![alt](https://raw.githubusercontent.com/xuanthulabnet/learn-git/master/docs/git006.png)
>
>2. Một vài trường hợp khác
>>* Hủy git add
>>>Nếu bạn đã dùng lệnh git add để cập nhật thay đổi vào vùng staging, bạn có thể hủy thao tác này bằng cách thực hiện lệnh:
>>>```php
>>> git reset
>>>```
>>* Hủy đưa một file vào staging
>>>Nếu muốn hủy một file nào đó trong vùng staging chứ không phải toàn bộ thì dùng lệnh:
>>>```php
>>>git reset --filename
>>>```
>***Kết Thúc***
***
