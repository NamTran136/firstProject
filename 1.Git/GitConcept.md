# Các thuật ngữ trong Git
## Repository

> Kho lưu trữ (thường được gọi là repo) là một tập hợp các mã nguồn. Repo chứa các commit của dự án hoặc một tập hợp các tham chiếu đến các commit
> [Trang-nguyen]Kho lưu trữ (Repository) Git chứa tất cả các tệp dự án của bạn bao gồm các branch, tagsvà commits.
> [Cedrus-Nguyen] kho lưu trữ (repository) gọi tắt là repo, là nơi lưu trữ các file của dự án (code, hình ảnh, âm thanh,...).

Có hai loại repo thường dùng là local repo và remote repo.

- Local Repository: là một lại repository nằm trên máy tính của bạn
- Remote Repository: là một loại repository được cài đặt trên server chuyên dụng.

[Stanley-Tran]

> **Repository** (repo) là một cấu trúc dữ liệu lưu trữ các project trên git. Các project chứa tập hợp các file hoặc cấu trúc thư mục. Bên cạnh đó, repo còn lưu trữ các phiên bản thay đổi của từng file (commit).
>
> Có 2 loại repo:
>
> 1. **local repository**: kho lưu trữ cục bộ, tất cả các thay đổi của bản hay những commit chỉ được lưu trữ trên cục bộ.
> 2. **remote repository**: kho lưu trữ từ xa, nơi project được lưu trữ trên server, là không gian phù hợp để một nhóm có thể quản lý source code của mình.

[John-Nguyen]
* **Repository** quản lý lịch sử
    - `Repository` là nơi sẽ ghi lại trang thái thư mục và file. Trạng thái được lưu lại đang được chứa như là lịch sử thay đổi của nội dung. Bằng việc đặt thư mục muốn quản lý vào lịch sử thay đổi dưới sự quản lý của repository, có thể ghi chép lại lịch sử thay đổi của thư mục và file.
    - `Repository` của `Git` được phân thành hai loại là *Remote repository* và *local repository*
    >1. *Remote repository* là repository để chia sẻ nhiều người và bố trí trên sever chuyên dụng
    >2. *Local repository* là repository bố trí trên máy của bản thân mình, dành chi một người sử dụng
    - Do `repository` phân thành hai loại là `local` và `remote` nên với những công việc bình thường thì có thể sử dụng `local repository` và thực hiện trên toàn bộ máy sẵn có khi muốn công khai nội dung công việc mà bản thân đã làm trên `local repository` thì sẽ upload lên `remote repository` rồi công khai. Thêm nữa, thông qua `remote repository` cũng có thể lấy về nội dung công việc của người khác.
    - Có hai cách tạo `local repository` là tạo repository hoàn toàn mới, cách thứ hai là sao chép `remote repotory` rồi tạo. 
## Commit

> Một commit ghi lại một thay đổi hoặc một loạt các thay đổi mà bạn đã thực hiện đối với một file trong repo. Một commit có hash SHA1 duy nhất được sử dụng để theo dõi các file đã thay đổi trong quá khứ.

[Trang-nguyen]Một commit đại diện cho một điểm cụ thể trong lịch sử dự án của bạn. Sử dụng lệnh commit kết hợp với lệnh git add để cho git biết những thay đổi bạn muốn lưu vào kho lưu trữ cục bộ. Và hành động này không được tự động gửi đến máy chủ từ xa
[Cedrus-Nguyen] có nghĩa là cam kết. Một commit ghi lại toàn bộ các thay đổi mà bạn thực hiện đối với repo, và lưu lại thành một cam kết an toàn

> Git History là danh sách một loạt các commit. Sử dụng lệnh commit kết hợp với lệnh git add để cho git biết những thay đổi của bạn và lưu vào kho lưu trữ repositoty.​

[Stanley-Tran]

