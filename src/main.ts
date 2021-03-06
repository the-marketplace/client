import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Example of how to not import all of element ui:
// import { Button, Select } from 'element-ui';

// Vue.use(Button);
// Vue.use(Select);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
