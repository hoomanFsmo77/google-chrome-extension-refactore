import {getStoreData,storeData} from "./utils/Helper";
import {useUserStore} from "./store/user";
import {ofetch} from "ofetch";
///////////////////////////////////////////////////////////////////
type ATimer={name:string,timer:any}
let timerContainer:ATimer[]=[]
/////////////////////////////// set notification on load
export const backgroundInit = () => {
    timerContainer=getStoreData(process.env.TIMER_LIST as string) || []
    let alertList=getStoreData(process.env.ALERT_LIST as string) ?? []
    if(alertList.length > 0){
        alertList.forEach(item=>{
            createNotification(item,false)
        })
    }
}
///////////////////////////////// create notification
export const createNotification = (coinId:string,saveData=true) => {
    const store=useUserStore()
    let interval =setInterval(async ()=>{
        try {
            const response=await ofetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`)
            new Notification(`MultiCoin extension price alert`,{
                icon:'./images/logo_32.png',
                body:`${coinId} price is currently ${response[coinId].usd} $`
            })
        }catch (err) {
            console.log(err)
        }
    },store.getInterval *60000)

    if(saveData){
        timerContainer.push({
            name:coinId,
            timer:interval
        })
        storeData<ATimer>(timerContainer,process.env.TIMER_LIST as string)
    }
}
///////////////////////////// delete notification
export const removeNotification = (coinId:string) => {
    let targetIndex=timerContainer.findIndex(item=>item.name===coinId)
    window.clearInterval(timerContainer[targetIndex]?.timer)
    clearInterval(timerContainer[targetIndex]?.timer)
    timerContainer.splice(targetIndex,1)
    storeData<ATimer>(timerContainer,process.env.TIMER_LIST as string)
}
///////////////////////////////////// remove all notifications
export const removeAllAlerts = () => {
    timerContainer.forEach(item=>{
        window.clearInterval(item.timer)
        clearInterval(item.timer)
    })
    timerContainer=[]
    storeData<ATimer>(timerContainer,process.env.TIMER_LIST as string)
}