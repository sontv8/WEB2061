import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import DetailPage from "./pages/detail-post";
import AddNewPost from "./pages/add-new-post";

const router = new Navigo("/",{linksSelector:"a"})
const print = async function(content,id){
  document.querySelector("#app").innerHTML = await content.render(id);
  if(content.afterRender){
    content.afterRender()
  }
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
  },
  "/admin/post/add": function(){
    print(AddNewPost)
  }
})

router.resolve()