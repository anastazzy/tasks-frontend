import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import axios from 'axios';
import router from './router';

axios.defaults.baseURL = '/api/'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

