import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vuetify'
import { feathersClient } from './services/feathers-client'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

feathersClient.service('state-change-api').on('created', state => {
  console.log('state-change-api:', state)
  // TODO: react on changes
})
