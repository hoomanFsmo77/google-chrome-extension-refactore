import {defineStore} from "pinia";
import {Popular_Store,Popular_List} from "../utils/Types";
import {ofetch} from "ofetch";
import {favCoins} from "../utils/Helper";


export const usePopularCoinStore=defineStore('popular',{
    state:():Popular_Store=>{
        return {
            coinList:[],
            fetchFlag:false
        }
    },
    getters:{
        getCoinList(state){
            return state.coinList
        },
        getFetchFlag(state){
            return state.fetchFlag
        },
        getFilteredCoinList:()=>(allCoinList:Popular_List[]):Popular_List[]=>{
            const result:Popular_List[]=[]
            favCoins.forEach(item=>{
                allCoinList.forEach(coin=>{
                    if(item===coin.id){
                        result.push(coin)
                    }
                })
            })
            return result;
        },
        getBitCoinPrice(state):number|undefined{
            if(state.fetchFlag){
                return  state.coinList.filter(item=>item.id==='bitcoin')[0].current_price
            }
        }
    },
    actions:{
         async setCoinList(){
             this.fetchFlag=false
             try {
                 const data:Popular_List[]=await ofetch(process.env.POPULAR_URL as string)
                 this.coinList=this.getFilteredCoinList(data)
             }catch (err) {
                 console.warn(err,'in popular store')
             }finally {
                 this.fetchFlag=true
             }
        }

    }
})