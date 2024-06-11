import { createApp } from 'vue'
import './assets/style/fonts.css'
import routers from './router/router.js'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(routers).use(pinia).mount('#app')
