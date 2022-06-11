import { getAll, remove } from "../api/news"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { reRender } from "../utils/reRender"

const ManageNewsPost = {
    async render(){
        const response = await getAll()
        const data = response.data
        return /*html*/`
            <header>
                ${Header.render()}
            </header>
            <main>
                <a href="/#/product/add" data-navigo class="btn btn-primary">Add product</a>
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
                        )
                        .join('')}
                        
                    </tbody>
                </table>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        `
    },
    afterRender() {
        const btns = document.querySelectorAll('table .btn'); // nodeList=[btn]
        for (let btn of btns) {
            // lấy thuộc tính data-id của button
            const id = btn.dataset.id;
            // event click
            btn.addEventListener('click', async function () {
                if (btn.classList.contains('btn-remove')) {
                    const confirm = window.confirm('Bạn có chắc chắn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id);
                        reRender('app', ManageNewsPost);
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

