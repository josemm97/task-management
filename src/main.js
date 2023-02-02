import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router/router'
// import "bootstrap";
createApp(App).use(router).mount('#app')