> **Commit** là hành động ghi lại các thay đổi đã được thực hiện với một hoặc nhiều file trong local repo.
[John-Nguyen]
* **Commit** là gì?
    - `Commit` là thao tác có chức năng ghi lại những thay đổi file hay thư mục vào kho lưu trữ và, những thay đổi này sẽ được lưu vào thư mục commit trong kho và được sắp xếp theo thời gian chỉnh. Do đó khi nhìn vào thư mục commit trong kho và được sắp xếp theo thứ tự thời gian chỉnh. Do đó khi nhìn vào thư mục commit bạn sẽ nhìn thấy lịch sử sửa/thay đổi các file thư mục. Mỗi `commit` đều phải có `commit message` với nhiệm vụ ghi nhận sự thay đổi theo tiến trình update của lâp trình viên.
    - Các cách để commit đã nói trong phần GitCommand
## Branch

> Một branch về cơ bản là một tập hợp các mã thay đổi duy nhất với một tên duy nhất. Mỗi repo có thể có một hoặc nhiều branch.

[Trang-nguyen]Các Branch đại diện cho các phiên bản cụ thể của một kho lưu trữ ( repository ) chương trình chính của bạn. Branch cho phép bạn theo dõi các thay đổi bạn thực hiện đối với kho lưu trữ và hoàn tác về các phiên bản cũ hơn
[Cedrus-Nguyen] có nghĩa là nhánh. một repo có thể có nhiều nhánh, với nhánh chính là master (main). các nhánh khác thường sẽ là mỗi nhánh là một chức năng, hoặc mỗi nhánh là một người code,...

```
mục đích của branch là để giúp nhiều người có thể cùng xây dựng, phát triển dự án mà tránh xảy ra xung đột
```

> Branch chính – branch mà tất cả các thay đổi cuối cùng được merge vào – được gọi là branch master. Đây là phiên bản làm việc chính thức cho dự án và là phiên bản mà bạn sẽ thấy khi truy cập kho dự án tại github.com/yourname/projectname.​

[Stanley-Tran]

> **Branch** là một nhánh ghi lại luồng lịch sử của các commit. Mỗi repo có nhiều branch, các branch có thể thực hiện thay đổi file đồng thời song song nhau và có thể hợp nhất bằng cách merge branch này với branch khác.

[John-Nguyen]
* **Branch** là gì?
    - `Branch` được dùng để phân nhánh và ghi luồng của lịch sử. Bạn có thể dùng branch để khai triển dự án theo hướng cô lập để không ảnh hưởng đến dự án chính. Tại đây cho phép bạn thử nghiệm các tính năng mới hoặc điều chỉnh, sửa lỗi cho project.
    - Khi khởi tạo kho lưu trữ hoặc clone, các thành viên sẽ được tạo lặp một branch dùng riêng cho công việc của mình từ branch chính để không làm ảnh hưởng đến công việc của các thành viên khác. Branch riêng này sẽ chứa toàn bộ mã nguồn trong kho.
    - Sau khi công việc đã hoàn thành, bạn có thể nhập branch vừa tạo vào những branch khác hoặc repository chính bằng cách dùng lệnh Pull Request.
## Checkout

> Sử dụng lệnh git checkout để chuyển các branch. Bằng cách nhập **git checkout <tên branch>** mà bạn muốn chuyển đến hoặc nhập **git master** để trở về branch chính (master branch).​
> [Trang-nguyen]Sử dụng lệnh git checkout để chuyển giữa các branch. Chỉ cần nhập git checkout theo sau là tên của branch bạn muốn chuyển đến.
> [Cedrus-Nguyen] checkout dùng để chuyển đổi qua lại giữa các nhánh

[Stanley-Tran]

