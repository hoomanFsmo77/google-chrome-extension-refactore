//////////// Tailwind.config
import './assets/styles/Tailwind.config/Tailwind.base.scss'
import './assets/styles/Tailwind.config/Tailwind.component.scss'
import './assets/styles/Tailwind.config/Tailwind.utilities.scss'

/////// auto login
import auth from "./plugins/auth";

//////////// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faHouse,faMagnifyingGlass,faUser,faX,faStar,faHeart,faArrowUpLong,faArrowDownLong,faArrowLeft,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
library.add(faHouse,faMagnifyingGlass,faUser,faX,faStar,faHeart,faArrowUpLong,faArrowDownLong,faArrowLeft,faUserPlus)


//// App
import {createApp} from "vue";
import App from "src/App.vue";


//// pinia
import {createPinia} from "pinia";

//// router
import router from "src/router";



const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(auth)
app.mount('#app')