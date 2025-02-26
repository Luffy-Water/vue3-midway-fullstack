import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'uno.css'
import App from './App.vue'
import router from './router'
import '@/common/css/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
