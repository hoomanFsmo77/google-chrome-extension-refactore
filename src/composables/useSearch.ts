import {ref} from "vue";
import {useSearchIndex} from "./index";

export const useSearch=()=>{
    const searchText=ref<string>('')
    const {searchStore}=useSearchIndex()

    const triggerSearch = () => {
        searchStore.triggerSearch(searchText.value)
    }


    return{
        triggerSearch,searchText
    }
}