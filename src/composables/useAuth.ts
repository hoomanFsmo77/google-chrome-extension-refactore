import {emailRegex,passwordRegex} from "src/utils/Helper";
import {User_Info} from "../utils/Types";
import {ref,reactive} from "vue";
import {useUserIndex} from "./index";
import {checkEmail} from 'src/utils/Helper'
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




    return{

    }
}

export const useSignUp=()=>{
    const {userStore}=useUserIndex()
    const errorFlag=ref<boolean>(false)
     const user_info=reactive<User_Info>({
         email:'hoomanmousavi77@gmail.com',
         password:'13777731Ho@'
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