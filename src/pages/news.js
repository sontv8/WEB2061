import Footer from "../components/Footer"
import Header from "../components/Header"
import newsList from "../data"

const NewsPage = {
    render(){
      return /*html*/`
        <header>
            ${Header.render()}
        </header>
        <main>
            <section class="grid grid-cols-3 gap-8">
                ${
                    newsList.map(function(post){
                        return `
                            <div>
                                <img src="${post.image}" alt="" class="w-full"/>
                                <h3>${post.title}</h3>
                                <p>${post.desc}</p>
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