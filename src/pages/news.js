import Footer from "../components/Footer"
import Header from "../components/Header"

const NewsPage = {
    async render(){
        const data = await (await fetch(`https://60371dc45435040017721a02.mockapi.io/products`)).json()
        console.log(data);
      return /*html*/`
        <header>
            ${Header.render()}
        </header>
        <main>
            <section class="grid grid-cols-3 gap-8">
                ${
                    data.map(function(post){
                        return /*html*/`
                            <div>
                                <a href="/news/${post.id}"><img src="${post.image}" alt="" class="w-full"/></a>
                                <a href="/news/${post.id}"><h3>${post.title}</h3></a>
                                <p>${post.content}</p>
                            </div>
                        `
                    }).join("")
                }
                
            </section>
        </main>
        <footer>
            ${Footer.render()}
        </footer>
      
      `
    }
}
export default NewsPage