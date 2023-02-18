import {EmailValidation, CheckEmail, User_Info, SetCookie, LoginValidation, ExtractUser} from "./Types";
import {ofetch} from "ofetch";
export let favCoins=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']

export const emailRegex=/^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/
export const passwordRegex=/^([0-9A-Za-z\#\$\@\*\!]{8,16})$/

export const emailValidation:EmailValidation = (data, email):boolean => {
    return  data.some(user=>{
        return user[1].email===email.trim()
    })
}

export const checkEmail:CheckEmail = async (email:string):Promise<boolean> => {
    try {
        const data=await ofetch(process.env.USER_URL as string)
         return  !emailValidation(Object.entries(data),email)
    }catch (err) {
        return  true
    }
}
export const loginValidation:LoginValidation = (data:any[],user_info:User_Info):boolean => {
    return data.some(user=>{
        return user[1].email===user_info.email.trim() && user[1].password===user_info.password.trim()
    })
}
export const extractUser:ExtractUser = (data:any[],user_info:User_Info) => {
   return  data.filter(user=> user[1].email===user_info.email && user[1].password===user_info.password)[0]
}

export const setCookie:SetCookie=(day:number,id:string)=>{
    let date=new Date()
    date.setTime(date.getTime() + (day *24*60*60*1000))
    document.cookie=`token=${id};path=/;expires=${date}`
}
export const extractToken=()=>{
    return document.cookie.slice(document.cookie.indexOf('=')+1)
}
export const deleteCookie=(day:number)=>{
    let date=new Date()
    date.setTime(date.getTime() - (day *24*60*60*1000))
    document.cookie=`token=;path=/;expires=${date}`
}
