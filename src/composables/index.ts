import {usePopularCoinStore} from "../store/popular";
import {useUserStore} from "../store/user";
import {useSearchStore} from "../store/search";
import {computed} from "vue";
import {Popular_List,Search_Result,Trending_List} from "../utils/Types";


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
    const signUpFetchFlag=computed<boolean>(()=>userStore.signUpFetchFlag)
    const signInErrorFlag=computed<boolean>(()=>userStore.signInErrorFlag)
    const userEmail=computed<string|undefined>(()=>userStore.email)
    const favCoinLength=computed<number>(()=>userStore.getFavCoinLength)
    const favCoinList=computed<string[]>(()=>userStore.getFavCoinList)
    return{loginStatus,userStore,signUpFetchFlag,signInErrorFlag,userEmail,favCoinLength,favCoinList}
}

export const useSearchIndex=()=>{
    const searchStore=useSearchStore()
    const searchResult=computed<Search_Result[]>(()=>searchStore.searchResult)
    const searchFlag=computed<boolean>(()=>searchStore.getSearchFlag)
    const searchText=computed<string>(()=>searchStore.searchText)
    const trendingList=computed<Trending_List[]>(()=>searchStore.getTrendingList)
    const trendingFlag=computed(()=>searchStore.getTrendingFlag)
    const trendingIds=computed<string[]>(()=>searchStore.getTrendingIds)

    return{
        searchStore,searchResult, searchFlag,searchText,trendingList,trendingFlag,trendingIds
    }
}