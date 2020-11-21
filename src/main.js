import Vue from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "vue-router"
import Routes from "./components/Routes"

Vue.config.productionTip = false

export const bus = new Vue()

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
