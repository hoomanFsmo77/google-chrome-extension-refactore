import {defineStore} from "pinia";
import {User_Store} from "src/utils/Types";


export const useUserStore=defineStore('user',{
    state:():User_Store=>{
        return {
            loginStatus:false
        }
    },
    getters:{
        getLoginStatus(state){
            return state.loginStatus
        }
    },



})