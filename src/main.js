import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/main.css'

import loadingDirective from './components/base-loading/loading'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('loading', loadingDirective)

app.mount('#app')
