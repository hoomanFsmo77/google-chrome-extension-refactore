import {useUserIndex} from "./index";
import {onMounted,ref} from "vue";
import {ofetch} from "ofetch";

export const useFollowing=()=>{
    const {favCoinList}=useUserIndex()
    const coinInfoContainer=ref<any[]>([])
    let activePreloader=ref<boolean>(false)

    onMounted( ()=>{
        activePreloader.value=false
         favCoinList.value.forEach(coinId=>{
            ofetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then(res=>{
                coinInfoContainer.value.push(res)
                activePreloader.value=true
            })
        })
    })


    return{
        coinInfoContainer,activePreloader
    }
}