import { createApp } from 'vue'
import App from './App.vue'
import Global from './components/ch6/Global'
import router from './router/index'
let app = createApp(App);
app.component("Global", Global);
app.use(router);
app.mount('#app')
