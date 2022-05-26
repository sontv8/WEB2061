import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import DetailPage from "./pages/detail-post";

const router = new Navigo("/",{linksSelector:"a"})
const print = function(content){
  document.querySelector("#app").innerHTML = content.render();
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
  "/news/:id" : function(){
    print(DetailPage)
  }
})

router.resolve()