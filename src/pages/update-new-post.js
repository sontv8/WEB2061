import { add, get, update } from "../api/news"
import Footer from "../components/Footer"
import Header from "../components/Header"

const UpdateNewPost = {
    async render(id){
        const response = await get(id)
        const post = response.data
        return /*html*/`
            <header>
                ${Header.render()}
            </header>
            <main>
                <h1>Update New Post</h1>
                <form action="" id="update-new">
                    <input type="text" placeholder="title" value="${post.title}" id="title" class="border block mb-4"/>
                    <input type="text" placeholder="content" value="${post.content}" id="content" class="border block mb-4"/>
                    <input type="text" placeholder="image" id="image" value="${post.image}" class="border block mb-4"/>
                    <button class="bg-blue-600 text-white px-8 py-2">Update New</button>
                </form>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        `
    },
    afterRender(id){
        document.querySelector("#update-new").addEventListener("submit",function(e){
            e.preventDefault()
            const postUpdate = {
                id: id,
                title: document.querySelector("#title").value,
                content: document.querySelector("#content").value,
                image: document.querySelector("#image").value
            }
            // console.log(postUpdate);
            update(postUpdate)
        })
    }
}

export default UpdateNewPost

