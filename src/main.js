import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Drawer, Tabs, TabPane } from 'element-ui';
import EleButton from './components/button.vue'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Drawer)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.component('ele-button', EleButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
