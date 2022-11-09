import { createApp } from 'vue'
import App from './App.vue'
import Global from './components/ch6/Global'
let app = createApp(App);
app.component("Global", Global)
app.mount('#app')
