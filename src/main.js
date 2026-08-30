import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
})

app.mount('#app')