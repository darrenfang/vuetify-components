import 'vuetify/src/stylus/main.styl'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './app'
import Components from '~components/index'

Vue.use(Components)
Vue.use(Vuetify)

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  ...App
})
