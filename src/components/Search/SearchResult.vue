<template>
  <section v-if="searchText.length>0 || searchResult.length>0" class="search-result">
    <template v-if="searchFlag">
      <ul v-if="searchResult.length>0" class="flex flex-col">
        <li class=" p-0.5" v-for="(coin,index) in searchResult" :key="index">
          <button class="flex items-center" @click="navigateToDetail(coin.id)">
            <img :src="coin.thumb"  alt="">
            <p class="ml-0.5">{{coin.id}}</p>
          </button>
        </li>
      </ul>
      <p v-else class="p-0.7 text-1">Nothing Found.</p>
    </template>
    <template v-else>
      <p class="p-0.7 text-1">Searching...</p>
    </template>
  </section>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useSearchIndex} from "src/composables";
const {searchFlag,searchResult,searchText,searchStore}=useSearchIndex()
const router=useRouter()
const navigateToDetail = (id:string) => {
  router.push({name:'index-search-detail',params:{id:id}})
  searchStore.$patch({
    searchResult:[],
    searchText:''
  })
}
</script>

<style scoped>

</style>