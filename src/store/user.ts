import {defineStore} from "pinia";
import {User_Store,User_Info} from "../utils/Types";
import {ofetch} from "ofetch";
import {loginValidation, setCookie,extractUser,updateUserFav} from "../utils/Helper";
import {deleteCookie,extractToken,storeData} from "../utils/Helper";

export const useUserStore=defineStore('user',{
    state:():User_Store=>{
        return {
            loginStatus:false,
            favCoins:[],
            signUpFetchFlag:false,
            signInErrorFlag:false,
            email:undefined
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
                console.log(data.name)
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
                    storeData(this.favCoins,process.env.FAV_LIST as  string)
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
            storeData([],process.env.FAV_LIST as  string)
        },
        async triggerAutoLogin(token:string){
            try {
                const data=await ofetch(`https://extension-cdfdf-default-rtdb.firebaseio.com/users/${token}.json`)
                this.email=data.email
                this.loginStatus=true
                this.favCoins=data?.fav?.fav ?? []
                storeData(this.favCoins,process.env.FAV_LIST as  string)
            } catch (e) {
                this.resetUser()
            }
        },
        favHandler(id:string){
            if(this.isCoinExist(id)){
                this.favCoins.splice(this.favCoins.indexOf(id),1)
            }else{
                this.favCoins.push(id)
            }
            storeData(this.favCoins,process.env.FAV_LIST as  string)
            updateUserFav(this.favCoins)
        },
        removeCoinFromFavList(id:string){
            this.favCoins.splice(this.favCoins.indexOf(id),1)
            storeData(this.favCoins,process.env.FAV_LIST as  string)
            updateUserFav(this.favCoins)
        }
    }



})