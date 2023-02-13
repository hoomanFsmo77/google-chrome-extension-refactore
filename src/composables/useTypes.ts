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