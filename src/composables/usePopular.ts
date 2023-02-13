import {usePopularCoinStore} from "../store/popular";
import {computed,onMounted} from "vue";
import {Popular_List} from "./useTypes";

export const usePopular=()=>{
    const popularStore=usePopularCoinStore()
    const popularCoinLists=computed<Popular_List[]>(()=>popularStore.getCoinList)
    const fetchFlag=computed<boolean>(()=>popularStore.getFetchFlag)
    onMounted(()=>{
        popularStore.setCoinList()
    })

    return{
        popularCoinLists,fetchFlag
    }
}