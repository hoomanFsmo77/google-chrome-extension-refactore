import {useUserIndex} from "./index";
import {ref} from "vue";

export const useAddFav=()=>{
    const {userStore}=useUserIndex()
    const modalFlag=ref<boolean>(false)
    const userFavHandler = (id:string) => {
        if(userStore.loginStatus){
            modalFlag.value=false
            userStore.favHandler(id)
        }else{
            modalFlag.value=true
        }
    }
    const closeModal = () => {
      modalFlag.value=false
    }

    return{
        userFavHandler,modalFlag,closeModal
    }
}