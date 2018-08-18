import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { feathersClient } from './services/feathers-client'
import { deleteSession, getSession } from './services/session-service'
import './vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

feathersClient.service('state-change').on('created', payload => {
  if (getSession()) {
    deleteSession()
    return
  }
  const routeName = (payload.action === 'game') ? 'child' : 'face'
  router.push({ name: routeName })
})
