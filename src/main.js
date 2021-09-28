import { createApp } from 'vue'
import router from './router.js'
import store from './store/index.js'

import App from './App.vue'
import TheLogo from './components/ui/TheLogo.vue'
import SocialIcons from './components/ui/SocialIcons.vue'

const app = createApp(App);

app.use(router);
app.use(store);

app.component('the-logo', TheLogo);
app.component('social-icons', SocialIcons);

app.mount('#app');
