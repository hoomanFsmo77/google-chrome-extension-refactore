import {onMounted} from "vue";
import {usePopularIndex} from "./index";


export const useHome=()=>{
    const {popularCoinLists,popularStore,fetchFlag}=usePopularIndex()
    onMounted(()=>{
        popularStore.setCoinList()
    })

    return{
        popularCoinLists,fetchFlag
    }
}