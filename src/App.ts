//////////// Tailwind.config
import './style/Tailwind.config/Tailwind.base.scss'
import './style/Tailwind.config/Tailwind.component.scss'
import './style/Tailwind.config/Tailwind.utilities.scss'


//// App
import {createApp} from "vue";
import App from "./App.vue";


//// pinia
import {createPinia} from "pinia";

//// router
import router from "./router.config";

const app=createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')