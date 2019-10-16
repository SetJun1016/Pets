import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home.vue"
import Bread from "./views/Bread.vue"
import Web from "./views/Web.vue"
import Dog from "./views/Dog.vue"
import Service from "./views/Service.vue"
import Content from "./views/Content.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/home",component:Home},
    {path:"/bread",component:Bread},
    {path:"/web",component:Web},
    {path:"/dog",component:Dog},
    {path:"/service",component:Service},
    {path:"/content",component:Content}
  ]
})
