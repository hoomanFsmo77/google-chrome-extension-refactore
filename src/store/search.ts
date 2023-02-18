import {defineStore} from "pinia";
import {Search_Store,Search_Result,Trending_List} from "../utils/Types";
import {ofetch} from "ofetch";

export const useSearchStore=defineStore('search',{
    state:():Search_Store=>{
        return {
            searchText:'',
            searchResult:[],
            searchFlag:false,
            trendingList:[],
            trendingFlag:false
        }
    },
    getters:{
        getSearchResult(state){
            return state.searchResult
        },
        getSearchFlag(state){
            return state.searchFlag
        },
        getTrendingList(state){
            return state.trendingList
        },
        getTrendingFlag(state){
            return state.trendingFlag
        },
    },
    actions:{
        async triggerSearch(value:string){
            this.searchText=value
            this.searchFlag=false
            try {
                const data=await ofetch<{coins:Search_Result[]}>(process.env.SEARCH_URL as string,{query:{query:value}})
                this.searchResult=data.coins
            }catch (err){
                console.warn(err,'in search store')
            }finally {
                this.searchFlag=true
            }
        },
        async triggerTrendingList(){
            this.trendingFlag=false
            try {
                const data=await ofetch(process.env.TRENDING_URL as  string)
                this.trendingList=data.coins as Trending_List[]
            }catch (e) {
                console.log(e,'in search store')
            }finally {
                this.trendingFlag=true
            }
        }
    }

})