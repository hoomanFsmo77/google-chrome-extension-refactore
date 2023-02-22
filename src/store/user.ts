import {defineStore} from "pinia";
import {User_Store,User_Info} from "../utils/Types";
import {ofetch} from "ofetch";
import {createNotification,removeNotification,removeAllAlerts,backgroundInit} from "../background";
import {
    loginValidation,
    setCookie,
    extractUser,
    updateUserFav,
    deleteCookie,
    storeData,
    updateUserAlert
} from "../utils/Helper";

export const useUserStore=defineStore('user',{
    state:():User_Store=>{
        return {
            loginStatus:false,
            favCoins:[],
            alertCoins:[],
            signUpFetchFlag:false,
            signInErrorFlag:false,
            email:undefined,
            interval:1
        }
    },
    getters:{
        getLoginStatus(state){
            return state.loginStatus
        },
        getFavCoinLength(state):number{
            return state.favCoins.length
        },
        isCoinExist:(state)=>(id:string):boolean=>{
            return  state.favCoins.includes(id)
        },
        getFavCoinList(state){
            return state.favCoins
        },
        isAlertSet:(state)=>(id:string)=>{
            return state.alertCoins.includes(id)
        },
        getInterval(state){
            return state.interval
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
                    const userFetchedData:any=Object.entries(data)[0][1]
                    const targetUser=extractUser(Object.entries(data),user_info)
                    this.email=user_info.email
                    this.loginStatus=true
                    this.favCoins=userFetchedData?.fav?.fav ?? []
                    this.alertCoins=userFetchedData?.alert?.alert ?? []
                    this.alertCoins.forEach(coin=>createNotification(coin))
                    storeData<string>(this.favCoins,process.env.FAV_LIST as  string)
                    storeData<string>(this.favCoins,process.env.ALERT_LIST as  string)
                    setCookie(10,targetUser[0])
                }
            }catch (e) {
                this.signInErrorFlag=true
            }


         },
        resetUser(){
            deleteCookie(10)
            this.email=undefined
            this.loginStatus=false
            this.favCoins=[]
            this.alertCoins=[]
            storeData<string>([],process.env.FAV_LIST as  string)
            storeData<string>([],process.env.ALERT_LIST as  string)
            removeAllAlerts()
        },
        async triggerAutoLogin(token:string){
            try {
                const data=await ofetch(`https://extension-cdfdf-default-rtdb.firebaseio.com/users/${token}.json`)
                this.email=data.email
                this.loginStatus=true
                this.favCoins=data?.fav?.fav ?? []
                this.alertCoins=data?.alert?.alert ?? []
                storeData<string>(this.favCoins,process.env.FAV_LIST as  string)
                storeData<string>(this.alertCoins,process.env.ALERT_LIST as  string)
                backgroundInit()
            } catch (e) {
                this.resetUser()
            }
        },
        favHandler(id:string){
            if(this.isCoinExist(id)){
                this.favCoins.splice(this.favCoins.indexOf(id),1)
                if(this.isAlertSet(id)){
                    this.alertCoins.splice(this.alertCoins.indexOf(id),1)
                    removeNotification(id)
                    storeData<string>(this.alertCoins,process.env.ALERT_LIST as  string)
                    updateUserAlert(this.alertCoins)
                }

            }else{
                this.favCoins.push(id)
            }
            storeData<string>(this.favCoins,process.env.FAV_LIST as  string)
            updateUserFav(this.favCoins)

        },
        removeCoinFromFavList(id:string){
            this.favCoins.splice(this.favCoins.indexOf(id),1)
            storeData<string>(this.favCoins,process.env.FAV_LIST as  string)
            updateUserFav(this.favCoins)
            if(this.isAlertSet(id)){
                this.alertCoins.splice(this.alertCoins.indexOf(id),1)
                removeNotification(id)
                updateUserAlert(this.alertCoins)
                storeData<string>(this.alertCoins,process.env.ALERT_LIST as  string)
            }
        },
        alertHandler(id:string,modalInfo:{trigger:boolean,msg:string}){
            if(this.isAlertSet(id)){
                this.alertCoins.splice(this.alertCoins.indexOf(id),1)
                modalInfo.msg='Alert removed!'
                removeNotification(id)
            }else{
                this.alertCoins.push(id)
                modalInfo.msg=`Alert created!<br/>We will notify you every ${this.getInterval} minutes.`
                createNotification(id)
            }
            storeData<string>(this.alertCoins,process.env.ALERT_LIST as  string)
            updateUserAlert(this.alertCoins)
        }
    }



})