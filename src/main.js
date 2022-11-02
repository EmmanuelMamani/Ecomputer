import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  "./assets/bootstrap.bundle.min.js"
import "./assets/bootstrap.min.css"
//import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
