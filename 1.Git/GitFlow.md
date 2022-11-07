# Luồng hoạt động trong Git
> Gitflow là một mô hình trừu tượng về quy tình sử dụng git (git workflow), chỉ ra các thức setup các loại branch khác nhau và cách thức để merge chúng lại

![Giflow](https://images.viblo.asia/full/84f47fd1-a009-4beb-8957-26395fe1023d.png)

* Mô hình này bao gồm:

    -Master: Master branch có sẵn trong git và là branch chứa mã nguồn khởi tạo của ứng dụng và các version đã sẵn sàng để release cho người dùng có thể sử dụng (đặt tag ở mỗi version). Thường được cấu hình để người quản lí tương tác.


    ![master](https://images.viblo.asia/f71e46bd-452f-48c1-b451-2f8a25fff458.png)

    -Hotfix: được tạo ra từ nhánh master để sửa nhanh những lỗi nhỏ. Sua khi sửa lỗi thì cần merge vào cả master và develope branch

    ![hotfix](https://images.viblo.asia/9fab3a45-1282-4b45-9db9-f80dc7143ae5.png)

    -Release: Khi mà develope branch đã thực hiện đủ tính năng cho 1 lần release thì sẽ được fork về release branch. Khi branch này được tạo thì một vòng lặp release được bắt đầu: không thêm tính nnăg, chỉ có sửa lỗi, tạo document... Khi mà đã sẵn sàng thì sẽ được merge về master branch

    ![release](https://images.viblo.asia/7b05bf3e-e652-4ef5-817d-bef89314ef7c.png)

    -Develope: khởi tạo từ master branch, lưu lại tất cả lịch sử thay đổi của mã nguồn. Là branch merge code của tất cả feature branch

    ![develope](https://images.viblo.asia/6e91e85b-3152-4a04-a04d-160aa0bd5135.png)

    -Feature: khởi tạo từ Develope branch, mỗi khi phát triển một tính năng mới, ta cần tạo một branch để viết mã nguồn cho từng feature. Feature thì khong nên tương tác trực tiếp với master branch

    ![feature](https://images.viblo.asia/e4f9e958-2d5e-4f9e-98bc-9c77453b5983.png)

- Subversion-Style Workflow

## Luồng trên một nhánh


## Luồng giữa các nhánh trên Local

[Cedrus-Nguyen]
- git checkout: chuyển nhánh
- git checkout -b branch_name để tạo rồi chuyển sang nhánh đó
- git merge _branch_name: hợp nhất nhánh branch_name vào nhánh hiện tại
- git rebase _branch_name: chỉnh sửa commit theo nhánh branch_name

## Luồng giữa Local và Remote

[Stanley-Tran]
![alt](https://i.ibb.co/H2DLngS/workflow-Git.png)

## **1. Giai đoạn thiết lập**

***
**TH1**: Project có sẵn trên **remote repo**.

* `git clone`: để clone toàn bộ project từ **remote repo** về **working directory**.

**TH2**: Project được khởi tạo từ **working directory**.

* `git init`: để khởi tạo repo cho project. Đưa toàn bộ source code từ **working directory** lên **local repo**.

## **2. Giai đoạn phát triển**

***
**B1**: các thay đổi file hiện tại đang được lưu trữ tại **working directory**.

**B2**: `git add`: mọi thay đổi được lưu trữ tại **staging area**.

**B3**: `git commit`: phiên bản code đã thay đổi được commit lên **local repo**.

**B4**: `git push`: đẩy commit lên **remote repo**.

**B5**: merge nhánh.
> Chú ý: sử dụng kết hợp `git fetch/pull` để copy phiên bản mới nhất từ **remote repo** về **local repo** để fix nếu có **conflict**.
[John-Nguyen]
* Gitflow thực sự chỉ là một ý tưởng trừu tượng của quy trình công việc Git. Điều này có nghĩa là nó ra lệnh loại chi nhánh nào được thiết lập và làm thế nào để hợp nhất chúng lại với nhau.
* Làm thế nào để hoạt động
    - git hoat động theo kiểu hệ thống kiểm soát phiên bản phân tán:
    1. Hệ thống kiểm soát phiên bản phân tán DVCS
    >* Các hệ thống này không nhất thiết phải dựa vào một máy chủ trung tâm để lưu trữ tất cả các phiên bản tập tin của dự án.
    >* Trong VCS phân tán, mọi người đóng góp đều có một bản sao cục bộ hoặc có bản sao được nhân bản "clone" của kho lưu trữ chính, tức là mọi người đều duy trì một kho lưu trữ cục bộ của riêng họ chứa tất cả các tệp và dữ liệu có trong kho lưu trữ chính.
    >![alt](https://aptechbmt.edu.vn/uploads/hoc-lap-trinh/2019_11/git-series/distributed-version-control-system-workflow-what-is-git-aptech-buon-ma-thuot-768x508.png)
    >* Họ có thể commit hay update trong local mà không có sự can thiệp nào
    >* Họ có thể cập nhật kho lưu trữ cục bộ của họ với dữ liệu mới từ máy chủ trung tâm bằng một hoạt động được gọi là "pull" kéo về và đẩy ngược lại các thay đổi đối với kho lưu trữ chính bằng một hoạt động được gọi là "push" đẩy từ kho lưu trữ cục bộ của họ lên kho chính.
    >*  Hành động nhân bản "clone" toàn bộ kho lưu trữ vào máy trạm của bạn để có được một kho lưu trữ cục bộ mang lại cho bạn những lợi thế sau:
    >- Tất cả các hoạt động (ngoại trừ pull và push) đều rất nhanh vì công cụ chỉ cần truy cập vào ổ cứng chứ không phải máy chủ từ xa. Do đó, không phải lúc nào bạn cũng cần kết nối internet.
    >- Việc "commit" ủy thác các bộ thay đổi mới có thể được thực hiện cục bộ mà không cần thao tác dữ liệu trên kho lưu trữ chính. Khi bạn đã có sẵn một nhóm các bộ thay đổi, bạn có thể đẩy "push" tất cả chúng cùng một lúc.
    >- Vì mọi người đóng góp đều có một bản sao đầy đủ của kho dự án, họ có thể chia sẻ các thay đổi với nhau nếu họ muốn nhận được một số phản hồi trước khi ảnh hưởng đến các thay đổi trong kho lưu trữ chính.
    >- Nếu máy chủ trung tâm bị sập bất cứ lúc nào, dữ liệu bị mất có thể được phục hồi dễ dàng từ bất kỳ kho lưu trữ cục bộ nào của người đóng góp.
    2. Mô hình luồng Git hiệu quả
    >![alt](https://evotek.vn/wp-content/uploads/2020/11/git-flow-773x1024.png)
    >* Các nhánh chính

    >![alt](https://evotek.vn/wp-content/uploads/2020/11/main-branches2x-279x420.png)

    >Repo trung tâm (thường là repo của công ty) sẽ chứa các nhánh chính là
    >>master: nhánh chính chứa source code ổn định, đã được kiểm tra và có thể triển khai lên production.
    >
    >>develop: nhánh chính chứa source code mới nhất.
    >* Các nhánh hỗ trợ

    > Bên cạnh các nhánh chính, sẽ có các nhánh hỗ trợ để cho team member có thể làm việc song song, dễ dàng tracking theo features, chuẩn bị cho release hoặc fix nhanh các vấn đề production. Các nhánh hỗ trợ này sẽ bị xóa đi sau khi dùng.
    >>* Feature branches
    >>* Release branches
    >>* Hotfix branches
    >1. Feature branches
    >>* Tách từ: develop
    >>* Merge vào: develop
    >>* Quy tắc đặt tên: tự do, ngoại trừ master, develop, release-*, hotfix-*

    >![alt](https://evotek.vn/wp-content/uploads/2020/11/fb@2x-112x300.png)

    >Feature branches (các nhánh tính năng) được sử dụng để phát triển các tính năng mới phục vụ cho release sau này. Mỗi tính năng sẽ là một nhánh riêng, được tạo từ source mới nhất của develop và sau khi phát triển xong sẽ được merge vào develop.
    >* Release branches
    >>* Tách từ: develop
    >>* Merge vào: develop và master
    >>* Quy tắc đặt tên: release-*

    >Release branches được sử dụng để chuẩn bị cho release bản production mới. Tất cả các công việc cuối cùng trước khi release sẽ được thực hiện ở đây, ngoài ra còn để fix nốt các bugs lẻ tẻ, chuẩn bị meta-data (version number, build dates, etc..). Nhờ việc tách nhánh ra khỏi develop, chúng ta có thể tiếp tục phát triển các features cho đợt release khác một cách bình thường.

    >Thời điểm được lựa chọn để tách nhánh từ develop là khi develop phản ánh được trạng thái mong muốn cho việc release mới. Ít nhất lúc đó tất cả các features dành cho đợt release phải được merge vào develop rồi. Những features nhắm đến các lần release sau thì chưa được merge vào, phải đợi sau khi tách nhánh.

    >Chúng ta sẽ tiến hành đánh version theo rule của dự án ngay sau khi tạo release branch.

    >Branch mới này sẽ tồn tại cho đến khi việc release được thực hiện gọn ghẽ. Trong khoảng thời gian đó, có thể thực hiện fix bugs ở branch này, tuy nhiên nghiêm cấm việc bổ sung feature mới lên đó. Tốt nhất nếu có features mới thì hãy merge vào develop, và đợi đợt release sau.

    >Khi source code trên release branch sẵn sàng để release, đầu tiên, phải merge vào master, sau đó phải đc merge lại vào develop để những lần release sau cũng chứa những thay đổi ở lần này.

    >* Hotfix branches
    >![alt](https://evotek.vn/wp-content/uploads/2020/11/hotfix-branches@2x-312x420.png)

    >>* Tách từ: master
    >>* Merge vào: develop và master
    >>* Quy tắc đặt tên: hotfix-*
    >Hotfix branches cũng giống release branches ở chỗ được sử dụng để chuẩn bị cho việc release production mới, chỉ khác ở chỗ là ko có plan từ trước. Khi có một bug nghiêm trọng trên bản production cần được giải quyết ngay lập tức, một hotfix branch sẽ được tách ra từmaster và được đánh version để nhận biết.

    >Ưu điểm của việc tách nhánh này ở chỗ các team members khác có thể tiếp tục công việc ở develop trong khi những người khác có thể tập trung vào fix bug của production.

    >Sau khi kết thúc sửa lỗi, những thay đổi phải được merge lại master, đồng thời cũng phải merge vào develop để ngăn lỗi xảy ra ở những lần release sau.

    >Tuy nhiên, có một điểm cần lưu ý rằng: khi đang tồn tại một release branch thì cần phải merge hotfix vào release branch đó, thay cho develop.
