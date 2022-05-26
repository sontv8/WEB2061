import Footer from "../components/Footer"
import Header from "../components/Header"
import newsList from "../data"

const DetailPage = {
    render(){
        const post = newsList.find(function(item){
            return item.id == 3
        })
        console.log(post);
        return /*html*/`
            <header>
                ${Header.render()}
            </header>
            <main>
                <section class="grid grid-cols-3 gap-8">
                    <div>
                        <img src="${post.image}" alt="" class="w-full" />
                        <h3>${post.title}</h3>
                        <p>${post.desc}</p>
                    </div>
                </section>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        
        `
    }
}
export default DetailPage