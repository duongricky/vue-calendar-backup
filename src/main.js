import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBQU57vaz-x0sGwrNG44oWJ2aQKrpS1Vpg",
  authDomain: "vuejs-calender-app.firebaseapp.com",
  databaseURL: "https://vuejs-calender-app.firebaseio.com",
  projectId: "vuejs-calender-app",
  storageBucket: "vuejs-calender-app.appspot.com",
  messagingSenderId: "393857154411",
  appId: "1:393857154411:web:cb6d839488d13a6cfba02e"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
