import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from './store/index'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDctLs6ZF7d7WSJUksl5EQPXl2qEKl9nM8",
    authDomain: "oranje-inventaris-v2.firebaseapp.com",
    databaseURL: "https://oranje-inventaris-v2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "oranje-inventaris-v2",
    storageBucket: "oranje-inventaris-v2.appspot.com",
    messagingSenderId: "863727250204",
    appId: "1:863727250204:web:a5f2ffa5e81ecba74868d9"
};

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