> **Checkout** dùng để luân chuyển giữa các branch.
[John-Nguyen]
* **Chechout** là gì?
    - Lệnh git checkout được dùng để chuyển nhánh hoặc để phục hồi file trong thư mục làm việc từ một commit trước đây ... Từ phiên bản git 2.23 còn có thể 2 lệnh với chức năng tương ứng là: `git switch` và `git restore`
    - `checkout` chuyển nhánh: ví dụ đang ở nhánh nào đó muốn chuyển sang nhánh master thì thực hiện câu lệnh sau:
    ```php
    git checkout master
    ```
    - `check out` phục hồi file từ phiên bản cũ
    1. Giả sử có file index.html, muốn phục hồi nó về phiên bản ở commit có mã hash là HASH, thì thực hiện:
    ```php
    git checkout HASH index.html
    ```
    2. Nếu bạn muốn phục hồi nội dung từ index (staging nếu có, nếu không từ commit cuối) thì đơn giản là
    ```php
    git checkout index.html
    ```
    3. Phục hồi nhiều file, ví dụ *.html từ index (staging nếu có, nếu không từ commit cuối)
    ```php
    git checkout -- *.html
    ```
    4. Có thể thực hiện với tất cả các file bằng
    ```php
    git checkout -- .
    ```
    5. Khi bạn trở về hẳn một commit có mã HASH nào đó bằng lệnh:
    ```php
    git checkout HASH
## Fork

> Là một bản sao của kho lưu trữ (repository), có thể tận dụng các lợi ích của fork để chạy thử nghiệm các thay đổi mà không ảnh hưởng đến kết quả của dự án.​
> [Trang-nguyen]Fork là một bản copy của kho lưu trữ chính dự án của bạn. Những thay đổi của bản trên bản Fork sẽ không ảnh hưởng đến dự án chính của bạn
> [Cedrus-Nguyen] fork là một bản sao của repo.

[Stanley-Tran]
Dùng fork để thử nghiệm một số thay đổi mà không ảnh hưởng trực tiếp đến dự án

> **Fork** tải một bản copy từ remote repo. Việc dùng bản copy của một repo cho phép người dùng dễ dàng chỉnh sửa, thay đổi source code mà không ảnh hưởng đến code gốc.
[John-Nguyen]
* **Fork** là gì?
    - Git fork: là một bản copy của một repository (Kho chứa source code của bạn trên Github). Việc fork một repository cho phép bạn dễ dàng chỉnh sửa, thay đổi source code mà không ảnh hưởng tới source gốc.
## Fetch

[Trang-nguyen]Lệnh git fetch sao chép và tải xuống tất cả các tệp của nhánh vào thiết bị của bạn. Sử dụng nó để lưu các thay đổi mới nhất vào kho của bạn. Nó có thể fetch nhiều nhánh cùng một lúc.
[Cedrus-Nguyen] tải dữ liệu từ remote repo -> local, dùng để theo dõi sự thay đổi của remote.

```
tuy nhiên tải về bằng git fetch nó chưa tích hợp thay đổi ngay local repository của bạn.
mục đích để theo dõi các commit người khác đã cập nhật lên server -> sự khác nhau giữa remote và local
```

[Stanley-Tran]

> **Fetch** tải các bản sao từ các branch của remote repo về máy local nhưng sẽ không hợp nhất chúng với local repo.
[John-Nguyen]
* **Fetch** là gì?
    - Lệnh git fetch là một câu lệnh của git, được sử dụng để tải xuống các nội dung từ Remote repository mà không làm thay đổi trạng thái của Local repository (các dữ liệu như commit, các file, refs). Hiểu một cách đơn giản, khi bạn thực hiện lệnh git fetch, git sẽ thu thập và lưu trữ những thay đổi mới từ các branch của Remote repository về máy tính của bạn, nhưng không hợp nhất chúng với Local repository. Với git fetch, bạn có thể theo dõi các commit người khác đã cập nhật lên server, đồng thời nắm bắt được những thông tin khác nhau giữa remote và local.
## Head

[Trang-nguyen]Các commit ở đầu của một nhánh được gọi là HEAD. Nó đại diện cho commit mới nhất của kho lưu trữ mà bạn hiện đang làm việc.
[Cedrus-Nguyen] Head đại diện cho commit mới nhất của repo tại nhánh mà bạn đang làm việc
Commit ở đầu của một branch được gọi là head.

[Stanley-Tran]

> **Head** là con trỏ tới phiên bản commit cuối cùng ở mỗi branch.
[John-Nguyen]
* **Head** là gì?
    - Khi làm việc với Git, chỉ một branch có thể check out tại một thời điểm - và đây được gọi là nhánh "HEAD". Thông thường, đây còn được gọi là nhánh "active" hoặc "current".
    - Git ghi chú về branch hiện tại này trong một tệp nằm bên trong kho lưu trữ Git, trong .git / HEAD (Đây là tệp nội bộ, vì vậy không nên thao tác thủ công!)
    - Nếu bạn thắc mắc chính xác tệp này chứa những gì, bạn có thể chỉ cần in nội dung của nó trên dòng lệnh:
    ```php
    $ cat .git/HEAD
    ref: refs/heads/master
    ```
    - Trong trường hợp ví dụ này, một branch local có tên "master" là HEAD hiện tại.
## Index

> Khi sử dụng mà bạn thêm, xóa hoặc thay đổi file thì nó vẫn nằm trong mục index cho đến khi bạn sẵn sàng commit các thay đổi. Bạn dùng lệnh git status để xem nội dung index của bạn.​
> [Trang-nguyen]Bất cứ khi nào bạn thêm, xóa hoặc thay đổi một tập tin, nó vẫn nằm trong index cho đến khi bạn sẵn sàng commit các thay đổi. Nó như khu vực tổ chức cho Git. Sử dụng lệnh git status để xem nội dung của index của bạn. Những thay đổi được tô sáng bằng màu xanh lá cây đã sẵn sàng để được commit trong khi những thay đổi màu đỏ vẫn cần được thêm vào staging.
> [Cedrus-Nguyen] khu vực trung gian, lưu trữ những thay đổi đối với các file, chuẩn bị cho việc commit.

[Stanley-Tran]

> **Index** là chỉ mục, nơi lưu trữ các thay đổi của file trước khi thực hiện commit. Chỉ mục còn được biết đến với tên gọi **staging area**.

[John-Nguyen]
* **Index** là gì?
    - Chỉ mục(index) Git là một vùng dàng dựng giữa thư mục làm việc và kho lưu trữ. Nó được sử dụng để thiết lập một tập hợp các thay đổi mà bạn muốn thực hiện cùng nhau. Để hiểu rõ hơn về chỉ mục(index) Git, trước tiên hãy hiểu thư mục làm việc và kho lưu trữ.
    - Index là nơi để chuẩn bị cho việc commit lên repository.
    - Trên Git, khi đã thực hiện commit thì trạng thái sẽ không được ghi trực tiếp trong repository từ working tree, mà sẽ ghi trạng thái đã được thiết lập của index được xây dựng ở giữa đó. Vì thế, để ghi lại trạng thái của file bằng commit thì trước hết cần đăng ký file trong index.
    - Với việc chèn index vào giữa như thế này, có thể thực hiện commit không bao gồm những file không cần thiết trong working tree, hay có thể đăng ký chỉ một phần thay đổi của file trong index rồi commit.
## Merge

[Trang-nguyen]Sử dụng lệnh git merge để thêm các thay đổi từ nhánh này sang nhánh khác.
[Cedrus-Nguyen] dùng để hợp nhất giữa hai nhánh lại với nhau.

[Stanley-Tran]

> **Merge** là khái niệm chỉ một hành động gộp nhánh, biến phiên bản code mới thành tổng hợp của 2 nhánh.
[John-Nguyen]
* **Merge** là gì?
    - Git Merge là một lệnh dùng để hợp nhất các chi nhánh độc lập thành một nhánh duy nhất trong Git.
    - Khi sử dụng lệnh hợp nhất trong Git, chỉ có nhánh hiện tại được cập nhật để phản ánh sự hợp nhất, còn nhánh đích sẽ không bị ảnh hưởng. Điều này có nghĩa rằng, Git Merge thường được sử dụng kết hợp với git checkout để chọn nhánh hiện tại và git branch để xóa nhánh nguồn đã lỗi thời.
## Origin

[Trang-nguyen]được sử dụng thay vì URL kho lưu trữ ban đầu đó để làm cho việc tham chiếu dễ dàng hơn nhiều.
[Cedrus-Nguyen] có nghĩa là gốc, phiên bản mặc định của repository và origin đóng vai trò đặc biệt để liên lạc với nhánh chính.

Một số lệnh thường dùng là git push origin master, git pull origin master

[Stanley-Tran]

> **Origin** là remote kết nối tới remote repo mà bạn đang làm việc, được sử dụng để thay thế url của remote repo.
[John-Nguyen]
* **Origin** là gì?
    - Trong Git, Thuật ngữ gốc(origin) được đề cập đến kho lưu trữ từ xa nơi bạn muốn xuất bản commit của mình. Kho lưu trữ từ xa mặc định được gọi là origin , mặc dù bạn có thể làm việc với một số điều khiển từ xa có tên khác cùng một lúc. Nó được cho là một bí danh của hệ thống.
    - Nguồn gốc(origin) là một tên viết tắt của kho lưu trữ từ xa mà một dự án ban đầu được sao chép(clone). Nó được sử dụng thay cho URL kho lưu trữ ban đầu. Do đó, nó làm cho việc tham chiếu dễ dàng hơn nhiều.

    - Nguồn gốc(origin) chỉ là một quy ước chuẩn. Mặc dù việc giữ nguyên quy ước này là rất quan trọng, nhưng lý tưởng nhất là bạn có thể đổi tên nó mà không làm mất bất kỳ chức năng nào.
    - Một số lệnh trong đó thuật ngữ origin và master được sử dụng rộng rãi như sau:

    - `Git push origin master`
    - `Git pull origin master`
    - Git có hai loại nhánh được gọi là cục bộ và từ xa. Để sử dụng git pull và git push, bạn phải thông báo cho nhánh cục bộ của mình rằng nhánh nào sẽ hoạt động. Vì vậy, thuật ngữ gốc(origin) được sử dụng để xử lý một kho lưu trữ từ xa và nhánh chính. Thuật ngữ push origin master được sử dụng để đẩy các thay đổi vào kho lưu trữ từ xa. Thuật ngữ pull origin master được sử dụng để truy cập kho lưu trữ từ xa đến cục bộ.
## Master

[Trang-nguyen]Master là nhánh chính của tất cả các kho lưu trữ của bạn. Nó nên bao gồm những thay đổi và commit gần đây nhất.
[Cedrus-Nguyen] nhánh chính của repo, là xương sống của project.

[Stanley-Tran]

> **Master** là nhánh chính của repo, mặc định được tạo khi người dùng khởi tạo một repo mới.

[John-Nguyen]
* **Master** là gì?
    - Master là một quy ước đặt tên cho nhánh Git. Đó là một nhánh mặc định của Git. Sau khi sao chép(clone) một dự án từ một máy chủ từ xa, kho lưu trữ cục bộ kết quả chỉ chứa một nhánh cục bộ duy nhất. Nhánh này được gọi là nhánh “chính”. Nó có nghĩa là “master” là một nhánh “mặc định” của kho lưu trữ.
    - Trong hầu hết các trường hợp, nhánh master được gọi là nhánh chính. Master branch được coi là nhánh cuối của repo. Kho lưu trữ cục bộ của bạn có nhánh chính luôn cập nhật với nhánh chính của kho lưu trữ từ xa.


    - Đừng gây rối trong nhánh master. Nếu bạn đã chỉnh sửa nhánh chính của một dự án nhóm, những thay đổi của bạn sẽ ảnh hưởng đến những người khác và rất nhanh chóng sẽ có xung đột khi hợp nhất(merge).
## Pull

> thể hiện cho các đề xuất thay đổi trong nhánh chính. Khi làm việc với một nhóm, ta có thể tạo các pull request để yêu cầu người bảo trì kho lưu trữ xem xét các thay đổi và hợp nhất chúng.​
> [Trang-nguyen]Lệnh git pull được sử dụng để thêm các thay đổi vào nhánh chính.
> [Cedrus-Nguyen] pull là kéo sự thay đổi từ trên remote về local và merge vào nhánh tương ứng

pull = fetch + merge

[Stanley-Tran]

> **Pull** là hành động sao chép phiên bản hiện tại của một nhánh từ remote repo về local repo. Thường dùng để kiểm soát các conflict khi bạn có nhu cầu merge nhánh.
[John-Nguyen]
* **Pull** là gì?
    - Git Pull là một lệnh dùng để tải xuống dữ liệu từ một Remote repository và cập nhật Local repository phù hợp với dữ liệu đó. Nói cách khác, Git Pull là lệnh hợp nhất các thay đổi từ Remote repository vào Local repository.

    - Về bản chất, Git Pull chính là sự kết hợp của 2 lệnh Git Fetch và Git Merge. Giai đoạn đầu, Git Pull sẽ thực thi lệnh Git Fetch ở phạm vi nhánh cục bộ mà HEAD được trỏ đến. Khi dữ liệu được tải xuống, Git Pull sẽ bắt đầu quy trình hợp nhất như Git Merge. Một merge commit mới sẽ được tạo và HEAD cũng được cập nhật để trỏ đến merge commit đó.
    - Giống như bất kỳ lệnh nào khác trong Git, lệnh Git Pull cũng có một số tùy chọn giúp sử dụng lệnh một cách tự nhiên và hiệu quả.


    1. `git pull <remote>:` Lấy bản sao remote đã được chỉ định của nhánh hiện tại và hợp nhất nó vào bản sao local. Tùy chọn này giống như lệnh: git fetch origin/git merge origin .
    2. `git pull –no-commit:` Đây là một tùy chọn Git Pull không có cam kết. Thực hiện tìm nạp nội dung remote nhưng không tạo ra merge commit mới.
    3. `git pull –rebase:` Tùy chọn này là Git Rebase giúp hợp nhất remote branch với local branch nhanh chóng.
    git pull –verbose: Cung cấp verbose output để hiển thị nội dung tải xuống và các chi tiết hợp nhất.

> thể hiện cho các đề xuất thay đổi trong nhánh chính. Khi làm việc với một nhóm, ta có thể tạo các pull request để yêu cầu người bảo trì kho lưu trữ xem xét các thay đổi và hợp nhất chúng.​
> [Trang-nguyen]Lệnh git pull được sử dụng để thêm các thay đổi vào nhánh chính.
> [Cedrus-Nguyen] pull là kéo sự thay đổi từ trên remote về local và merge vào nhánh tương ứng

pull = fetch + merge

[Stanley-Tran]

> **Pull** là hành động sao chép phiên bản hiện tại của một nhánh từ remote repo về local repo. Thường dùng để kiểm soát các conflict khi bạn có nhu cầu merge nhánh.

## Push

[Trang-nguyen]Lệnh git push được sử dụng để cập nhật các nhánh từ xa với những thay đổi mới nhất mà bạn đã commit.
[Cedrus-Nguyen] push là đẩy sự thay đổi từ local lên remote vào nhánh tương ứng

[Stanley-Tran]

> **Push** là hành động gửi các local commit lên remote repo trên một nhánh cụ thể.
[John-Nguyen]
* **Push** là gì?
    - Thực hiện lệnh git push để tạo upstream, đẩy dữ liệu từ local repo đến remote repo, push các nhánh, xóa các nhánh của remote
    - Lệnh git push được sử dụng để đẩy các commit mới ở máy trạm (local repo) lên server (remote repo). Nguồn để đẩy lên là nhánh mà con trỏ HEAD đang trỏ tới (nhánh làm việc).
    - Đích mà nó đẩy lên (ghi vào nhánh nào) có thể chỉ định trong tùy chọn của lệnh, tuy nhiên cũng không cần chỉ định nếu có thiết lập liên hệ giữa nguồn và đích trước. Lệnh git push cũng có thể xóa đi các nhánh của remote
    - Một số tham số hay dùng như:
    - •	`--all` đẩy tất cả các nhánh lên server
    - •	`--tags` đẩy tất cả các tag lên server
    - •	`--delete` xóa một nhánh chỉ ra trên server
    - •	`-u` đẩy và tạo một upstream (luồng upload tương ứng với nhánh của local), hay sử dụng cho lần đầu đẩy lên server

[Trang-nguyen]Lệnh git push được sử dụng để cập nhật các nhánh từ xa với những thay đổi mới nhất mà bạn đã commit.
[Cedrus-Nguyen] push là đẩy sự thay đổi từ local lên remote vào nhánh tương ứng

[Stanley-Tran]

> **Push** là hành động gửi các local commit lên remote repo trên một nhánh cụ thể.

## Remote

> Kho lưu trữ từ xa là một bản sao của một chi nhánh. Remote có thể giao tiếp ngược lại với nhánh gốc (origin branch) của chúng và các remote khác trong kho lưu trữ.​
> [Trang-nguyen]lệnh cho phép tạo kho lưu trữ từ xa
> [Cedrus-Nguyen] remote có nghĩa là điều khiển.

git remote dùng để quản lý sự liên kết của local repo với remote repo

[Stanley-Tran]

> **Remote** là khái niệm để chỉ kho lưu trữ từ xa, là nơi mà tất cả thành viên trong nhóm sử dụng để trao đổi các thay đổi của họ. Ngoài ra, lệnh `git remote` còn được dùng để quản lý các liên kết tới remote repo.
[John-Nguyen]
* **Remote** là gì?
    - Kho chứa git bản ở local là Local Repo, và bản lưu trữ ở máy khác (server) gọi là Remote Repo, bạn có thể liên kết giữa Local Repo và Remote Repo để trao đổi dữ liệu, đẩy thông tin từ local lên remote và ngược lại lấy thông tin từ cập nhật vào local.
    - Lệnh git remote cho phép bạn tạo, xem và xóa kết nối giữa các Repo. Những kết nối chứa thông tin địa chỉ đến kho chứa khác, nó có một cái tên để sử dụng khi cần thiết.
    - Để liệt kê các liên kết sử dụng lệnh
    ```php
    git remote
    ```
    - Hiện thị thông tin chi tiết hơn, có thêm đường dẫn đến remote Repo
    ```php
    git remote -v
    ```
    Khi lấy về một remote repo bằng lệnh git clone, mặc định repo tải về có liên kết với tên origin chứa địa chỉ tham chiếu đến remote repo nó tải về
## Rebase

[Trang-nguyen]Lệnh git rebase cho phép bạn tách, di chuyển hoặc thoát khỏi các commit. Nó cũng có thể được sử dụng để kết hợp hai nhánh khác nhau
[Cedrus-Nguyen] rebase có nghĩa là dựng lại base.

dùng để phân tách, di chuyển và sửa lại commit.

```
cũng có thể sử dụng rebase để 'merge' giữa các branch
```

[Stanley-Tran]

> **Rebase** là một quy trình để áp dụng lại các commit trên một branch nào đó. Nó được sử dụng để áp dụng một chuỗi các commmit từ các nhánh khác nhau thành một commit cuối cùng, đó là cách mà **rebase** có thể thay thế **merge**.

[John-Nguyen]
* **Rebase** là gì?
    - Lệnh git rebase cho phép bạn phân tách, di chuyển hoặc thoát khỏi các commit. Nó cũng có thể được sử dụng để kết hợp hai nhánh khác nhau.
## Stash

[Trang-nguyen]Lệnh git stash sẽ loại bỏ các thay đổi khỏi index của bạn và xóa stash chúng sau đó. Nó có ích nếu bạn muốn tạm dừng những gì bạn đang làm và làm việc khác trong một thời gian. Bạn có thể đặt stash nhiều hơn một bộ thay đổi cùng một lúc.
[Cedrus-Nguyen] dùng để tạm thời đưa các thay đổi của repo (các thay đổi chưa commit) và một bộ nhớ tạm

[Stanley-Tran]

> **Stash** là vùng lưu trữ các thay đổi cục bộ nhưng chưa có ý định commit. Nó được ứng dụng khi người dùng muốn lưu trữ thay đổi tạm thời và chuyển branch, tránh việc commit quá nhiều. Các thay đổi ở **Stash** được lưu trữ như một phần tử của **stack**.
[John-Nguyen]
* **Stash** là gì?
    - Lệnh git stash sẽ loại bỏ các thay đổi khỏi chỉ mục của bạn và xóa stashes chúng đi sau.
    - Nó có ích nếu bạn muốn tạm dừng những gì bạn đang làm và làm việc khác trong một khoảng thời gian. Bạn không thể đặt stash nhiều hơn một bộ thay đổi ở cùng một thời điểm.
## Tags

> Là chức năng đặt tên một cách đơn giản, cho phép ta xác định một cách rõ ràng các phiên bản mã nguồn của dự án

[Trang-nguyen]Tags cung cấp một cách để theo dõi các commit quan trọng.
[Cedrus-Nguyen] Tag là một tên dùng để đánh dấu một điểm nào đó trong lịch sử quá trình commit khi cho rằng điểm đó là quan trọng, cần chú ý.

[Stanley-Tran]

> **Tags** dùng để đánh dấu các điểm nào đó trong lịch sử commit khi bạn cho rằng điểm đó quan trọng, cần phải chú ý.
[John-Nguyen]
* **Tags** là gì?
    - Tags cung cấp cho bạn một cách để theo dõi các commit quan trọng. Các tags nhẹ chỉ đơn giản đóng vai trò là con trỏ trong khi các tags chú thích được lưu trữ dưới dạng các đối tượng đầy đủ.
## Upstream

> Đề cập tới nơi ta push các thay đổi của dự án, thường là nhánh chính (master branch)
> [Trang-nguyen]thượng nguồn dòng thời gian là nơi bạn sao chép từ Repository.
> [Cedrus-Nguyen] Upstream là thuật ngữ để chơi nơi bạn có thể push các thay đổi trong nhóm chính

```
khi bạn tạo một nhánh mới và cần push nhánh đó lên remote, đó được gọi là upstream

