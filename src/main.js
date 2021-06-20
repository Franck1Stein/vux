import Vue from 'vue'

import VueRouter from 'vue-router'
import Routes from '@/routes'
import { store } from '@/store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Master from "@/components/Master";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(Master),
  router: router,
  store,
  components: { Master },

}).$mount('#app')
