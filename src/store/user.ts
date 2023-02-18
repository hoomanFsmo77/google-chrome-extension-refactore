import {defineStore} from "pinia";
import {User_Store,User_Info} from "src/utils/Types";
import {ofetch} from "ofetch";
import {loginValidation, setCookie,extractUser} from "../utils/Helper";

export const useUserStore=defineStore('user',{
    state:():User_Store=>{
        return {
            loginStatus:false,
            signUpFetchFlag:false,
            signInErrorFlag:false,
            email:undefined
        }
    },
    getters:{
        getLoginStatus(state){
            return state.loginStatus
        }
    },
    actions:{
        async triggerSignUp(user_info:User_Info){
            this.signUpFetchFlag=true
            try {
                const data=await ofetch(process.env.USER_URL as string,{
                    method:'POST',
                    body:JSON.stringify({
                        email:user_info.email,
                        password:user_info.password
                    })
                })
                this.email=user_info.email
                this.loginStatus=true
                setCookie(10,data.name)
            }catch (err) {
                this.loginStatus=false
                console.log(err)
            }finally {
                this.signUpFetchFlag=false
            }
        },
        async triggerSignIn(user_info:User_Info){
            this.signInErrorFlag=false
            try {
                const data=await ofetch(process.env.USER_URL as string)
                this.signInErrorFlag= !loginValidation(Object.entries(data),user_info)
                if(!this.signInErrorFlag){
                    const targetUser=extractUser(Object.entries(data),user_info)
                    this.email=user_info.email
                    this.loginStatus=true
                    setCookie(10,targetUser[0])

                }
            }catch (e) {
                this.signInErrorFlag=true
            }


         }
    }



})