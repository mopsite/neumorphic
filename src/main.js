import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import './styles/themes.css'
import './styles/common.css'

createApp(App).use(router).mount('#app')
