// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import AddFilmForm from './components/AddFilmForm.vue'
import AddCinemaForm from './components/AddCinemaForm.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/addFilm', component: AddFilmForm },
        { path: '/addCinema', component: AddCinemaForm },
    ]
});
const myApp = createApp(App)

myApp.use(router)
myApp.use(Quasar, {
    plugins: { Notify }, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')