import {useUserIndex} from "../composables";

export default {
    install(app:any,config:any){
        const {userStore}=useUserIndex()
        userStore.triggerAutoLogin()
    }
}