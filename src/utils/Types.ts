
//////// popular types
export interface Popular_List {
    id:string,
    image:string,
    name:string,
    symbol:symbol,
    current_price:number,
    price_change_percentage_24h:number
}
export interface Popular_Store {
    coinList:Popular_List[],
    fetchFlag:boolean
}

//////// user types
export interface User_Store {
    loginStatus:boolean
}

//////// search types
export interface Search_Result {
    id:string
    name:string,
    api_symbol:string
    symbol:symbol,
    thumb:string
}
export interface Trending_List {
    item:{
        id:string,
        name:string,
        symbol:string,
        thumb:string,
        market_cap_rank:string,
        price_btc:string
    }
}

export interface Search_Store {
    searchText:string
    searchResult:Search_Result[]
    searchFlag:boolean,
    trendingList:Trending_List[],
    trendingFlag:boolean
}