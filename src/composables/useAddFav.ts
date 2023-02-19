import {useUserIndex} from "./index";

export const useAddFav=()=>{
    const {userStore}=useUserIndex()
    const userFavHandler = (id:string) => {
        if(userStore.loginStatus){
            userStore.favHandler(id)
        }
    }


    return{
        userFavHandler
    }
}