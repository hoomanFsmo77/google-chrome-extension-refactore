import {emailRegex,passwordRegex} from "../utils/Helper";
import {User_Info} from "../utils/Types";
import {ref,reactive} from "vue";
import {useUserIndex} from "./index";
import {checkEmail} from '../utils/Helper'
export const useAuth=()=>{
    const isLogin=ref<boolean>(false)
    const toggleAuthState = () => {
      isLogin.value=!isLogin.value
    }


    return{
        isLogin,toggleAuthState
    }
}

export const useSignIn=()=>{
    const {userStore}=useUserIndex()

    const user_info=reactive<User_Info>({
        email:'',
        password:''
    })

    const signInTrigger = () => {
         userStore.triggerSignIn(user_info)
    }


    return{
        signInTrigger,user_info
    }
}

export const useSignUp=()=>{
    const {userStore}=useUserIndex()
    const errorFlag=ref<boolean>(false)
     const user_info=reactive<User_Info>({
         email:'',
         password:''
     })

    const signupHandler = async () => {
        errorFlag.value=false
        if(emailRegex.test(user_info.email) && passwordRegex.test(user_info.password) &&  await checkEmail(user_info.email))
        {
            userStore.triggerSignUp(user_info)
            errorFlag.value=false
        }else{
            errorFlag.value=true
        }
    }


    return{
        signupHandler,user_info,errorFlag
    }
}