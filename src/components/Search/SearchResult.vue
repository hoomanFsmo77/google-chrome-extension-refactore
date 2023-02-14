<template>
  <section v-if="searchText.length>0" class="search-result">
    <template v-if="searchFlag">
      <ul  class="flex flex-col">
        <li class="flex items-center p-0.5" v-for="(coin,index) in searchResult" :key="index">
          <img :src="coin.thumb"  alt="">
          <p class="ml-0.5">{{coin.id}}</p>
        </li>
      </ul>
    </template>
    <template v-else>
      <p class="p-0.7 text-1">Searching...</p>
    </template>
  </section>
</template>

<script setup lang="ts">
import {useSearchIndex} from "src/composables";
const {searchFlag,searchResult,searchText}=useSearchIndex()
</script>

<style scoped>

</style>