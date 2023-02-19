import {useUserStore} from "../store/user";
import {extractToken} from "../utils/Helper";

export default {
    install(app:any,config:any){
        const token=extractToken()
        const store=useUserStore()
        if(token){
            store.triggerAutoLogin(token)
        }
        
    }
}