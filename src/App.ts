//////////// Tailwind.config
import './assets/styles/Tailwind.config/Tailwind.base.scss'
import './assets/styles/Tailwind.config/Tailwind.component.scss'
import './assets/styles/Tailwind.config/Tailwind.utilities.scss'

//////////// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
library.add()


//// App
import {createApp} from "vue";
import App from "./App.vue";


//// pinia
import {createPinia} from "pinia";

//// router
import router from "./router.config";



const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')