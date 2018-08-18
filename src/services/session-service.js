import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

const createSession = () => {
  Vue.cookies.set('session', (new Date()).getTime())
}

const getSession = () => {
  return Vue.cookies.isKey('session') ? Vue.cookies.get('session') : false
}

const deleteSession = () => {
  return Vue.cookies.isKey('session') ? Vue.cookies.remove('session') : false
}

export {
  createSession,
  getSession,
  deleteSession
}
