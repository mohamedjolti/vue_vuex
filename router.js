import VueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "./src/components/HelloWorld"
import Child from "./src/components/Child"

Vue.use(VueRouter);

const routes=[
    {path:"/hello",component:HelloWorld},
    {path:"/Child",component:Child}

]

export default new VueRouter({
    base:"/",
    routes:routes
})