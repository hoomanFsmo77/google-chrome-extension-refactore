<template>
  <section id="trending-list">
    <div class="flex items-center">
      <h5 class="text-gray-600 mr-0.5">Trending Now </h5>
      <img src="../../assets/images/fire.svg" width="16" alt="">
    </div>
    <div class="grid grid-cols-2 w-full mt-1 gap-1 relative h-full" >
      <template v-if="trendingFlag">
        <TrendingCard
            v-for="coin in trendingList"
            :icon="coin.item.thumb"
            :coinName="coin.item.name"
            :symbol="coin.item.symbol"
            :price="Number(coin.item.price_btc) * bitcoinPrice"
            :rank="coin.item.market_cap_rank"
            :id="coin.item.id"
        />
      </template>
      <PLoader v-else />

    </div>
  </section>
</template>

<script setup>
import {onMounted} from "vue";
import TrendingCard from "./TrendingCard.vue";
import {usePopularIndex, useSearchIndex} from "src/composables";
import PLoader from 'src/components/PLoader.vue'
const {bitcoinPrice}=usePopularIndex()
const {trendingFlag,trendingList,searchStore}=useSearchIndex()
onMounted(()=>{
  searchStore.triggerTrendingList()
})

</script>

<style scoped>

</style>