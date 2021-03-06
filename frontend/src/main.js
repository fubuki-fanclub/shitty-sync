import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/main.less'

//THEME
const root = document.querySelector('html');
const theme = localStorage.getItem('theme');

if (['dark', 'light'].includes(theme)) {
    root.dataset['theme'] = theme;
} else {
    localStorage.setItem('theme', 'dark');
    root.dataset['theme'] = 'dark';
}

createApp(App).use(router).mount('#app')
console.log('%c Shitty Sync ', 'color: #FF8C00; font-size: 48px; text-shadow: #FC0 0 0 10px;')
console.log('%chi', 'font-size:5px');