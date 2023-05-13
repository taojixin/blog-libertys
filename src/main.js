import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import 'normalize.css'
import './assets/main.css'

import loadingDirective from './components/base-loading/loading'
import loadLazyDirective from './utils/imglazy'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('loading', loadingDirective)
app.directive('loadlazy', loadLazyDirective)

app.mount('#app')
