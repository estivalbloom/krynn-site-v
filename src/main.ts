import { createApp } from 'vue'
import './style.css'
import './embla.css'
import App from './App.vue'
import VueFeather from 'vue-feather';

createApp(App)
	.component(VueFeather.name || 'error', VueFeather)
	.mount('#app')
