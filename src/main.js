import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import DetailPage from "./pages/detail-post";

const router = new Navigo("/",{linksSelector:"a"})
const print = async function(content,id){
  document.querySelector("#app").innerHTML = await content.render(id);
}

router.on({
  "/": function(){
    print(HomePage)
  },
  "/about": function(){
    print(AboutPage)
  },
  "/news": function(){
    print(NewsPage)
  },
  "/news/:id" : function(value){
    console.log(value.data.id)
    print(DetailPage,value.data.id)
  }
})

router.resolve()