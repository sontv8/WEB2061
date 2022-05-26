import Footer from "../components/Footer"
import Header from "../components/Header"

const HomePage = {
    render(){
      return /*html*/`
        <header>
            ${Header.render()}
        </header>
        <main>
            <section class="grid grid-cols-3 gap-8">
                <div>
                    <img src="https://picsum.photos/200/300" alt="" class="w-full"/>
                    <h3>Tiêu đề bài viết</h3>
                    <p>Nội dung bài viết</p>
                </div>
                <div>
                    <img src="https://picsum.photos/200/300" alt="" class="w-full" />
                    <h3>Tiêu đề bài viết</h3>
                    <p>Nội dung bài viết</p>
                </div>
                <div>
                    <img src="https://picsum.photos/200/300" alt="" class="w-full" />
                    <h3>Tiêu đề bài viết</h3>
                    <p>Nội dung bài viết</p>
                </div>
            </section>
        </main>
        <footer>
            ${Footer.render()}
        </footer>
      
      `
    }
}
export default HomePage