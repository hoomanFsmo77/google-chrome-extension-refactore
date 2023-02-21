import {useUserIndex} from "./index";
import {onMounted,ref} from "vue";
import {ofetch} from "ofetch";

export const useFollowing=()=>{
    const {favCoinList}=useUserIndex()
    const coinInfoContainer=ref<any[]>([])
    let activePreloader=ref<boolean>(true)

    onMounted(async ()=>{
        activePreloader.value=true
        const ids=favCoinList.value.join('%2C')
        try {
            const data=await ofetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24`)
            coinInfoContainer.value=data
        }catch (e) {
            console.log(e)
        }finally {
            activePreloader.value=false
        }

    })



    return{
        coinInfoContainer,activePreloader
    }
}