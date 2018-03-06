import Vue from 'vue'
import App from './App.vue'

import vueEventCalendar from '../src/'
import VueEvents from 'vue-events'

// import vueEventCalendar from '../dist'
// import '../dist/style.css'
Vue.use(vueEventCalendar, {locale: 'en', weekStartOn: 1})
Vue.use(VueEvents)

new Vue({
  el: '#app',
  render: h => h(App)
})
