import { add } from "../api/news"
import Footer from "../components/Footer"
import Header from "../components/Header"

const AddNewPost = {
    render(){
        return /*html*/`
            <header>
                ${Header.render()}
            </header>
            <main>
                <h1>Add New Post</h1>
                <form action="" id="add-new">
                    <input type="text" placeholder="title" id="title" class="border block mb-4"/>
                    <input type="text" placeholder="content" id="content" class="border block mb-4"/>
                    <input type="text" placeholder="image" id="image" class="border block mb-4"/>
                    <button class="bg-blue-600 text-white px-8 py-2">Add New</button>
                </form>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        `
    },
    afterRender(){
        document.querySelector("#add-new").addEventListener("submit",function(e){
            e.preventDefault()
            const post = {
                title: document.querySelector("#title").value,
                content: document.querySelector("#content").value,
                image: document.querySelector("#image").value
            }
            console.log(post);
            add(post)
        })
    }
}

export default AddNewPost

