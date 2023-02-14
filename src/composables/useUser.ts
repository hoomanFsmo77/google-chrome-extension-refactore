import {useUserStore} from "src/store/user";
import {computed} from "vue";

export const useUser= ()=>{
    const userStore=useUserStore()
    const loginStatus=computed<boolean>(()=>userStore.getLoginStatus)

    return{loginStatus}
}