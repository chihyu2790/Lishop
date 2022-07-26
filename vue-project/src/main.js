import { createApp } from 'vue'
import pinia from './plugins/pinia'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'

import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.mount('#app')
