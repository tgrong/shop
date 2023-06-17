import { createApp } from 'vue'
import App from './App.vue'
import Global from './components/ch6/Global'
import router from './router/index'
import request from './plugins/axios';
import pinia from "./store/index";
import Vant from 'vant'
import 'vant/lib/index.css';
let app = createApp(App);
app.config.globalProperties.$http = request;
app.component("Global", Global);
app.use(router)
app.use(Vant);
app.use(pinia);

app.mount('#app')
