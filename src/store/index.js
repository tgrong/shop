import { createPinia } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist';
const pinia = createPinia()
pinia.use(piniaPluginPersist)
// pinia.use(({ store }) => {
//     store.tip = '扩展属性';
//     store.$state.address = '扩展状态属性';
// })
export default pinia;