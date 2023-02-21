<template>
  <section v-if="favCoinLength>0" id="has-fav-list" :class="{'h-[200px]':activePreloader}" class="flex justify-center relative items-center flex-col p-1">
    <PLoader v-if="activePreloader"/>
    <template v-else>
      <PriceCard
          v-for="(coin,index) in coinInfoContainer"
          :key="index"
          has-ring="yes"
          :icon="coin.image"
          :coin-id="coin.id"
          :coin-name="coin.name"
          :abb-name="coin.symbol"
          :price="coin.current_price"
          :price_change_percentage_24h="coin.price_change_percentage_24h"
          :outTrending="checkOutTrending(coin.id)"
      />
    </template>
  </section>
  <section v-else class="flex justify-center items-center flex-col p-1" id="no-fav-list">
    <img src="/images/fav.svg" width="250" alt="">
    <h6 class="text-center mt-1 text-primary">You are not following any cryptocurrencies yet.</h6>
  </section>
</template>

<script setup lang="ts">
import PLoader from '../../components/PLoader.vue'
import PriceCard from '../Home/PriceCard.vue'
import {useUserIndex} from "../../composables";
import {useFollowing} from "../../composables/useFollowing";
import {useSearchIndex} from "../../composables";
import {favCoins} from "../../utils/Helper";
const {favCoinLength}=useUserIndex()
const {coinInfoContainer,activePreloader}=useFollowing()
const {trendingList,trendingIds}=useSearchIndex()
const checkOutTrending = (id:string) => {
  if(trendingList.value.length>0){
    return !trendingIds.value.includes(id) && !favCoins.includes(id)
  }
}

</script>

<style scoped>

</style>