
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script> */}
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'boxicons/css/boxicons.min.css';
import 'select2/dist/css/select2.css';
// import 'code.jquery.com/jquery-3.6.0.min.js';
// import 'cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js';
// Your Vue component or other JavaScript code

// import { BootstrapVue } from 'bootstrap-vue';

createApp(App).use(router).mount('#app');
