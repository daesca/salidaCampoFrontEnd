import Vue     	   from 'vue';
import store       from '../store/index.js';
import App     	   from './App.vue';
import vuetify 	   from './plugins/vuetify';
import router  	   from '../router/index.js';
import VueResource from 'vue-resource';
import 'es6-promise/auto';

Vue.config.productionTip = false;
Vue.use(VueResource);


new Vue({
  store,
  vuetify,
  router,
  VueResource,
  render: h => h(App)
}).$mount('#app')
