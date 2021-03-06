import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './sytle/arco.css'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import "./utils/media.css"
import * as fetch from "./utils/api/fetch.js"

const app = createApp(App).use(store).use(router).use(ArcoVue).use(ArcoVueIcon)

app.config.globalProperties.$fetch = fetch

app.mount('#app')