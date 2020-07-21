import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { BootstrapVue } from 'bootstrap-vue'
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
