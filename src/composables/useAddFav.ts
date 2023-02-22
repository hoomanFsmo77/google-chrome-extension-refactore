import {useUserIndex} from "./index";
import {ref} from "vue";

export const useAddFav=()=>{
    const show=ref(true)
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

    const removeCoin = (id:string) => {
        userStore.removeCoinFromFavList(id)
        show.value=false
    }

    return{
        userFavHandler,modalFlag,closeModal,removeCoin,show
    }
}