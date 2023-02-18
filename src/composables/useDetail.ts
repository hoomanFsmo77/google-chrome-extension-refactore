import {ref,onMounted} from "vue";
import {ofetch} from "ofetch";

export const useDetail=(id:string)=>{
    const coin_data=ref<any>({})
    const flag=ref(false)
    onMounted(async ()=>{
        flag.value=false
        try {
            const data=await ofetch(process.env.DETAIL_URL as string + id)
            coin_data.value=data
        }catch (e) {
            console.log(e,'in use detail')
        }finally {
            flag.value=true
        }
    })



    return{
        coin_data,flag
    }
}