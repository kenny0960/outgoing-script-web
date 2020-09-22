import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './app/components/App.vue';
import router from './app/router';
import store from './app/store';
import { Plugin } from 'vue-fragment';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(Plugin);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
