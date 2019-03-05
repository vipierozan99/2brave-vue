import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'
import VueScrollTo from "vue-scrollto"

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
