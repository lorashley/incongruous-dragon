import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'

Vue.component('codec-instance', {
  props: ['codec'],
  template: '<li>{{ codec.name }}</li>'
})

var myapp = new Vue({
  el: '#app',
  render: h => h(App2)
})