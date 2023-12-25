import './bootstrap';
import { createApp } from 'vue'
import HelloWorld from './components/HelloWord.vue'

window.app = createApp({
    setup() {
        return {
            message: 'Welcome to Your Vue.js App',
        };
    },
    components: {
        HelloWorld
    },
}).mount('#app');
