import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import 'normalize.css'
import './assets/main.css'

import loadingDirective from './components/base-loading/loading'
import loadLazyDirective from './utils/imglazy'

import NavBar from "./components/nav-bar/index.vue"

import Message from './components/base-message/message'

const app = createApp(App)
app.config.globalProperties.$message = Message

app.use(createPinia())
app.use(router)
app.directive('loading', loadingDirective)
app.directive('loadlazy', loadLazyDirective)
app.component("NavBar", NavBar)

app.mount('#app')
