import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios)
app.use(VueQueryPlugin)

app.mount('#app')