Còn downtream là clone, checkout
```

[Stanley-Tran]

> **Upstream** là thuật ngữ đề cập đến nơi bạn push các thay đổi của mình, thường là nhánh chính **(master/main)**.

[John-Nguyen]
* **Upstream** là gì?
    - Trong ngữ cảnh của Git, upstream đề cập đến nơi bạn push các thay đổi của mình, thường là nhánh chính (master branch).
## Working Directory

[Trang-nguyen]là nhánh thời gian của máy để tạo ra những thay đổi của riêng bạn
[Cedrus-Nguyen] khu vực làm việc hiện tại của project, nó hiển thị thông tin các file chỉnh sửa, file tạo mới, file đã xóa,...

File nào đang ở khu vực này sẽ có trạng thái là modified

[Stanley-Tran]

> **Working Directory** là nơi thực hiện các thao tác file đã có như thêm, sửa, xóa,... trước khi được đưa lên **staging area**.
[John-Nguyen]
* **Working Directory** là gì?
    - Thư mục làm việc (Working tree) - Chứa bản sao phiên bản cụ thể của dự án
    - Working directory là nơi các file mới được tạo, file cũ bị xóa hoặc nơi thực hiện các thay đổi đối với các file đã có.
## Staging area

[Trang-nguyen]Đây là một khu vực trung gian nơi các thay đổi có thể được sửa đổi và xem xét trước khi commit lên Repository.
[Cedrus-Nguyen] staging area: khu vực trung gian, lưu trữ những thay đổi đối với các file, chuẩn bị cho việc commit.

Các file ở trạng thái này có trạng thái là stagged

[Stanley-Tran]

> **Staging area** hay còn được biết tới tên gọi chỉ mục (index), có khả năng lưu trữ các thay đổi trước khi thực hiện commit.
[John-Nguyen]
* **Staging area** là gì?
    - Sau khi thay đổi được thực hiện ở working directory, chúng sẽ được thêm vào staging area. Do đó, staging area đôi khi còn được gọi là index.
## Commit area

[Trang-nguyen]là khu vực mà các thay đổi từ nhánh thời gian tham gia vào dòng thời gian chính thức
[Cedrus-Nguyen] sau khi commit (cam kết), các file sẽ ở staging area.
Các file ở trạng thái này có trạng thái là commited

[Stanley-Tran]

> **Commit area** có thể được hiểu là **local repository**, là vùng lưu trữ các commit.
[John-Nguyen]
* **Commit area** là gì?
    - Sau khi các thay đổi hoàn tất, staging area sẽ chứa một hoặc nhiều file cần được commit. Việc tạo một commit sẽ khiến Git lấy mã mới từ staging area và đưa commit vào repo chính. Sau đó commit này sau đó được chuyển đến commit area.
