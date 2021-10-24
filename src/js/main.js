require('../scss/main.scss');

import { library, dom } from '@fortawesome/fontawesome-svg-core'

import {
  faAngleRight,
  faCheckCircle,
  faEye,
  faSync
} from '@fortawesome/free-solid-svg-icons'


import { createApp } from 'vue';

import router from './router';
import store from './store';

import App from './components/App.vue';


library.add(
  faAngleRight,
  faCheckCircle,
  faEye,
  faSync
)



createApp(App)
  .use(router)
  .use(store)
  .mount('#app');

dom.watch();