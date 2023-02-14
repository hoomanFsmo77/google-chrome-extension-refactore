import {usePopularCoinStore} from "src/store/popular";
import {useUserStore} from "src/store/user";
import {useSearchStore} from "../store/search";
import {computed} from "vue";
import {Popular_List,Search_Result,Trending_List} from "src/utils/Types";


export const usePopularIndex=()=>{
    const popularStore=usePopularCoinStore()
    const popularCoinLists=computed<Popular_List[]>(()=>popularStore.getCoinList)
    const fetchFlag=computed<boolean>(()=>popularStore.getFetchFlag)
    const bitcoinPrice=computed<number|undefined>(()=>popularStore.getBitCoinPrice)

    return{
        popularStore,
        popularCoinLists,
        fetchFlag,bitcoinPrice
    }
}


export const useUserIndex=()=>{
    const userStore=useUserStore()
    const loginStatus=computed<boolean>(()=>userStore.getLoginStatus)

    return{loginStatus,userStore}
}

export const useSearchIndex=()=>{
    const searchStore=useSearchStore()
    const searchResult=computed<Search_Result[]>(()=>searchStore.searchResult)
    const searchFlag=computed<boolean>(()=>searchStore.getSearchFlag)
    const searchText=computed<string>(()=>searchStore.searchText)

    const trendingList=computed<Trending_List[]>(()=>searchStore.getTrendingList)
    const trendingFlag=computed(()=>searchStore.getTrendingFlag)

    return{
        searchStore,searchResult, searchFlag,searchText,trendingList,trendingFlag
    }
}