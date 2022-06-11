import { getAll, remove } from "../api/news"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { reRender } from "../utils/reRender"

const ManageNewsPost = {
    async render(){
        const response = await getAll() //gọi hàm getAll từ folder api
        const data = response.data // đổ dữ liệu vào biến data
        return /*html*/`
            <header>
                ${Header.render()}
            </header>
            <main>
                <a href="/admin/post/add" class="btn btn-primary bg-blue-700 text-white px-4 py-2 mb-8 inline-block">Add product</a> 
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        ${data
                            .map(
                                (item, index) => /*html*/ `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${item.title}</td>
                                        <td>${item.content}</td>
                                        <td>
                                            <button class="btn btn-remove bg-red-600 text-white px-4 py-2" data-id=${
                                                item.id
                                            }>Remove</button>
                                            <a href="/admin/post/${
                                                item.id
                                            }/update" class="btn bg-green-600 text-white px-4 py-2">Update</a>
                                        </td>
                                    </tr>`
                            ).join('')}
                        
                    </tbody>
                </table>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        `
    },
    afterRender() {
        const btns = document.querySelectorAll('table .btn'); // tìm tất cả button trong table
        for (let btn of btns) {
            const id = btn.dataset.id; // lấy thuộc tính data-id của button
            btn.addEventListener('click', async function () { //thêm sự kiện click cho button
                if (btn.classList.contains('btn-remove')) { //kiểm tra xem button có chứa class btn-remove hay không, nếu có mới thực hiện việc bên dưới
                    const confirm = window.confirm('Bạn có chắc chắn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id); //gọi hàm xóa từ folder api
                        reRender('app', ManageNewsPost); // gọi hàm reRender từ folder utils để thực hiện việc hiển thị lại trang sau khi đã xóa
                        if (data) {
                            console.log('delete thành công');
                        }
                    }
                }
            });
        }
    }
}

export default ManageNewsPost

