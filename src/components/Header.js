const Header = {
    render(){
        return /*html*/`
            <img src="https://picsum.photos/1440/500" alt="" />
            <nav class="text-center my-4">
                <li class="inline-block mx-4"><a href="/">Home Page</a></li>
                <li class="inline-block mx-4"><a href="/about">About Page</a></li>
                <li class="inline-block mx-4"><a href="/news">News Page</a></li>
            </nav>
        `
    }
}

export default Header