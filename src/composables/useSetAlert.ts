import {useUserIndex} from "./index";
import {reactive} from "vue";

export const useSetAlert=()=>{
    const {loginStatus,userStore}=useUserIndex()
    const alertModalInfo=reactive<{trigger:boolean,msg:string}>({
        trigger:false,
        msg:''
    })
    const setAlert = (id:string) => {
        if(loginStatus.value){
            userStore.alertHandler(id,alertModalInfo)
            alertModalInfo.trigger=true
        }
    }
    const closeAlertModal = () => {
      alertModalInfo.trigger=false
    }

    return{
        setAlert,alertModalInfo,closeAlertModal
    }
}